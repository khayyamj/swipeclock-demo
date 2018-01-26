import React from 'react';

const Video = ({video}) => {
	if (!video) {
		return <div>Loading...</div>
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-container">
			<div className=''>
				<iframe className='video-player' src={url} title={video.snippet.title}></iframe>
			</div>
			<div className='video-details'>
				<div className='video-title center'>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
}

export default Video;