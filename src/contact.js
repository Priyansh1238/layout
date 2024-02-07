function Contact() {
    return (
        <div>
            <h1 style={{ textAlign: "center", fontSize: "40px", fontFamily: "-moz-initial" }}>Contact:</h1>
            <div style={{ marginLeft: "50px" }}>
                <p style={{ fontSize: "50px", fontFamily: "-moz-initial" }}>Spurgeon.</p>

                <div style={{ marginLeft: "45%", marginTop: "-92px", display: "flex", flexDirection: "row", gap: "50px" }}>
                    <button style={{ height: "40px", width: "90px", borderRadius: "4px", fontFamily: "-moz-initial" }}>Home</button>
                    <button style={{ height: "40px", width: "90px", borderRadius: "4px", fontFamily: "-moz-initial" }}>Styles</button>
                    <button style={{ height: "40px", width: "90px", borderRadius: "4px", fontFamily: "-moz-initial" }}>About</button>
                    <button style={{ height: "40px", width: "90px", borderRadius: "4px", fontFamily: "-moz-initial" }}>Contact</button>
                </div>
            </div>
            <div>
                <p style={{ fontSize: "140px", fontFamily: "-moz-initial", textAlign: "center" }}>Say Hello.</p>
            </div>
            <div
                style={{ backgroundImage: "URL(https://themewagon.github.io/spurgeon/images/thumbs/contact/contact-2400.jpg)", backgroundSize: "cover", height: "42pc", width: "75pc", marginLeft: "16%" }}>
            </div>
            <div>
                <p style={{ fontSize: "26px", height: "350px", width: "850px", color: "Gray", marginLeft: "25%", marginTop: "4%" }}>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor
                    sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat
                    enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco
                    magna amet magna cupidatat qui labore cillum cillum cupidatat fugiat nostrud.
                </p>
                <p style={{ fontSize: "26px", height: "350px", width: "850px", marginLeft: "25%", marginTop: "-150px" }}>
                    Eligendi quam at quis. Sit vel neque quam consequuntur expedita quisquam. Incidunt quae qui error.
                    Rerum non facere mollitia ut magnam laboriosam. Quisquam neque quia ex eligendi repellat illum
                    quibusdam aut. Architecto quam consequuntur totam ratione reprehenderit est praesentium.
                </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "-150px", marginLeft: "17%" }}>
                <div>
                    <p style={{ fontFamily: "-moz-initial", fontSize: "32px" }}>Where to Find Us</p>
                    <p style={{ marginTop: "1%", width: "48%", fontSize: "20px" }}>1600 Amphitheatre Parkway
                        Mountain View, CA
                        94043 US</p>
                </div>
                <div>
                    <p style={{ fontFamily: "-moz-initial", fontSize: "32px" }}>Contact Info</p>
                    <p style={{ marginTop: "1%", width: "40%", fontSize: "20px" }}>someone@yourdomain.com
                        info@yourdomain.com
                        Phone: (+63) 555 1212
                    </p>
                </div>
            </div>
          
        </div>

    )
}
export default Contact;