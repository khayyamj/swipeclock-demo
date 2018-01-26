import React, { Component } from 'react';
import './webclock.css';

// let map, infoWindow;

class Webclock extends Component {
	constructor(props) {
		super(props);
	}

	// componentDidMount() {
	// 	window.initMap = this.initMap();
	// 	loadJS('https://maps.googleapis.com/maps/api/js?v=3&client=gme-AIzaSyASQmO9Oi286CAw1qUINBJbX7P6dSg9E6A&callback=initMap')
	// 	if (navigator.geolocation) {
	// 		navigator.geolocation.getCurrentPosition((position) => {
	// 			const pos = {
	// 				lat: position.coords.latitude,
	// 				lng: position.coords.longitude
	// 			};

	// 			this.infoWindow.setPosition(pos);
	// 			this.infoWindow.setContent('Location Found!');
	// 			this.infoWindow.open(this.map);;
	// 			map.setCenter(pos);
	// 		}, () => {
	// 			this.handleLocationError(true, this.infoWindow, this.map.getCenter())
	// 		});
	// 	} else {
	// 		// Geolocation not supported
	// 		this.handleLocationError(false, this.infoWindow, this.map.getCenter());
	// 	}
	// }

	// initMap = () => {
	// 	this.map = new google.maps.Map(this.refs.map, {
	// 		center: { lat: -34.397, lng: 150.644 },
	// 		zoom: 6
	// 	});
	// 	this.infoWindow = new google.maps.InfoWindow;
	// 	if (navigator.geolocation) {
	// 		navigator.geolocation.getCurrentPosition((position) => {
	// 			const pos = {
	// 				lat: position.coords.latitude,
	// 				lng: position.coords.longitude
	// 			};

	// 			this.infoWindow.setPosition(pos);
	// 			this.infoWindow.setContent('Location Found!');
	// 			this.infoWindow.open(this.map);;
	// 			map.setCenter(pos);
	// 		}, () => {
	// 			this.handleLocationError(true, this.infoWindow, this.map.getCenter())
	// 		});
	// 	} else {
	// 		// Geolocation not supported
	// 		this.handleLocationError(false, this.infoWindow, this.map.getCenter());
	// 	}
	// }

	// handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
	// 	infoWindow.setPosition(pos);
	// 	infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed' : 'Error: Your browser doesn\'t support geolocation');
	// 	infoWindow.open(this.map);
	// }

	render() {
		return (
			<div className='webclock-container'>
				<div>WebClcok</div>

				<div ref='map'></div>

			</div>
		)
	}
};

// function loadJS(src) {
// 	console.log('loadJS');
// 	var ref = window.document.getElementsByTagName("script")[0];
// 	var script = window.document.createElement("script");
// 	script.src = src;
// 	script.async = true;
// 	ref.parentNode.insertBefore(script, ref);
// }

export default Webclock;