import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    loadStudent();
  }, []);
  const onInputChange = (e) => {
  setStudent({
    ...student,
    [e.target.name]: e.target.value,
  });
};

  const loadStudent = async () => {
    const result = await axios.get(
      `http://localhost:3000/students/${id}`
    );

    setStudent(result.data);
  };
   
 const onSubmit = async (e) => {
  e.preventDefault();

  await axios.put(
    `http://localhost:3000/students/${id}`,
    student
  );

  navigate("/");
};

  return (
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">

        <h2
        className="text-center mb-4 fw-bold"
        style={{ color: "black" }}
        >
        Edit Student
        </h2>

        <form onSubmit={onSubmit}>

          <div className="mb-3">
            <label className="form-label">ID</label>
            <input
              type="text"
              className="form-control"
              value={student.id}
              readOnly
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
            type="text"
            className="form-control"
            name="name"
            value={student.name}
            onChange={onInputChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
           <input
           type="email"
           className="form-control"
           name="email"
           value={student.email}
           onChange={onInputChange}
           />
          </div>

          <button
          type="submit"
          className="btn btn-success"
          >
          Update Student
          </button>
        </form>

      </div>
    </div>
  </div>
);
}
export default Edit;