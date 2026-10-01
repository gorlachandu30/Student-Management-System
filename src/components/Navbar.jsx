import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header style={styles.header}>
            <div style={styles.title}>
                Student Management System
            </div>
            <nav style={styles.navbar}>

                <Link to="/home" style={styles.link}>
                    Home
                </Link>

                <Link to="/students" style={styles.link}>
                    Students
                </Link>

                <Link to="/students/add" style={styles.link}>
                    Add Student
                </Link>

                <Link to="/about" style={styles.link}>
                    About
                </Link>

                <Link to="/contact" style={styles.link}>
                    Contact
                </Link>

            </nav>

        </header>
    );
}

const styles = {

    header: {
        width: "100%",
        backgroundColor: "#dceeff",
        textAlign: "center",
    },

    title: {
        fontSize: "32px",
        fontWeight: "bold",
        padding: "12px",
        borderBottom: "1px solid #ddd",
    },

    navbar: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "45px",
        padding: "12px",
        backgroundColor: "#dcecf9",
    },

    link: {
        textDecoration: "none",
        color: "black",
        fontSize: "16px",
        fontWeight: "bold",
    },
};

export default Navbar;