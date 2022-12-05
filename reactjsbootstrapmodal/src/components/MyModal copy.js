import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function MyModal() {
  const [info, setInfo] = useState({
    modal: false,
    name: "",
    city: "",
  });
  function toggle() {
    setInfo({ modal: !info.modal });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(info);
    alert("Submitted");
    toggle();
  }

  function changeVlue(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <h1>My Modal Button</h1>
      <button onClick={toggle}>Click Here</button>
      <Modal isOpen={info.modal}>
        <form onSubmit={handleSubmit} className="form-horizontal">
          <ModalHeader>Hello, This is Modal</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                onChange={changeVlue}
                name="name"
              />
            </div>
            <div className="form-group">
              <label>City:</label>
              <input
                type="text"
                className="form-control"
                onChange={changeVlue}
                name="city"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <input type="submit" className="btn btn-info" value="SUBMIT" />
            <Button onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}
