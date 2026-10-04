import StudentCard from "../components/StudentCard";
import { useStudents } from "../context/StudentContext";
function Students() {
    const { students, deleteStudent } = useStudents();
    const pageStyle = {
        minHeight: "100vh",
        padding: "45px 20px",
        fontFamily: "Arial, sans-serif",

        backgroundImage:
            "url('https://i.postimg.cc/2jxFLCNy/Chat-GPT-Image-Oct-4-2026-04-51-12-PM.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",

        animation: "backgroundZoom 15s ease-in-out infinite alternate"
    };

    const headerStyle = {
        textAlign: "center",
        color: "white",
        fontSize: "2.7rem",
        fontWeight: "bold",
        margin: "0 0 10px",
        textShadow: "2px 3px 8px rgba(0,0,0,0.7)"
    };

    const countStyle = {
        textAlign: "center",
        color: "white",
        fontSize: "1.1rem",
        marginBottom: "35px",
        textShadow: "1px 2px 5px rgba(0,0,0,0.7)"
    };

    const badgeStyle = {
        background: "rgba(255,255,255,0.85)",
        color: "#24558c",
        padding: "6px 15px",
        borderRadius: "20px",
        fontWeight: "bold",
        marginLeft: "8px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.15)"
    };

    const listStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "22px",
        maxWidth: "760px",
        margin: "0 auto"
    };

    const cardStyle = {
        background: "rgba(255, 255, 255, 0.72)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "22px",
        padding: "20px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
        border: "1px solid rgba(255,255,255,0.6)"
    };

    const emptyStyle = {
        textAlign: "center",
        color: "white",
        fontSize: "1.1rem",
        textShadow: "1px 2px 5px black"
    };

    return (
        <div style={pageStyle}>

            <h1 style={headerStyle}>
                Students
            </h1>

            <p style={countStyle}>
                Total Students:
                <span style={badgeStyle}>
                    {students.length}
                </span>
            </p>

            {students.length === 0 ? (
                <p style={emptyStyle}>
                    No students available.
                </p>
            ) : (
                <div style={listStyle}>

                    {students.map((student) => (
                        <div
                            key={student.id}
                            style={cardStyle}
                        >
                            <StudentCard
                                student={student}
                                onDelete={deleteStudent}
                            />
                        </div>
                    ))}

                </div>
            )}

            <style>
                {`
                    @keyframes backgroundZoom {
                        0% {
                            background-size: 100%;
                            background-position: center;
                        }

                        50% {
                            background-position: 52% center;
                        }

                        100% {
                            background-size: 110%;
                            background-position: 48% center;
                        }
                    }
                `}
            </style>

        </div>
    );
}
export default Students;