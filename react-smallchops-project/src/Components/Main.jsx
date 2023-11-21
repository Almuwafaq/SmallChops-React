import fSocialIcon from '../assets/images/twitter.svg'
import sSocialIcon from '../assets/images/instagram.svg'
import tSocialIcon from '../assets/images/social-icon-facebook.svg'
import bigBowl from '../assets/images/Big-Bowl.png'
import friesBowl from '../assets/images/bowl-fries-png.png'
import Picknic from '../assets/images/picnic-mat-png.png'
import ketchup from '../assets/images/ketchup-png.png'
import redPeper from '../assets/images/red-pepper-opposite-png - Copy.png'
import smallChopsBag from '../assets/images/small chops bag.png'
import minus from '../assets/images/minus icon.png'
import movingImg from '../assets/images/round-snacks.png'


const Main = () => {
    return (
      
    <section className="ssec">
    <div className="child-sec-A">
        <div class="social-icon">
            <p id="follow">FOLLOW US ON</p>
            <div id="so-icon"><a href="#" id="ss-icon"><img src={fSocialIcon} width="20px"/></a>
            </div>
            <div id="so-icon"><a href="#" id="ss-icon"><img src={sSocialIcon} width="20px"/></a>
            </div>
            <div id="so-icon"><a href="#" id="ss-icon"><img src={tSocialIcon}
                        width="10px"/></a></div>
        </div>
        <div className="sec-con1">
            <div id="our">
                <h1 id="top">Our top <br/>
                    selling <br/>
                    packages </h1>
                <p id="Jaiye">See what the Lagos Jaiye Community <br/>loved most this week, join our never <br/>
                    ending owambé - ORDER
                    NOW!</p>
            </div>
            <div id="big-bow"><img src={bigBowl} alt="" id="big-bow"/>
                <img src={friesBowl} width="200px" id="bowl-fries"/>
                <img src={Picknic} width="200px" id="picnic-mat"/>
                <img src={ketchup} width="100px" id="ketchup"/>
                <img src={redPeper} width="70px" id="red-pepper"/>
            </div>
        </div>
        <div className="content-boxesA">
            <div className="samosa-minipack">
                <div className="f-g">
                    <div class="">
                        <a href="#"><img src={smallChopsBag} alt="" id="smallchop-bag"/>
                        </a>
                        <p id="text-under">Samosa <br/>Mini Pack</p>
                    </div>
                </div>
                <div className="s-g">
                    <div className="divli">
                        <h6 id="content">Content</h6>
                        <ul id="ll">
                            <li><a href="#">Beef Samosas</a></li>
                            <li><a href="#">Puff Puff</a></li>
                            <li><a href="#">Stick Meat</a></li>
                        </ul>
                    </div>
                </div>
                <div class="sum-cart">
                    <div id="ffpp">
                        <p id="figures"> ₦700</p>
                        <p id="per">perpack</p>
                    </div>

                    <p id="minus-sign"><img src={minus} width="20px"/></p>

                    <p id="zero">0</p>
                    <p id="plus"><img src="./Assets/images/plus icon.png" width="20px"/></p>
                    <img src="./Assets/images/cart-icon-white.svg" id="white-cart"/>
                </div>
            </div>

            <div className="samosa-minipack">
                <div class="f-g">
                    <div class="">
                        <a href="#"><img src="./Assets/images/small chops bag.png" alt="" id="smallchop-bag"/>
                        </a>
                        <p id="text-under">Spring <br/> Roll Mini <br/> Pack</p>
                    </div>
                </div>
                <div className="s-g">
                    <div className="divli">
                        <h6 id="content">Content</h6>
                        <ul id="ll">
                            <li><a href="#">Vegetable Spring Rolls</a></li>
                            <li><a href="#">Stick Meat</a></li>
                            <li><a href="#"> Puff Puff</a></li>
                        </ul>
                    </div>
                </div>
                <div className="sum-cart">
                    <div className="ffpp">
                        <p id="figures"> ₦700</p>
                        <p id="per">perpack</p>
                    </div>

                    <p id="minus-sign"><img src="./Assets/images/minus icon.png" width="20px"/></p>

                    <p id="zero">0</p>
                    <p id="plus"><img src="./Assets/images/plus icon.png" width="20px"/></p>
                    <img src="./Assets/images/cart-icon-white.svg" id="white-cart"/>
                </div>
            </div>
            <div className="samosa-minipack">
                <div className="f-g">
                    <div className="">
                        <a href="#"><img src="./Assets/images/small chops bag.png" alt="" id="smallchop-bag"/>
                        </a>
                        <p id="text-under">Everyday <br/>Pack</p>
                    </div>
                </div>
                <div className="s-g">
                    <div className="divli">
                        <h6 id="content">Content</h6>
                        <ul id="ll">
                            <li><a href="#">Puff Puff</a></li>
                            <li><a href="#">Mosa</a></li>
                            <li><a href="#">Vegetable Spring Rolls</a></li>
                            <li><a href="#">Beef Samosas</a></li>
                            <li><a href="#">Grilled Chicken Cut</a></li>
                        </ul>
                    </div>
                </div>
                <div className="sum-cart">
                    <div id="ffpp">
                        <p id="figures"> ₦1,250</p>
                        <p id="per">per pack</p>
                    </div>

                    <p id="minus-sign"><img src="./Assets/images/minus icon.png" width="20px"/></p>

                    <p id="zero">0</p>
                    <p id="plus"><img src="./Assets/images/plus icon.png" width="20px"/></p>
                    <img src="./Assets/images/cart-icon-white.svg" id="white-cart"/>
                </div>

            </div>

        </div>
        <div className="thir-child-sec">
            <div class="moving-images"><img src={movingImg} alt=""/></div>
            <div>
                <h2 id="Our-favorite">
                    Our favorite <br/> custom <br/> packages <br/> this week!</h2>
                <p id="We-love">We love it when you create your own <br/> custom packages and express your <br/>
                    creativity! <br/>
                    See our favourite custom orders this <br/> week.</p>
            </div>

        </div>
        <div className="containers-b">
            <div className="Aaaa">
                <div className="f-g">
                    <div className="">
                        <a href="#"><img src="./Assets/images/small chops bag.png" alt="" id="smallchop-bag"/>
                        </a>
                        <p id="text-under">Samosa <br/>Mini Pack</p>
                    </div>
                </div>
                <div className="s-g">
                    <div className="divli">
                        <h6 id="content">Content</h6>
                        <ul id="ll">
                            <li><a href="#">Beef Samosas</a></li>
                            <li><a href="#">Puff Puff</a></li>
                            <li><a href="#">Stick Meat</a></li>
                        </ul>
                    </div>
                </div>
                <div className="sum-cart">
                    <div id="ffpp">
                        <p id="figures"> ₦700</p>
                        <p id="per">perpack</p>
                    </div>

                    <p id="minus-sign"><img src="./Assets/images/minus icon.png" width="20px"/></p>

                    <p id="zero">0</p>
                    <p id="plus"><img src="./Assets/images/plus icon.png" width="20px"/></p>
                    <img src="./Assets/images/cart-icon-white.svg" id="white-cart"/>
                </div>
            </div>
            <div className="Aaaa">
                <div className="f-g">
                    <div className="">
                        <a href="#"><img src="./Assets/images/small chops bag.png" alt="" id="smallchop-bag"/>
                        </a>
                        <p id="text-under">Spring <br/> Roll Mini <br/> Pack</p>
                    </div>
                </div>
                <div className="s-g">
                    <div className="divli">
                        <h6 id="content">Content</h6>
                        <ul id="ll">
                            <li><a href="#">Vegetable Spring Rolls</a></li>
                            <li><a href="#">Stick Meat</a></li>
                            <li><a href="#"> Puff Puff</a></li>
                        </ul>
                    </div>
                </div>
                <div className="sum-cart">
                    <div className="ffpp">
                        <p id="figures"> ₦700</p>
                        <p id="per">perpack</p>
                    </div>

                    <p id="minus-sign"><img src="./Assets/images/minus icon.png" width="20px"/></p>

                    <p id="zero">0</p>
                    <p id="plus"><img src="./Assets/images/plus icon.png" width="20px"/></p>
                    <img src="./Assets/images/cart-icon-white.svg" id="white-cart"/>
                </div>
            </div>
            <div class="Aaaa">
                <div class="f-g">
                    <div class="">
                        <a href="#"><img src="./Assets/images/small chops bag.png" alt="" id="smallchop-bag"/>
                        </a>
                        <p id="text-under">Everyday <br/>Pack</p>
                    </div>
                </div>
                <div className="s-g">
                    <div className="divli">
                        <h6 id="content">Content</h6>
                        <ul id="ll">
                            <li><a href="#">Puff Puff</a></li>
                            <li><a href="#">Mosa</a></li>
                            <li><a href="#">Vegetable Spring Rolls</a></li>
                            <li><a href="#">Beef Samosas</a></li>
                            <li><a href="#">Grilled Chicken Cut</a></li>
                        </ul>
                    </div>
                </div>
                <div className="sum-cart">
                    <div id="ffpp">
                        <p id="figures"> ₦1,250</p>
                        <p id="per">per pack</p>
                    </div>

                    <p id="minus-sign"><img src="./Assets/images/minus icon.png" width="20px"/></p>

                    <p id="zero">0</p>
                    <p id="plus"><img src="./Assets/images/plus icon.png" width="20px"/></p>
                    <img src="./Assets/images/cart-icon-white.svg" id="white-cart"/>
                </div>
            </div>
        </div>
    </div>
    {/* <div className="img-flex"/>
        <div class="f-img"/>
            <img src="./Assets/images/dinner pic.png" width="500px" id="garden-img"/>
            <p id="ven">Event</p>
            <p id="without">An event without Smallchops is definitely just a <br> gathering. It gets better; you
                can customise your order <br> however you deem fit.</p>
            <p id="order"><a href="">ORDER FOR YOUR EVENT</a></p>
        </div>
        <div className="s-img">
            <img src="./Assets/images/sigle pic.png" width="500px" id="man-pic"/>
            <p id="porate">Corporate</p>
            <p id="without">Sometimes all you need for culture fit is a corporate <br/> hangout/event with a lot
                Smallchops. This is what we go to work <br/> for.</p>
            <p id="order"><a href="">PLACE ORDER</a></p>
        </div>
    </div> */}
    <div className="cuscus">
        <h6 id="say">What our customers say about us</h6>
        <p id="heart">It takes a lot of heart and hard work at every step to make the best smallchops possible,
            and we know it takes a lot of grit to keep <br/> our customers satisfied</p>
    </div>
</section>

    )
}

export default Main