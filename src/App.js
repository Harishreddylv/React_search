import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.fetchingData = this.fetchingData.bind(this);
    this.changeEvent = this.changeEvent.bind(this);
    this.state = {item:[],searchname:''};
  }
  changeEvent(e){
    console.log(e.target.value);
    this.setState({searchname:e.target.value});
    console.log("war",this.state.searchname.length);
    if(this.state.searchname.length>=2){
     
      this.fetchingData();
    }
    e.preventDefault();
  }
  fetchingData(){
    fetch(`https://api.github.com/search/users?q=${this.state.searchname}&page=1`,
      // {
      //   method:'GET',
      //   body:JSON.stringify(reqData)
      // }
      ).then((response)=>{
          return response.json();
    }).then((result)=>{

      console.log("data",result.items);
      var resultloop = result.items;
      this.setState({item:resultloop});
    })
  }
  
  render() {
    return (
<div className="containerMain">
  {/* <button onClick={this.fetchingData} >fetch</button><br/> */}
  <input type ="search" name ="searchname" value= {this.state.searchname} onChange={this.changeEvent} placeholder='search here' autoFocus/>
      
        {this.state.item.map(country => (
          <div>
            name of <b>{country.login }</b> Id is <b>{country.id}</b>  <img className = 'styleImage' src={country.avatar_url } alt="golf" />;
          </div>

        ))}
     
</div>

    );
 
}
}

export default App;
