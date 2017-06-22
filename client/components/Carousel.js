import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';

const Carousel = React.createClass({

  render() {
    const settings = {
    	infinite: false,
	  	speed: 300,
	  	slidesToShow: 4,
	  	slidesToScroll: 4,
	  	responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
	  	]
    }
    let childrens = (this.props.movies || []).map((movie, index) => {
	    return (
	      <div key={index}>
				<Link to={'/view/'+movie.imdb_id}>
					<img src={movie.poster.large} alt={movie.title}  />
	        </Link>
	      </div>
	    )
	  });
    return (
      <div className="content-holder">
        <Slider {...settings}>
        	{childrens}
        </Slider>
      </div>
    );
  }
});

export default Carousel;
