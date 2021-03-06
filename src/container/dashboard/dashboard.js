import React, { Component } from 'react';
import Addition from './addition/addition.js'
import Sub from './sub/sub.js'
import './dashboard.css'

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      //global


    }
  }//constuctor

  changeThis = async (e) => {
    await this.setState({
      numberX: e
    })
  }

  onChange = (e) =>{
  this.setState({
    [e.target.name]:e.target.value})
  }


  result = () =>{
    var diff = parseInt(this.state.numberA) - parseInt(this.state.numberB)

    this.setState({
      numberDiff: diff
    })
  }


  render() {
    return (
      <div className="dashboard-container">
        <div className="container">


          <div className="add-component">
            <Addition/>
          </div>

          <div className="sub-component">
            <Sub/>
          </div>


          {/* <div className="sub-parent">
            <h3>SUBTRACTION : </h3>
            <div className="subtraction-class">
              <input type="text" placeholder="Enter a.." className="input-one  form-control" name="numberA" onChange={this.onChange} />
              <input type="text" placeholder="Enter z.." className="input-two form-control"  name="numberB"  onChange={this.onChange} />
              <button className="btn btn-class btn-primary" onClick={ this.result}>Diff</button>
            </div>

            <h3>DIFFERENCE : </h3>
            <input type="text" placeholder="Answer is..." className="input-two form-control"  value={this.state.numberDiff}  onChange={this.onChange}/>
          </div> */}



        </div>
      </div>



    );
  }
}

export default Dashboard;
