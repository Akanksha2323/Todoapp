import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from 'react'
import Plan from './Components/Plan';

export default class  extends Component {

  state={
    items: [],
    text: ""
  }

  handleChange = (e) =>{
    this.setState ({text: e.target.value})
  }
  handleAdd= (e) =>{
    if(this.state.text !==""){
      const items = [...this.state.items, this.state.text]
      this.setState({items: items, text:  ""})
      alert("Added Successfully")
    }
  }

  handleDelete = (id) => {
    const olditems= [...this.state.items]
    const items = olditems.filter((value,i) => {
      return i !== id
    })
    this.setState({items: items})
    alert("Deleted Successfully!")
    
    
  }

  render() {
    return (
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h1 className= "text-center">Today's plans</h1>
            <div className='row'>
              <div className='col-9'>
                <input type="text" className='form-control' placeholder='write your Todays plan' value={this.state.text} 
                onChange={this.handleChange}/>
              </div>
              <div className='col-2'>
               <button className='btn btn-success px-5 font-weight-bold'
               onClick={this.handleAdd}>ADD</button> 
              </div>
              <div className='container-fluid'>
                <ul className='list-unstyled row m-5'>
                   {
                    this.state.items.map((value,i) => {
                        return <Plan key={i} id={i} value={value} data={this.handleDelete} />
                })
              }

                 
                </ul>

              </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}