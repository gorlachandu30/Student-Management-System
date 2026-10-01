import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        students,
        updateStudent
    } = useStudents();

    const student = students.find(
        (student) =>
            student.id === Number(id)
    );

    const [name, setName] = useState(
        student ? student.name : ""
    );

    const [email, setEmail] = useState(
        student ? student.email : ""
    );

    const [course, setCourse] = useState(
        student ? student.course : ""
    );

    const [year, setYear] = useState(
        student ? student.year : ""
    );

    if (!student) {
        return (
            <div style={styles.page}>
                <div style={styles.box}>
                    <h1>Student Not Found</h1>

                    <button
                        style={styles.button}
                        onClick={() =>
                            navigate("/students")
                        }
                    >
                        Back to Students
                    </button>
                </div>
            </div>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedStudent = {
            id: student.id,
            name: name,
            email: email,
            course: course,
            year: Number(year)
        };

        updateStudent(updatedStudent);

        alert("Student Updated Successfully");

        navigate("/students");
    };

    return (
        <div style={styles.page}>

            <div style={styles.box}>

                <h1 style={styles.heading}>
                    Edit Student
                </h1>

                <form onSubmit={handleSubmit}>

                    <div style={styles.field}>
                        <label>Name:</label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.field}>
                        <label>Email:</label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.field}>
                        <label>Course:</label>

                        <input
                            type="text"
                            value={course}
                            onChange={(e) =>
                                setCourse(e.target.value)
                            }
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.field}>
                        <label>Year:</label>

                        <input
                            type="number"
                            value={year}
                            onChange={(e) =>
                                setYear(e.target.value)
                            }
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.buttons}>

                        <button
                            type="submit"
                            style={styles.updateButton}
                        >
                            Update Student
                        </button>

                        <button
                            type="button"
                            style={styles.cancelButton}
                            onClick={() =>
                                navigate("/students")
                            }
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

const styles = {

    page: {
        minHeight: "100vh",

        backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRycRSxqvdQfE1IzOaPlv62Qiu8apFnaH8E90EjwWukmA&s=10')",

        backgroundSize: "cover",

        backgroundPosition: "center",

        backgroundRepeat: "no-repeat",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        padding: "30px"
    },

    box: {
        width: "450px",

        padding: "35px",

        backgroundColor:
            "rgba(255, 255, 255, 0.92)",

        borderRadius: "15px",

        boxShadow:
            "0 8px 25px rgba(0,0,0,0.2)"
    },

    heading: {
        textAlign: "center",

        color: "#123b66",

        marginBottom: "30px"
    },

    field: {
        display: "flex",

        flexDirection: "column",

        marginBottom: "18px",

        gap: "7px"
    },

    input: {
        padding: "11px",

        fontSize: "16px",

        border: "1px solid #aaa",

        borderRadius: "7px",

        outline: "none"
    },

    buttons: {
        display: "flex",

        justifyContent: "center",

        gap: "15px",

        marginTop: "25px"
    },

    updateButton: {
        padding: "11px 20px",

        background: "#1976d2",

        color: "white",

        border: "none",

        borderRadius: "7px",

        cursor: "pointer"
    },

    cancelButton: {
        padding: "11px 20px",

        backgroundColor: "#777",

        color: "white",

        border: "none",

        borderRadius: "7px",

        cursor: "pointer"
    },

    button: {
        padding: "10px 20px",

        backgroundColor: "#1976d2",

        color: "white",

        border: "none",

        borderRadius: "7px",

        cursor: "pointer"
    }
};

export default EditStudent;