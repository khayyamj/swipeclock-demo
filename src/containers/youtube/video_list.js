import React from 'react';
import './youtube.css';

const videoListItems = (list, onVideoSelect) => {
	return (
		list.map((item, i) => {
			return (
				<li onClick={() => onVideoSelect(item)} key={item.etag}>
					<div className='video-item-container'>
						<div className='video-image-container'>
							<img className='video-image' src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
						</div>

						<div className='video-summary-container'>
							<div className='video-title'>{item.snippet.title}</div>
						</div>
					</div>				
				</li>
			)
		})
	)
}

const VideoList = (props) => {
	return (
	<ul className='list-container'>
		{videoListItems(props.videos, props.onVideoSelect)}
	</ul>
	)
}

export default VideoList;