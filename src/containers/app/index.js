
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, incrementAsync, decrement, decrementAsync } from '../../modules/counter';
import Dashboard from '../dashboard';
import Timecard from '../timecard';
import Webclock from '../webclock';
import Schedule from '../schedule';
import Home from '../home';

import './app.css';

const routes = [
	{
		path: '/',
		exact: true,
		header: () => <div></div>,
		main: () => <Home />
	},
	{
		path: '/dashboard',
		header: () => <div>Dashboard</div>,
		main: () => <Dashboard />
	},
	{
		path: '/timecard',
		header: () => <div>Timecard</div>,
		main: () => <Timecard />
	},
	{
		path: '/webclock',
		header: () => <div>WebClock</div>,
		main: () =><Webclock />
	},
	{
		path: '/schedule',
		header: () => <div>Schedule</div>,
		main: () => <Schedule />
	}
];


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {displayFullMenu: false};
		// this.openMenu = this.openMenu.bind(this);
	}

	render() {
		return (
			<Router>
				<div className='page-container'>
					<div onClick={() => this.setState((prevState) => ({ displayFullMenu: !prevState.displayFullMenu }))}><i className={this.state.displayFullMenu ? "no-hamburger": "material-icons hamburger-menu"}>dehaze</i></div>
					<div className={this.state.displayFullMenu ?  "app-nav-menu full-menu" : "app-nav-menu"}>
						<ul className='app-nav-link-container' onClick={() => this.setState((prevState) => ({ displayFullMenu: !prevState.displayFullMenu }))}>
							<Link className='link' to="/"><li><i class="material-icons">home</i>Home</li></Link>
							<Link className='link' to="/dashboard"><li><i class="material-icons">apps</i>Dashboard</li></Link>
							<Link className='link' to="/timecard"><li><i class="material-icons">timelapse</i>Timecard</li></Link>
							<Link className='link' to="/webclock"><li><i class="material-icons">schedule</i>Webclock</li></Link>
							<Link className='link' to="/schedule"><li><i class="material-icons">event</i>Schedule</li></Link>
						</ul>
					</div>
		
					<div className='body-container'>		
						<div className='header-container'>
							{routes.map((route, index) => (
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									component={route.header}
								/>
							))}
						</div> 
		
						<div className='content-container'>
							{routes.map((route, index) => (
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									component={route.main}
								/>
							))}
						</div>
					</div>
		
				</div>
			</Router>
		)
	}
};

const mapStateToProps = (state) => ({
	count: state.counter.count,
	isIncrementing: state.counter.isIncrementing,
	isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	increment,
	incrementAsync,
	decrement,
	decrementAsync,
	changePage: (route) => push(route)
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

// const styles = {
// 	width: '100%',
// 	height: '100%',
// 	backgroundColor: 'grey'
// };