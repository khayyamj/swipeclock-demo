import React, { Component } from 'react';
import './googlemap.css';

let google = window.google;

class GoogleMap extends Component {
	componentDidMount() {
		setTimeout(window.initMap = this.initMap(), 50);
	}

	initMap = () => {
		const map = new google.maps.Map(this.refs.map, {
			center: { lat: -34.397, lng: 150.644 },
			zoom: 6
		});
		const infoWindow = new google.maps.InfoWindow();
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				infoWindow.setPosition(pos);
				infoWindow.setContent('Location Found!');
				infoWindow.open(map);;
				map.setCenter(pos);
			}, () => {
				this.handleLocationError(true, infoWindow, map.getCenter())
			});
		} else {
			// Geolocation not supported
			this.handleLocationError(false, infoWindow, map.getCenter());
		}
	}

	handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
		infoWindow.setPosition(pos);
		infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed' : 'Error: Your browser doesn\'t support geolocation');
		infoWindow.open(this.map);
	}

	render() {
		return (
			<div className='googlemap-container'>
				<div>Google Maps</div>

				<div ref='map' className='map'></div>

			</div>
		)
	}
};

export default GoogleMap;