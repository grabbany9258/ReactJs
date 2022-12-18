import axios from "axios";
import React, { useState } from "react";

export default function UploadForm() {
  const [info, setInfo] = useState({
    username: "",
    name: "",
  });

  const [photo, setPhoto] = useState({
    file: "",
  });
  const changePhoto = (e) => {
    setPhoto({ file: e.target.files[0] });
  };
  //console.log(photo);

  const changeValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  //console.log(info);

  const submitHandle = (e) => {
    e.preventDefault();
    fileUpload();
  };

  const fileUpload = () => {
    let datas = new FormData();
    datas.append("mydata", JSON.stringify(info));
    datas.append("mydata1", photo.file);
    axios
      .post(
        "http://localhost/ReactJs/reactjs_axios_fileupload/api/new_uploads.php",
        datas,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        //alert(res.data.msg);
      });
  };

  return (
    <div>
      <h1>Upload Photo with Form</h1>
      <div className="container">
        <form onSubmit={submitHandle}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={changeValue}
          />{" "}
          <br />
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={changeValue}
          />{" "}
          <br />
          <label>Photo: </label>
          <input type="file" name="photo" onChange={changePhoto} /> <br />
          <input type="submit" name="submit" value="SUBMIT" /> <br />
        </form>
      </div>
    </div>
  );
}
