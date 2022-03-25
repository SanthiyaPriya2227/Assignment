//import  {render}  from '@testing-library/react';
//import { render } from '@testing-library/react';
import React ,{ useState} from 'react';
import ReactDOM from 'react-dom';

//import styles from './clr.module.css';
//import './mystyle.scss';
//import './index.css';
//import Mywebsite from './demo.js';


/*
//React class
class Demo{
  method1(){
    var a=5;
    var b=3;
    var c=a+b;
    document.getElementById('root').innerHTML=c;
  }
  
}
var mydemo = new Demo();
mydemo.method1();

// React function
var a=function(){
     var a=5;
    var b=3;
    var c=a+b;
    document.getElementById('ro').innerHTML=c;
  
}
a();
//style for 
var mystyle ={
  color:'blue',
  textAlign:'center'
}

//without jsx
const myele = React.createElement('h1',{},"helloworld");

//with jsx 
const myele1=<div style={mystyle}>
  <h1 className='header'>Laxmi</h1>
  <p>Welcome to my first page</p>
</div>

//call external react functional component and calling external file
function Head() {
  return <div>
    <Mywebsite topic="react" />
   
    <h1 >priya</h1>
    <h1>priya</h1>
    </div>
}


//react props
class Learnprops extends React.Component{

  render(){
         return <h1>  learn React in {this.props.var}</h1>
  }
}
class Learnprops2 extends React.Component{//child class

  render(){

     const v = "English"
         return <Learnprops var={v} />
  }
}
//react state

class Reactstate extends React.Component{
  constructor(){
    super();
    this.state = {
      initailvalue: 'welcome'}
  }
  changeValue = () =>
  {
    this.setState({
      initailvalue:'React'
    })
  }
  
  render(){
    return <div>
      <h1>Hello {this.state.initailvalue}</h1>
      <button onClick={this.changeValue}>Exit</button>
      
     </div> 
    
  }

}
ReactDOM.render(<Reactstate/>,document.getElementById('t'));

ReactDOM.render(myele,document.getElementById('rot'));
ReactDOM.render(myele1,document.getElementById('tor'));

ReactDOM.render(<Learnprops2/>,document.getElementById('r'));
ReactDOM.render(<Head />,document.getElementById('reet'));

//Event Handling
class Eventbind extends React.Component{
  constructor(){
    super();
    this.state = {
      msg:'welcome',
      txt:'priya',
      call:'lp'
      
    }
  }
  clickEvent = (a)=>{
    this.setState({
      msg:a
    })
  }
  clickOver = ()=>{
    this.setState({
       txt:'lp'
    })
  }
  clickAno=(a)=>{
    this.setState({
      call:a
    })
  }
  render(){
    return( <div>
      <h1>{this.state.msg}</h1>
      <h1>{this.state.txt}</h1>
      <h1>{this.state.call}</h1>
      <button onClick={this.clickEvent.bind(this,"react")}>Me</button>
      <button onMouseOver={this.clickOver}>over</button>
      <button onClick={()=>this.clickAno('pr')}>click</button>
     </div>
    );
  }
}
ReactDOM.render(<Eventbind/>,document.getElementById('root'));
//react css
class Reactstyle extends React.Component{
  render(){
    //javascript object
    const mystyle={
      color:'blue',
      textAlign:'center'
    }
    return(
      <div>
        <p>inline style</p>
        <h1 style={{color:"red" ,textAlign:'center'}}>Hello World</h1>
        <h1 style={mystyle}>React</h1>
        <p className={styles.app}>css module</p>
        <Mywebsite/>
      </div>
    );
  }
}
ReactDOM.render(<Reactstyle/>,document.getElementById('root'));

//reactlist
const mylist =[1,2,7,3,4,'hii','hello']
const li=mylist.map((listvalues) => {
     return <li>{
       listvalues +" "+mylist
       }
     </li>
});
ReactDOM.render(<ul>{li}</ul>,document.getElementById('root'));*/
//reacthooks

function ReactHooks(){
  const [count ,updatecount] = useState(0);
  return <div>
    <p>you clicked the button {count} times</p>
    <button onClick = {()=>updatecount(count+1)}>
      click me
    </button>
  </div>
}
ReactDOM.render(<ReactHooks/>,document.getElementById('root'));

