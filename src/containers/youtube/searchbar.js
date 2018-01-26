import React, { Component } from 'react';
import './youtube.css';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
	}

	onInputChange(term) {
		this.props.onSearchTermChange(term);
		this.setState({ term })
	}

	render() {
		return(
			<div className='search-bar-container'>
				<input 
				className='input-bar'
				placeholder='Search'
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} 
				/>
			</div>
		)
	}
}

export default SearchBar;