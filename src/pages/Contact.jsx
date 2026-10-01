function Contact() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Contact</h1>
            <p style={styles.text}>Contact: Chandu</p>
            <p style={styles.text}>Phone: 9963256664</p>
        </div>
    );
}

const styles = {
    container: {
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #74ebd5, #ACB6E5)",
        color: "#333",
    },
    title: {
        fontSize: "28px",
        marginBottom: "10px",
    },
    text: {
        fontSize: "16px",
        margin: "4px 0",
    },
};

export default Contact;