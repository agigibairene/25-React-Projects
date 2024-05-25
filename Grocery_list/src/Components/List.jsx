/* eslint-disable react/prop-types */
import { FaEdit, FaTrash } from 'react-icons/fa';
import "./style.css";

const List = ({items, removeItem, editItem}) => {
  return (
    <div className="grocery-list">
        {items.map(item => (<article className="item" key={item.id}>
            <input  type='checkbox'/>
            <p className='title'>{item.title}</p>
           <div className="btn-container">
            <button className='edit-btn' onClick={()=> editItem(item.id)}>
                <FaEdit />
            </button>
            <button className="delete-btn" onClick={()=> removeItem(item.id)}>
                <FaTrash />
            </button>
           </div>
        </article> ))}
    </div>
  )
}

export default List