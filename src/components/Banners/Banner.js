import React from "react"
import b1 from '../images/banner/banner1.png';
import b2 from '../images/banner/banner2.jpg';
import b3 from '../images/banner/banner3.jpg';
import b4 from '../images/banner/b4.jpg';
import b5 from '../images/banner/b5.jpg';
import b6 from '../images/banner/b6.png';
import b7 from '../images/banner/b7.jpg';
import b8 from '../images/banner/b8.jpg';
import b9 from '../images/banner/b9.jpg';
import {BsArrowRight,BsArrowLeft} from "react-icons/bs"

function Banner() {
    	return (	<div className="banner">
						<section className="banners">
							<div id="right"><BsArrowRight /></div>
							<div id="left"><BsArrowLeft /> </div>
							<div className="product"><picture><img src={b1} alt="" /></picture></div>
							<div className="product"><picture><img src={b2} alt="" /></picture></div>
							<div className="product"><picture><img src={b3} alt="" /></picture></div>
							<div className="product"><picture><img src={b4} alt="" /></picture></div>
							<div className="product"><picture><img src={b5} alt="" /></picture></div>
							<div className="product"><picture><img src={b6} alt="" /></picture></div>
							<div className="product"><picture><img src={b7} alt="" /></picture></div>
							<div className="product"><picture><img src={b8} alt="" /></picture></div>
							<div className="product"><picture><img src={b9} alt="" /></picture></div>

						</section>
					</div>)
	}
export default React.memo(Banner);
