import React, { useContext } from "react";
import { ContextShow, ContextSetShow } from "../App/App";

const Modal = () => {
  const show = useContext(ContextShow)
  const setShow= useContext(ContextSetShow)
  return (
    <div
      style={{ display: show ? "block" : "none" }}
      className="modal fade show"
      id="exampleModal"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
          </div>
          <div className="modal-body">You didnt add the text to both field or filter string is empty</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => {
                setShow(false);
              }}
            >
              Close the modal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
