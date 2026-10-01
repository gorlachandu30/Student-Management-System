import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

function AddStudent() {
    const navigate = useNavigate();
    const { addStudent } = useStudents();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !course || !year) {
            alert("Please fill all fields");
            return;
        }
        const student = {
            name: name,
            email: email,
            course: course,
            year: Number(year)
        };
        addStudent(student);
        alert("Student Added Successfully");
        navigate("/students");
    };

    // --- Modern Library Aesthetic Styles ---
    const pageStyle = {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",  // Centers horizontally
        alignItems: "center",      // Centers vertically
        // High-quality aesthetic warm university library background image
        backgroundImage: "url('https://i.postimg.cc/yYNNsqFy/SAVE-20260927-203634-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    };
    

    const formCardStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.95)", // Elegant glassmorphism soft-solid card
        padding: "35px",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", // Deep drop shadow for layered depth
        width: "100%",
        maxWidth: "420px",
        boxSizing: "border-box"
    };

    const headerStyle = {
        textAlign: "center",
        color: "#1e3a8a", // Strong academic blue header text
        margin: "0 0 24px 0",
        fontSize: "1.8rem",
        fontWeight: "600",
        letterSpacing: "-0.01em"
    };
    
    const inputGroupStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        marginBottom: "18px"
    };

    const labelStyle = {
        color: "#475569", // Slate gray for smooth typography
        fontWeight: "500",
        fontSize: "0.9rem"
    };

    const inputStyle = {
        padding: "10px 14px",
        borderRadius: "8px",
        border: "1px solid #cbd5e1",
        fontSize: "1rem",
        outline: "none",
        backgroundColor: "#f8fafc",
        transition: "border-color 0.2s"
    };

    const buttonStyle = {
        width: "100%",
        padding: "12px",
        backgroundColor: "#0284c7", // Aesthetic deep sky blue action button
        color: "#ffffff",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        fontWeight: "600",
        cursor: "pointer",
        marginTop: "10px",
        boxShadow: "0 4px 6px rgba(2, 132, 199, 0.15)"
    };

    return (
        <div style={pageStyle}>
            <div style={formCardStyle}>
                <h1 style={headerStyle}>Add Student</h1>
                <form onSubmit={handleSubmit}>
                    
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Name:</label>
                        <input 
                            type="text" 
                            style={inputStyle}
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter full name"
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Email:</label>
                        <input
                            type="email"
                            style={inputStyle}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="student@example.com"
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Course:</label>
                        <input
                            type="text"
                            style={inputStyle}
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            placeholder="e.g. Computer Science"
                        />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Year:</label>
                        <input
                            type="number"
                            style={inputStyle}
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            placeholder="e.g. 1"
                        />
                    </div>

                    <button type="submit" style={buttonStyle}>
                        Add Student
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddStudent;

