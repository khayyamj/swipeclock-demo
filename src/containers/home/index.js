import React from 'react';
import './home.css';

const Home = () => (
	<div className='home-container'>
		<div className='home-title'>Thank you!</div>
		<div className='home-subtitle'>I appreciate the opportunity to share this small piece of code with you.</div>
		<div>This sample project followed the design provide. It was programmed in React with Redux and React Router. The top pane shows the navigation page and the main content is display here (except for Home). This project used straight CSS as it was a simple project. The site is responsive with the menu always displayed on screens displaying more than 1008 pixels, a hamburger menu with the menu expanding over the content on medium screen sizes between 641 - 1007 pixels, and a hamburger menu with a full screen menu on screens smaller than 640 pixels. The Google Maps and YouTube links are active with content from the respective APIs. The other links are for demonstration purposes only.</div>
		<div className='signature'>~ Khayyam Jones</div>
	</div>
);

export default Home;