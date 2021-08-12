import React, {Component} from 'react';
  class Demo extends Component{

constructor(props)
{
    super(props);
    this.state={
items:["Item1","Item2"],
textinput:""

    };
}

captureinput=(event)=>{
this.setState({textinput:event.target.value});

}

additem=()=>{
    let currenttext= this.state.textinput;
    let currentitems=this.state.items;
    currentitems.push(currenttext);
this.setState({items:currentitems});

}

removeitem=(k)=>{
    
    let currentitems=this.state.items;
    currentitems.splice(k,1);
    this.setState({items:currentitems});
    console.log(this.state.items);
}


render()
{
return(
<div>
    <h1>Adding and Deleting Items</h1>
<label>Enter the Item: </label>
<input type="text" onChange={this.captureinput} />
<button onClick={this.additem}>Add</button>
<h2>List of Added Items</h2>
<ul>
{this.state.items.map((itm,key)=>{
    return (
      <div>
       <li>{itm} <button onClick={()=>{this.removeitem(key)}}>Delete</button></li> 
       
       </div>    
    )
})}

</ul>



</div>



);

}


  }

  export default Demo;