import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    alluser();
  }, []);

  const [isuser, setuser] = useState([]);
  const alluser = async (ids) => {
    try {
      axios
        .get(
          `http://localhost/ReactJs/Projects/sadaka/reactApi/users.php`
        )
        .then((res) => {
          console.log(res.data.userlist.userdata);
          setuser(res.data.userlist.userdata);
        });
    } catch (error) {
      throw error;
    }
  };

  const deleteConfirm = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteUser(id);
    }
  };
  const deleteUser = async (id) => {
    try {
      axios
        .post(`http://localhost/ReactJs/Projects/sadaka/reactApi/users.php`, {
          userids: id,
        })
        .then((res) => {
          setuser([]);
          alluser();
          return;
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <div className="page-heading text-center">

        <div className="container zoomIn animated">

          <h1 className="page-title">List of User <span className="title-under"></span></h1>
          <p className="page-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Necessitatibus.
          </p>

        </div>

      </div>

      <div className="main-container">


        {/* <!-- /.about-us --> */}


        <div className="animate-onscroll fadeIn">
          <div className="container">

            <Link to="/insert" className="btn btn-primary">
              {" "}
              Create User{" "}
            </Link>

            <table className="table table-striped">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Eamil</th>
                <th>Action</th>
              </tr>
              {isuser.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link to={`edit/${item.id}`} className="btn btn-outline-primary">
                      Edit
                    </Link>
                    <span
                      onClick={() => deleteConfirm(item.id)}
                      className="btn
                btn-outline-danger mx-2"
                    >

                      Delete
                    </span>
                  </td>
                </tr>
              ))}
            </table>

            {/* {isuser.map((item, index) => (
        <div className="list" key={item.id}>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
          <Link to={`edit/${item.id}`} className="btn default-btn">
            {" "}
            Edit{" "}
          </Link>
          <p onClick={() => deleteConfirm(item.id)} className="btn default-btn">
            {" "}
            Delete{" "}
          </p>
        </div>
      ))} */}

          </div>



        </div>



      </div>


    </div>
  );
};

export default UserList;
