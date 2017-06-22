import React from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import moment from 'moment';
const Form = React.createClass({
  
  getInitialState() {
    return {
      selectGenre:null,
      startDate: moment()
    }
  },
  handleSubmit(e) {
    e.preventDefault();
    this.refs.commentForm.reset();
  },

  handleChange(date) {
    var self=this
    // var d=new Date()
    // if (date > d){
    //    self.setState({
    //       startDate: date
    //     });
    // }
    self.setState({
      startDate: date
    });
  },
	logChange(val) {
	  var that=this;
    var selectGenre=that.state.selectGenre;
    selectGenre=val;
    that.setState({
      selectGenre
    });
    // console.log("Selected: " + val);

	},

  render() {
  	const options = this.props.genre.map((i)=>{return{ value: i, label: i }});
    var self=this;
    return (
      <div className="pretty-form">
        <form onSubmit={this.handleSubmit} ref="commentForm" className="form">
          <input className="marginSelect" type="text" ref="title" placeholder="Title"/>
          <input className="marginSelect" type="text" ref="year" placeholder="Year"/>
          {/*<input className="marginSelect" type="text" ref="release_date" placeholder="Release Date"/>*/}
          <div className="dateLabel">
            <div>Release Date</div>
              <DatePicker
                dateFormat="YYYY/MM/DD"
                selected={self.state.startDate}
                ref="release_date"
                onChange={self.handleChange} />
            
          </div> 
          <div className="marginSelect">
            <Select
            multi={true}
            name="form-field-name"
            value={this.state.selectGenre}
            labelKey='label'
            valueKey='value'
            onChange={this.logChange}
            options={options}
            />
          </div>
          
          {/*<input className="marginSelect" type="text" ref="description" placeholder="Description"/>*/}
          <textarea className="textareaSize marginSelect" ref="description" placeholder="Description"/>
          <input className="marginSelect" type="submit"/>
        </form>
      </div>
    );
  }
});

export default Form;
