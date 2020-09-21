import React from 'react'
import Item from './item'

function Group(props){
    console.log(props)
    // debugger
    let filteredGroup = props.data.filter(el => {
        // debugger
        return el.name !== null && el.name !== ""
    })

    filteredGroup.sort(function(a, b) {
        let nameA = parseInt(a.name.split(" ")[1]); // ignore upper and lowercase
        let nameB = parseInt(b.name.split(" ")[1]); // ignore upper and lowercase
        debugger
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }
    )

    return(
        <div>
            <div className="list-group-item bg-info">--------Group {props.data[0].listId}--------</div>
            <ul className="list-group">
               {
                filteredGroup.map((each, ind) => {
                        return <Item key={ind} data={each} />
                })
                } 
            </ul>
            
        </div>
    )
}

export default Group;