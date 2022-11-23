import { useState } from "react";
function Contact() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const n = event.target.name;
    const v = event.target.value;
    setInputs((values) => ({ ...values, [n]: v }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(inputs);
    console.log(inputs);
  };

  return (
    <div className="col-sm-8">
      <h2>Contact With Us </h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <input
            type="text"
            className="form-control"
            name="message"
            value={inputs.message}
            onChange={handleChange}
            placeholder="Enter Message"
          />
        </div>

        <input type="submit" className="btn btn-primary" value="SUBMIT" />
      </form>
      You have submitted: {inputs.name}, {inputs.email}, {inputs.message}
    </div>
  );
}

export default Contact;
