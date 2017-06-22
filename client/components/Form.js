import React from 'react';
import Select from 'react-select';


const Form = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    this.refs.commentForm.reset();
  },


	logChange(val) {
	  console.log("Selected: " + val);
	},

  render() {
  	const options = this.props.genre.map((i)=>{return{ value: i, label: i }});
    return (
      <div className="pretty-form">
        <form onSubmit={this.handleSubmit} ref="commentForm" className="form">
          <input type="text" ref="title" placeholder="Title"/>
          <input type="text" ref="year" placeholder="Year"/>
          <input type="text" ref="release_date" placeholder="Release Date"/>
          <Select
			multi={true}
            name="form-field-name"
            value="Action"
            labelKey='label'
            valueKey='value'
            onChange={this.logChange}
            options={options}
			/>
          <input type="text" ref="description" placeholder="Description"/>
          <input type="submit" />
        </form>
      </div>
    );
  }
});

export default Form;
