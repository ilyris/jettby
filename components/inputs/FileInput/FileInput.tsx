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

export default function FileInput({ label, type, cid, name }) {
  const dispatch = useDispatch();

  // base64 images
  const [images, setImages] = useState([]);

  // files uploaded by user in client
  const [files, setFiles] = useState([]);

  // successfully uploaded images to cloudinary
  const [cloudImgs, setCloudImgs] = useState([]);
  const fileInput = useRef(null);
  const itemsRef = useRef([]);

  const handleChange = async (e) => {
    // Set Files
    if ([...e.target.files].length >= 20) {
      setAlertMessage("Exceeded maximum images of 20", "danger");
    }

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

    [...e.target.files].forEach(async (file, i) => {
      // const sanitizedFileName = file.name.substring(
      //   0,
      //   file.name.lastIndexOf(".")
      // );
      setFiles([...files, ...e.target.files]);
      setImages([...images, ...res]);

      // if (cloudinaryImages.length) {
      //   let flag = false;
      //   cloudinaryImages.forEach((img) => {
      //     console.log(sanitizedFileName === img.original_filename);
      //     if (sanitizedFileName === img.original_filename) {
      //       flag = true;
      //       return;
      //     }
      //   });
      //   if (flag) return;
      // }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Jettby");

      const response = await axios.post(
        process.env.NEXT_PUBLIC_CLOUDINARY_API,
        formData,
        {
          onUploadProgress: () => {
            if (itemsRef.current[i] == undefined) return;
            if (!itemsRef.current[i].classList.contains("loaded")) {
              itemsRef.current[i].classList.add("isLoading");
            }
          },
        }
      );
      try {
        // save photo data to local state and the url to the database
        console.log(response.data);
        console.log("setting state");
        // setCloudImgs([response.data, ...cloudImgs]);
        setCloudImgs([...cloudImgs, response.data]);
        debugger;
        console.log("done!");
        itemsRef.current[i].classList.remove("isLoading");
        itemsRef.current[i].classList.add("loaded");

        dispatch(
          setAlertMessage(
            "Your images have been uploaded successfully!",
            "success"
          )
        );
      } catch (err) {
        console.log(err);
        dispatch(
          setAlertMessage("Failed to upload images to server", "danger")
        );
      }
    });
  };

  const handleDelete = (name) => {
    console.log(name);
    const sanitizedName = name.substring(0, name.lastIndexOf("."));

    // filter files based on the image name
    const filteredFiles = images.filter((image) => {
      return image.name !== name;
    });

    // filter cloudinary images based on if the file.name === cloudinaryImg.name
    // const cloudinaryImgToDelete = cloudinaryImages.filter((img) => {
    //   console.log(img.original_filename);
    //   console.log(sanitizedName);
    //   return img.original_filename === sanitizedName;
    // });
    console.log(cloudinaryImages);
    return;

    // api call to delete
    axios
      .post(`https://api.cloudinary.com/v1_1/sieren/delete_by_token`, {
        token: cloudinaryImgToDelete[0].delete_token,
      })
      .then((res) => {
        cloudinaryImages = [...cloudinaryImages].filter((img) => {
          return img.original_filename !== sanitizedName;
        });
        console.log(res);
      })
      .catch((err) => console.log(err));

    console.log(filteredFiles);
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
