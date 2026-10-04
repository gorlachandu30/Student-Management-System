function About() {
    const style = {
        minHeight: "100vh",
        padding: "50px",
        textAlign: "center",
        backgroundImage: "url('https://i.postimg.cc/zB7kgJZx/Chat-GPT-Image-Oct-4-2026-02-49-35-PM.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        animation: "move 10s infinite alternate"
    };

    return (
        <div style={style}>
            <h1>About CSM-A</h1>

            <p>
                CSC students are intelligent,
                hardworking and enthusiastic learners.
            </p>

            <p>
                This application is created to manage
                student information.
            </p>
        </div>
    );
}

export default About;