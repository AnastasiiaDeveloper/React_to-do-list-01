import React, { useContext } from "react";
import "./list.css";
import ListIt from "./List-Item/ListItem";
import { ContextArr, ContextDeleteText, ContextUpdatedTask} from "../App/App";

export default function List() {
  const arr = useContext(ContextArr);
  const deleteText = useContext(ContextDeleteText);
  const updatedTask = useContext(ContextUpdatedTask);

  if (arr.length < 1) {
    return <div>Записей нет</div>;
  }
  const listItem = arr.map((item, idx) => (
    <ListIt
      key={item.id}
      idx={idx}
      id={item.id}
      title={item.title}
      body={item.body}
      deleteText={deleteText}
      updatedTask={updatedTask}
    />
  ));

  return (
    <table className="list-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>{listItem}</tbody>
    </table>
  );
}
