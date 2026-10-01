function About() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', 
        textAlign: 'top',
        padding: '20px',
        background: 'linear-gradient(135deg, #FFDEE9, #B5FFFC)'
    };

    const headingStyle = {
        color: '#000000',     // Keeps the headline strictly black
        marginBottom: '40px' // Creates distance between headline and paragraph
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>About CSC</h1>
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