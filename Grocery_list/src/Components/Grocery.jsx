import { useState } from "react";
import "./style.css";
import Alert from "./Alert";
import List from "./List";

export default function Grocery(){
    const [grocery , setGrocery] = useState();
    const [click, setClick] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [list, setList] = useState([])
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({show:true, msg:"", type:""});

    function handleItems(e){
        e.preventDefault();
        if (!grocery){
            // alert enter value
            showAlert(true,"danger", "Please Enter a value");
    
        }
        else if (grocery && isEditing){
            // Deal with editing
        }
        else{
            showAlert(true, "Success", "Item added to list")
            const newItem = {id: new Date().getTime().toString(),
                title:  grocery}
            setList([...list, newItem]);
            setGrocery("")
        }
    }

    const showAlert = (show=false, type="", msg="")=>{
        setAlert({show, type, msg})
    }

    const clearList = ()=>{
        showAlert(true, "danger", "empty list")
        setList([])
    }

    const removeItem = (id)=>{
        showAlert(true, "danger", "item removed");
        setList(list.filter(item=>item.id !== id))
    }

    const editItem = (id)=>{
        const specificItem = list.find(item=>item.id === id);
        setIsEditing(true);
        setEditID(id);
        setGrocery(specificItem.title);
    }

    return (
        <section className="section">
            <form onSubmit={handleItems}>
                {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
            <h1>Grocery Bud</h1>
                <input type="text" value={grocery} onChange={(e) => setGrocery(e.target.value)}/>
                <button onClick={()=>setClick(true)}>{isEditing ? "Edit" : "Add to Items" }</button>
            </form>
                {
                    list.length > 0 && <div className="grocery-container">
                    <List items={list} removeItem={removeItem} editItem={editItem}/>
                    <button className="clear-btn" onClick={clearList}>Clear items</button>
                </div>
                }
        </section>
    )
}