import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class ItemList extends React.Component {
    
    render() {
        
        let listJsx = (
            this.props.items.map((l) =>
                <li key={l.title}>
                    <h2>{l.title}</h2>
                    <button><Link to='/additem'>ADD ITEM</Link></button>
                    <button>Edit List Title</button>
                    <button>Delete List</button>
                    <ul>
                        {l.name.map((n) => 
                        <li key={n}>{n}
                            <button>Edit Item</button>
                            <button>Delete Item</button>
                        </li>)}
                    </ul>
                </li>)
        )   

        return (
            <div className="itemList">
                <h2>Item List</h2>
                <ul>
                    {listJsx}
                </ul>
            </div>
        )
    }
}

export default ItemList;