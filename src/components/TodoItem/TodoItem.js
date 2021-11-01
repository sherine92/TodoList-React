import React from 'react'
import './TodoItem.css'
 const TodoItem = (props)=> {
    let {todoItem,deleteItem} = props
    let lenght = todoItem.length
    let ListItems = lenght ?(
        todoItem.map(item =>{
        return(
            <div key={item.id}>
            <span className='name'>{item.name}</span>
            <span className='age'>{item.age}</span>
            <span className='action icon' onClick={()=>deleteItem(item.id)}>&times;</span>
            </div>
        )
        
    })
    ):(<p>There is no item to show</p>);
    return (
        <div className='ListItems'>
            <div >
                <span className='name title'>Name</span>
                <span className='age title'>Age</span>
                <span className='action title'>Action</span>
            </div>
           {ListItems}
        </div>
        )
}
export default TodoItem