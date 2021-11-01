import React, { Component } from 'react'
import AddItem from './components/AddItem/AddItem'
import TodoItem from './components/TodoItem/TodoItem'



export default class App extends Component {

   state={
     items:[
       {id:1,name:'Hamza',age:21,},
       {id:2,name:'Ahmed',age:22,},
       {id:3,name:'Sara',age:23,},
      ]
   }

  //  deleteItem=(id)=>{
  //  let items=  this.state.items;
  // let index=  items.findIndex(item=>item.id===id)
  // items.splice(index,1)
  // this.setState({items:items})
  //  }
   deleteItem=(id)=>{
    let items=  this.state.items.filter(item=>{
      return item.id!==id
    })
   this.setState({items:items})
    }

    addItem=(item)=>{
      item.id= Math.random()
     let items=this.state.items
     items.push(item)
     this.setState({items:items})
    
    }
    

  render() {
    return (
      <div className='App container'>
        <h1 className="text-center">Todo List</h1>
        <TodoItem todoItem={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    )
  }
}

