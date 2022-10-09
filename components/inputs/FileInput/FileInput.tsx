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
import { setAlertMessage, setSellerImages } from "../../../redux/actions";
import { setCloudinaryImages } from "../../../redux/features/selling/selling";

export default function FileInput({ label, type, cid, name }) {
  const dispatch = useDispatch();

  // base64 images
  const [images, setImages] = useState([]);

  // files uploaded by user in client
  const [files, setFiles] = useState([]);

  // successfully uploaded images to cloudinary
  const [cloud, setCloud] = useState([]);
  let cloudImgs = [];

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
    setFiles(handleDupeImages([...files, ...e.target.files]));

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

    handleDupeImages([...files, ...e.target.files]).forEach(async (file, i) => {
      const sanitizedFileName = file.name.substring(
        0,
        file.name.lastIndexOf(".")
      );
      if (cloud.length) {
        let flag = false;
        cloud.forEach((img) => {
          if (sanitizedFileName === img.original_filename) {
            flag = true;
            return;
          }
        });
        if (flag) return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Jettby");

      await axios
        .post(
          `${process.env.NEXT_PUBLIC_CLOUDINARY_API}/image/upload`,
          formData,
          {
            onUploadProgress: () => {
              // if you loop through only the recently added files, the index is reset back to 0
              // targeting the incorrect itemRef
              if (itemsRef.current[i] == undefined) return;
              if (!itemsRef.current[i].classList.contains("loaded")) {
                itemsRef.current[i].classList.add("isLoading");
              }
            },
          }
        )
        .then((response) => {
          cloudImgs.push(response.data);
          setCloud([...cloud, ...cloudImgs]);
          itemsRef.current[i].classList.remove("isLoading");
          itemsRef.current[i].classList.add("loaded");
          dispatch(
            setAlertMessage(
              "Your images have been uploaded successfully!",
              "success"
            )
          );
        })
        .catch((err) => {
          dispatch(
            setAlertMessage("Failed to upload images to server", "danger")
          );
        });
    });
  };

  const handleDelete = (name) => {
    const sanitizedName = name.substring(0, name.lastIndexOf("."));

    // filter files based on the image name
    const filteredFiles = images.filter((image) => {
      return image.name !== name;
    });
    const deleteImg = cloud.filter(
      (img) => img.original_filename === sanitizedName
    );

    // api call to delete
    axios
      .post(`${process.env.NEXT_PUBLIC_CLOUDINARY_API}/delete_by_token`, {
        token: deleteImg[0].delete_token,
      })
      .then(() => {
        setCloud(
          [...cloud].filter((img) => img.original_filename !== sanitizedName)
        );
      })
      .catch((err) => console.log(err));

    setFiles(filteredFiles);
    setImages(filteredFiles);
  };

  const handleFileInput = () => {
    fileInput.current.click();
  };

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, images.length);
    dispatch(setSellerImages(images));
  }, [images.length]);

  useEffect(() => {
    dispatch(setCloudinaryImages(cloud));
  }, [cloud.length]);

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

      {!!images.length && (
        <div className="Upload--container">
          <SRLWrapper>
            {images.map((image, i) => {
              return (
                <div
                  className="Input--image__card"
                  ref={(el) => (itemsRef.current[i] = el)}
                  key={image.name}
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
