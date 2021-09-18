import React from 'react';
import "./Footer.css";
import { FaFacebookSquare ,FaInstagram } from "react-icons/fa";


const Footer = () => {
return <div className="container main-Cont"> 

	<footer>		
		<div className="footerMain">
	
		<div>
			<h3>GET IN TOUCH</h3>
			<p>Please call 079 600 2115 and we will be happy to assist you.</p>
		</div>

		<div>
			<h3>NEWSLETTER</h3>
			<p>Join the Lucky newsletter.</p>
		</div>

		</div>


		<div className='iconFooter'>
			<FaFacebookSquare/>
			<FaInstagram/>
		</div>
	</footer>


</div>;
};

export default Footer;
