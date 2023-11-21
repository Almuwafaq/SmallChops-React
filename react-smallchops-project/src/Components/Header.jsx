import logo from '../assets/images/logo.svg'
import brownCartIcon from '../assets/images/cart-icon-brown.svg'
import boxSnacks from '../assets/images/box-snacks.png'
import blurSamosa from '../assets/images/blur-samosa-png.png'
import puff from '../assets/images/puff-puff-png2x.png'
import leaf from '../assets/images/leaf-png.png'
import chicken from '../assets/images/chicken-blur-png-cut.png'

const Header = () => {
    return (
        <section className="fs">
        <nav>
            <div className="flexitem"><img src={logo} width="150px" alt=""/></div>
            <div className="flexitem" id="inner-nav">
                <a href="#">Our packages</a>
                <a href="#">Build your own pack</a>
                <a href="#">Build your mix</a>
                <a href="#">Event</a>
                <a href="#">Corporate</a>
            </div>
            <div className="flexitem" id="cart"><img src={brownCartIcon} width="30px" alt=""/>
            </div>
        </nav>
        <div className="sign">
            <button className="sign-in">Sign in</button>
        </div>
        <div className="chicken-blur"></div>
        <div className="header">
            <h1>Order small chops for today, <br/>
                tomorrow or whenever!
            </h1>
            <div className="flex-button">
                <button id="ba">Our Package</button>
                <button id="bb">Build Your Pack</button>
            </div>
        </div>
        <div className="box-content">
            <img src={boxSnacks} alt="snacks" id="snacks-box"/>
        </div>
        <div id="bdgimg">
            <img src={blurSamosa} width="150px" className="faded-out-samosa"/>
            <img src={puff} width="150px" id="puff-puffbdg"/>
            <img src={leaf} width="250px" id="leafbdg"/>
            <img src={chicken} alt="" id="cc-blur"/> 

        </div>
    </section>
    )
}
export default Header