import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: "",
  });

  const { id, name, email } = student;

  const onInputChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
  e.preventDefault();

  console.log(student);

  await axios.post(
    "http://localhost:3000/students",
    student
  );

    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <h2 className="text-center text-dark mb-4">
            Add New Student
          </h2>

          <form onSubmit={onSubmit}>

            <div className="mb-3">
              <label className="form-label">ID</label>
              <input
                type="number"
                className="form-control"
                name="id"
                value={id}
                onChange={onInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={onInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={onInputChange}
                required
              />
            </div>

            <div className="mt-3">
            <button
            type="submit"
            className="btn btn-success"
            >
            Update Student
           </button>

           <button
           type="button"
           className="btn btn-secondary ms-2"
           onClick={() => navigate("/")}
           >
           Back
           </button>
           </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default Add;