function Contact() {
    const style = {
        minHeight: "100vh",
        textAlign: "center",
        paddingTop: "100px",
        backgroundImage:
            "url('https://i.postimg.cc/d0xCPLFv/Chat-GPT-Image-Oct-4-2026-02-55-29-PM.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        animation: "move 10s infinite alternate"
    };

    return (
        <div style={style}>
            <h1>Contact</h1>

            <p>Contact: Chandu</p>
            <p>Phone: 9963256664</p>

            <style>
                {`
                    @keyframes move {
                        from {
                            background-position: left center;
                        }
                        to {
                            background-position: right center;
                        }
                    }

                    h1, p {
                        background: rgba(255,255,255,0.8);
                        padding: 10px;
                        width: fit-content;
                        margin: 15px auto;
                        border-radius: 10px;
                    }
                `}
            </style>
        </div>
    );
}

export default Contact;