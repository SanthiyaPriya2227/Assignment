import React from 'react';
//import ReactDOM from 'react-dom';

//react class components
class Mywebsite extends React.Component{

    constructor(){
      super();
      this.state={
        username:" ",
        age:null,
        errmsg:""
      };
    }
    changeOver= (event) =>{
      
      let n=event.target.name;
      let v =event.target.value;
      let err =" ";
      if(n==="age"){
        if(v !== "" && !Number(v))
        {
         
          err =   <strong>Invalid Value:"Please enter value in number".</strong>
        }
      }
      this.setState({errmsg:err});  
      this.setState({[n]:v});
    }
    formSubmit= (event) =>
    {
      event.preventDefault();
      alert("your name" + this.state.username);
    }
    render()
    {
      return <div><h1> Hello{this.state.username}</h1>
      <h1>Your Age is {this.state.age}</h1>
            <form >
              Enter your name:<input type="text" name="username" onChange={this.changeOver}/>
              Enter your age:<input type="text" name="age" onChange={this.changeOver}/>{this.state.errmsg}
              <input type="submit" onClick={this.formSubmit}/>
          

            </form>
      
      </div>

    }
}






export default Mywebsite;

