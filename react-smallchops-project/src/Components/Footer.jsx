const Footer = (){
    return (
        <section className="footer">

        <div className="groupA">
            <img src="./Assets/images/made-bg.svg" id="made-bg"/>
            <p id="us-on">Follow us on</p>
            <div className="footer-icons">
                <img src="./Assets/images/twitter-footer.svg" width="15px"/>
                <img src="./Assets/images/instagram-footer.svg" width="15px"/>
                <img src="./Assets/images/facebook-footer.svg" width="15px" height="15px"/>
            </div>
        </div>
        <div class="B">
            <div className="packages">
                <ul id="corporate">
                    <li><a href="#" id="last-list">Packages</a></li>
                    <li><a href="#" id="last-list">Event</a></li>
                    <li><a href="#" id="last-list">Corporate</a></li>
                </ul>
            </div>
        </div>
        <div className="c">
            <div class="contact">
                <ul id="corporate">
                    <li><a href="#" id="last-list">Contact</a></li>
                    <li><a href="#" id="last-list">Sign In</a></li>
                    <li><a href="#" id="last-list">Terms & Conditions</a></li>
                </ul>
            </div>
        </div>
        <div className="groupb">
            <img src="./Assets/images/footer-img.svg" alt=""/>
        </div>

    </section>
    )
}

export default Footer