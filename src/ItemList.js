import React from 'react';
import { Link } from "react-router-dom";
import {Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';


class ItemList extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                //isShown: false,
            } 
    }


    setEditedListId=(id)=>{
        this.props.setEditedListId(id)
        console.log("My new ID: ",id)
    }

    handleSubmit(id, name) {
        this.props.deleteItem(id, name);
    }

    handleListDelete(id) {
        this.props.deleteList(id)
    }

     render() {
        
        let listJsx = (
            this.props.lists.map((l) => (
                <Col sm='4' key={l.title}>
                    <div contentEditable="true">
                        <h3>{l.title}</h3>
                    </div>
                    <div 
                        className={ this.props.isShown ? 'display' : 'hide'}
                    >
                        <div className="teal">
                            <Button variant="outline-info" onClick={()=>this.setEditedListId(l.id)}><Link to={'/additem/'+l.id}>Add Item</Link></Button>
                            <Button variant="outline-info" onClick={()=>this.props.handleEditList(l.id)}><Link to={'/editlist/'+l.id}>Edit List</Link></Button>
                            <Button variant="outline-info" onClick={()=>this.handleListDelete(l.id)}>Delete List</Button>
                        </div>
                    </div>
                    
                    <ul>
                        {l.name.map((n) => (
                            <div 
                                className={ this.state.isShown ? 'underlined' : 'none'}>
                                    <li key={n}>
                                        <div contentEditable="true">
                                            {n}
                                        </div>
                                        <Button variant="outline-info" onClick={(e)=>this.props.deleteItem(l.id, n)}
                                            className={ this.props.isShown ? 'display' : 'hide'}
                                        >Delete Item                                        
                                        </Button>
                                    </li>
                            </div>))}
                        </ul>
                    </Col>))
                    
        ) 

        return (
            <div className="itemList">
                <h2>Item List</h2>
                <Row>
                    {listJsx}
                </Row>
            </div>
        )
    }
}

export default ItemList;