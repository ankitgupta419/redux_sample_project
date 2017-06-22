import React from 'react';
import Form from './Form';

const Single = React.createClass({

  render() {
    const i = this.props.movies.findIndex((movie)=> movie.imdb_id === this.props.params.movieId);

    return (
      <div className="single-photo">
      	<div className="grid-figure">
	        <div className='grid-photo-wrap'>
	        	<img src={this.props.movies[i].poster.large} alt={this.props.movies[i].title}  />
	        </div>
	    </div>
        <Form {...this.props} postId={i} />
      </div>
    );
  }
});

export default Single;
