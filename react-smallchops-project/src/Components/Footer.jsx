import made from '../assets/images/made-bg.svg'
import twitterFooter from '../assets/images/twitter-footer.svg'
import instaFooter from '../assets/images/instagram-footer.svg'
import facebookFooter from '../assets/images/facebook-footer.svg'
import footerImg from '../assets/images/footer-img.svg'

const Footer = () => {
    return (
        <section className="footer">

        <div className="groupA">
            <img src={made} id="made-bg"/>
            <p id="us-on">Follow us on</p>
            <div className="footer-icons">
                <img src={twitterFooter} width="15px"/>
                <img src={instaFooter} width="15px"/>
                <img src={facebookFooter} width="15px" height="15px"/>
            </div>
        </div>
        <div className="B">
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
            <img src={footerImg} alt=""/>
        </div>

    </section>
    )
}

export default Footer