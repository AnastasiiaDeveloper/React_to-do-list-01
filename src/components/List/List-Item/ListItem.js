import React, { useState, useContext } from "react";
import { ContextDeleteText, ContextUpdatedTask } from "../../App/App";
import EditButtons from "../../EditButtons/EditButtos";

import "./listItem.css";

const ListIt = ({ id, idx, title, body }) => {
  
  const updatedTask = useContext(ContextUpdatedTask);
  const deleteText = useContext(ContextDeleteText);
  const [showEdit, setShowEdit] = useState(false);
  const [editText, setEditText] = useState(body);
  
  const editTextBody = (e) => {
    setEditText(e.target.value);
  };
  const saveEdit = () => {
    updatedTask(id, editText);
    setShowEdit(false);
  };
  
  return (
    <tr>
      <td>{++idx}</td>
      <td>{title}</td>
      <td>
        {showEdit ? (
          <EditButtons
          editText={editText}
          editTextBody={editTextBody}
          saveEdit={saveEdit}
          />
        ) : (
          <div>
            {body}
            <button className="redButton" onClick={() => deleteText(id)}>
              Delete
            </button>
            <button className="redButton" onClick={() => setShowEdit(true)}>
              Edit
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};
export default ListIt;
