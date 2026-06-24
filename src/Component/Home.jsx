import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
    
  }, []);

  const loadStudents = async () => {
    const result = await axios.get(
      "http://localhost:3000/students"
    );

    setStudents(result.data);
  };
 const deleteStudent = async (id) => {
  await axios.delete(
    `http://localhost:3000/students/${id}`
  );

  loadStudents();
};
  return (
  <div className="container mt-5">

    <h1 className="text-center text-primary fw-bold mb-4">
      Student Management System
    </h1>

    <div className="text-center mb-4">
      <Link to="/" className="btn btn-primary me-2">
        Display Data
      </Link>

      <Link to="/add" className="btn btn-dark">
        Add New Data
      </Link>
    </div>

    <table className="table table-bordered mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>

            <td>
              <button
                className="btn btn-danger me-2"
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </button>

              <Link
                className="btn btn-warning"
                to={`/edit/${student.id}`}
              >
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  </div>
);
}
export default Home;