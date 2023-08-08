import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState();
  function deleteHandler(params) {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      {modalIsOpen && <Modal onCancel={closeModalHandler}
        onConfirm={closeModalHandler}
      />}
    </div>
  );
};

export default Todo;