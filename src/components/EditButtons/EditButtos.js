
const EditButtons = ({ editText, editTextBody, saveEdit, setShowEdit }) => {
return (
 <div>
 <input type="text" value={editText} onChange={editTextBody} />
 <button className="saveButton" onClick={saveEdit}>
   Save
 </button>
 <button className="cancelButton" onClick={() => setShowEdit(false)}>
   Cancel
 </button>
</div>
    )
}
export default EditButtons;