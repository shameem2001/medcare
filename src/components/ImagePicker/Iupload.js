import React from "react";
import * as filestack from "filestack-js";
import apis from "../../apis";

export default function Iupload() {
  const [updateImage, setImage] = React.useState("");
  const [selectedFile, updateFile] = React.useState(null);
  const client = filestack.init("AR9a0fhrDRleWdYYiy68qz");
  const fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
    updateFile(event.target.files[0]);
  };
  const fileUploadHandler = async () => {
    await client.upload(selectedFile).then(async (data) => {
      let userId = "62eb8325200962b69181cb01";
      await apis
        .put(`user/${userId}`, {
          img: data.url,
        })
        .then((data2) => console.log(data2))
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="Fileupload">
      <input type="file" onChange={fileSelectedHandler} />

      <button onClick={fileUploadHandler}>Upload</button>
    </div>
  );
}
