import StudentCard from "../components/StudentCard";
import { useStudents } from "../context/StudentContext";

function Students() {
    const { students, deleteStudent } = useStudents();

    // Aesthetic Sky Blue Theme Styles (Solid colors, zero lines)
    const pageStyle = {
        minHeight: "100vh",
        backgroundColor: "#c1d9f4", // Soft, calming aesthetic sky blue tint
        padding: "40px 20px",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    };

    const headerStyle = {
        textAlign: "center",
        color: "#1e3a8a", // Deep royal blue for strong, elegant contrast
        margin: "0 0 8px 0",
        fontSize: "2.4rem",
        fontWeight: "600",
        letterSpacing: "-0.02em"
    };

    const countStyle = {
        textAlign: "center",
        color: "#475569", // Smooth slate-gray for text hierarchy
        fontSize: "1.05rem",
        margin: "0 0 32px 0"
    };

    const badgeStyle = {
        backgroundColor: "#e0f2fe", // Pastel sky blue accent pill box
        color: "#0369a1", // Rich ocean blue text color
        padding: "4px 12px",
        borderRadius: "20px",
        fontWeight: "600",
        fontSize: "0.95rem",
        marginLeft: "6px"
    };

    // Clean top-to-bottom stack layout
    const verticalListStyle = {
        display: "flex",
        flexDirection: "column",  // Forces items to stack straight down
        gap: "18px",              // Balanced space between cards
        maxWidth: "680px",        // Elegant, focused content width layout
        margin: "0 auto"          // Centers the whole stack horizontally
    };

    const emptyStyle = {
        textAlign: "center",
        color: "#64748b",
        marginTop: "40px",
        fontSize: "1.1rem"
    };

    return (
        <div style={pageStyle}>
            <h1 style={headerStyle}>Students</h1>
            <p style={countStyle}>
                Total Students: <span style={badgeStyle}>{students.length}</span>
            </p>
            
            {students.length === 0 ? (
                <p style={emptyStyle}>No students available.</p>
            ) : (
                <div style={verticalListStyle}>
                    {students.map((student) => (
                        <StudentCard
                            key={student.id}
                            student={student}
                            onDelete={deleteStudent}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Students;
