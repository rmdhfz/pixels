import React, { Component } from "react";
import Card from '../components/card';

class List extends Component {
	constructor() {
		super()
		this.state = {
			data: [],
			loading: true,
		};
	}
	async componentDidMount() {
		const movies = await fetch('http://localhost:9000/api/movies');
		const moviesJSON = await movies.json();
		if (moviesJSON) {
			this.setState({
				data: moviesJSON.data,
				loading: false,
			});
		}
	}
	render() {
		const { data, loading } = this.state;
		if (loading) {
			return <div>Loading...</div>
		}
		return (
			<div class='row'>
				{data.map(movie =>
					<div class='col-sm-2'>
						<Card key={ movie.id } movie={ movie } />
					</div>
				)}
			</div>
		)
	}
};

export default List;