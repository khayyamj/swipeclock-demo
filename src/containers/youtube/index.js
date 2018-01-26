import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './searchbar';
import VideoList from './video_list';
import Video from './video';
import * as _ from 'lodash';
import './youtube.css';

const API_KEY = 'AIzaSyCVI80EfYstrmch_orrpzP__189PLFkJYg';

class YouTube extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [], selectedVideo: null };

		this.videoSearching('reactjs');
	}

	videoSearching(searchTerm) {
		YTSearch({ key: API_KEY, term: searchTerm }, (videos) => {
			this.setState({ videos, selectedVideo: videos[0] });
		})
	}

	render() {
		const videoSearch = _.debounce(term => {this.videoSearching(term)}, 300);

		return (
			<div className='schedule-container'>
				<div className='main-video-container'>
				<SearchBar onSearchTermChange={term => videoSearch(term)} />
				<Video video={this.state.selectedVideo}/>
				</div>
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
				videos={this.state.videos} />
			</div>
		);
	}
}

export default YouTube;