import React from 'react'

function Item(props){
    console.log(props)
    // debugger
    return(
        <li className="list-group-item">
            {props.data.listId} - {props.data.name}
        </li>
    )
}

export default Item;
