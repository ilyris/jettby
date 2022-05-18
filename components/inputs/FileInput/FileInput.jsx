// libs
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

// components
import Form from "react-bootstrap/Form";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Icons
import {
  faTrashCan,
  faFileUpload,
  faSpinner,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

// lightbox
import { SRLWrapper } from "simple-react-lightbox";

// redux
import { useDispatch } from "react-redux";
import {
  setAlertMessage,
  resetAlert,
  setSellerImages,
} from "../../../redux/actions";

export default function FileInput({ label, type, cid, name }) {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);

  const fileInput = useRef(null);
  const itemsRef = useRef([]);

  const handleDupeImages = (arr) => {
    const uniqueFile = new Set();
    const unique = arr.filter((file) => {
      const isDuplicate = uniqueFile.has(file.name);

      uniqueFile.add(file.name);

      if (!isDuplicate) {
        return true;
      }

      return false;
    });

    return unique;
  };

  const handleChange = async (e) => {
    // Set Files
    if (handleDupeImages([...files, ...e.target.files]).length >= 20) {
      setAlertMessage("Exceeded maximum images of 20", "danger");
    }
    await setFiles(handleDupeImages([...files, ...e.target.files]));

    // Create Images
    let imagesSrcs = Array.from(e.target.files).map((file) => {
      let reader = new FileReader();

      return new Promise((resolve) => {
        reader.onload = function () {
          resolve({ name: file.name, b64: reader.result });
        };

        reader.readAsDataURL(file);
      });
    });

    let res = await Promise.all(imagesSrcs);
    setImages(handleDupeImages([...images, ...res]));

    // Trigger cloudinary call / display loading || loaded assests
    handleDupeImages([...files, ...e.target.files]).forEach((file, i) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Jettby");

      axios
        .post(process.env.NEXT_PUBLIC_CLOUDINARY_API, formData, {
          onUploadProgress: () => {
            if (itemsRef.current[i] == undefined) return;
            if (!itemsRef.current[i].classList.contains("loaded")) {
              itemsRef.current[i].classList.add("isLoading");
            }
          },
        })
        .then(() => {
          itemsRef.current[i].classList.remove("isLoading");
          itemsRef.current[i].classList.add("loaded");
        })
        .catch((err) => {
          dispatch(
            setAlertMessage("Failed to upload images to server", "danger")
          );
        });
    });

    dispatch(
      setAlertMessage("Your images have been uploaded successfully!", "success")
    );

    // Reset Alert
    setTimeout(() => {
      dispatch(resetAlert());
    }, 4500);
  };

  const handleDelete = (name) => {
    const filteredFiles = images.filter((image) => {
      return image.name !== name;
    });
    setImages(filteredFiles);
  };

  const handleFileInput = () => {
    fileInput.current.click();
  };

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, images.length);
    dispatch(setSellerImages(images));
  }, [images.length]);

  return (
    <>
      <div className="FileInput">
        <div>
          <Form.Label controlId={cid}>{label}</Form.Label>

          <Form.Control
            type={type}
            name={name}
            ref={fileInput}
            onChange={handleChange}
            multiple
            style={{ display: "none" }}
          />
        </div>

        <div className="FileInput--upload" onClick={handleFileInput}>
          <FontAwesomeIcon icon={faFileUpload} />
          <p>
            <span>Browse</span> files to upload
          </p>
        </div>
      </div>

      {images.length && (
        <div className="Upload--container">
          <SRLWrapper>
            {images.map((image, i) => {
              return (
                <div
                  className="Input--image__card"
                  ref={(el) => (itemsRef.current[i] = el)}
                >
                  <div
                    className="overlay"
                    onClick={() => handleDelete(image.name)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </div>
                  <Image
                    src={image.b64}
                    width={"75px"}
                    height={"75px"}
                    name={image.name}
                  />
                  <FontAwesomeIcon className="spinner" icon={faSpinner} />
                  <FontAwesomeIcon className="check" icon={faCheck} />
                </div>
              );
            })}
          </SRLWrapper>
        </div>
      )}
    </>
  );
}
