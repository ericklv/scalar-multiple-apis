const Footer = ({co}: {co:any}) => {
    const mailTo = (email: string, type: string) => {
        const subject =
          "Need additional info about " + (type == "it" ? "API" : "product");
        return "mailto:" + email + "?Subject=" + subject;
      };

    return <>
        <footer>
            <div className="social">
                <p>
                    Need help with API?{" "}
                    <a href={mailTo(co["ti-mail"], "it")}>Contact Support</a>
                </p>
                <p>
                    Questions about product?{" "}
                    <a href={mailTo(co["sales-mail"], "sales")}>Contact Sales</a>
                </p>
            </div>
            <div className="footer-msg">
                <p className="white-text">Made with love 🩸</p>
            </div>
        </footer>
    </>
}

export default Footer;