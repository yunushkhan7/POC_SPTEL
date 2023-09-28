import * as React from "react";
import FaceCapture from "@getyoti/react-face-capture";

const CustomReact = () => {
  const onSuccess = ({ img }: any) => {
    const base64Array = img.split(",");
    const base64URI = base64Array[1];
    localStorage.setItem("base64URI", base64URI);
    window.location.href = "/verify-age";
  };
  const onError = (error: any) => console.log("Error =", error);
  return <FaceCapture onSuccess={onSuccess} onError={onError} />;
};

export default CustomReact;
