import React from 'react';
import './Form.css';
import returnString from '../API/Api.js';
// import Display from '../Display/Display.js';
 

class Form extends React.Component {
    constructor(props) {
        super(props);


        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //set default form state
        this.state = {
            gif: "",
        };
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        });

        console.log(event.target.value)
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

    onSubmit() {

        event.preventDefault();
         returnString.getGif(this.state.value)
         .then((res)=>{
            this.setState({
                gif: res.images.original.url
            })
         });
         
 
        console.log(this.state.gif);
         
    }


    render() {
        return (

            <div className="form-outer-wrapper">

                <div className="image">
                    <img src={this.state.gif} alt="giphy" />
                     </div>

                <h1 className="form-header">Enter a subject to GIF</h1>
                <div className="form-wrapper">
                    <form id="myForm">
                        <input
                            type="text"
                            onChange={this.onChange}
                            value={this.state.value}
                        />
                        <button onClick={this.onSubmit.bind(this)}>Submit</button>
                    </form>
                </div>
            </div>
        )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    }
}



export default Form 