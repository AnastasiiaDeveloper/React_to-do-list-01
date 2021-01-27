import Header from "../Header";
import List from "../List/list";
import Filter from "../Filter/Filter";
import "./App.css";
import Modal from "../Modal/Modal";
import React, { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const ContextArr = createContext([]);
export const ContextDeleteText = createContext();
export const ContextShow = createContext(false);
export const ContextSetShow = createContext();
export const ContextShowData = createContext();
export const ContextUpdatedTask = createContext();
export const ContextFilterYourArray = createContext();

function App() {
  const [show, setShow] = useState(false);
  const [arr, setArr] = useState([]);
  const [textFilter, setTextFilter] = useState("");
  const [filterArr, setFilterArr] = useState([]);
  useEffect(() => {
    // start app //
    if (localStorage.getItem("listTodo") !== null) {
      console.log("такой ключ есть");
      const dataArr = JSON.parse(localStorage.getItem("listTodo"));
      // console.log(dataArr);
      setArr(dataArr);
      setFilterArr(dataArr);
    } else {
      //   console.log("такого ключа нет");
      localStorage.setItem("listTodo", JSON.stringify([]));
      //   console.log("ключ создан");
    }
  }, []);

  // console.log(storedArr);

  const deleteText = (id) => {
    let filteredArr = arr.filter((el) => el.id !== id);
    setArr(filteredArr);
    localStorage.setItem("listTodo", JSON.stringify(filteredArr));
    setFilterArr(filterSearch(textFilter, filteredArr));
  };

  const updatedTask = (id, newText) => {
    console.log(id, newText);
    const idx = arr.findIndex((el) => el.id === id);

    let obj = arr[idx];
    const updObj = {
      title: obj.title,
      body: newText,
      id: obj.id,
    };
    const newArray = [...arr.slice(0, idx), updObj, ...arr.slice(idx + 1)];
    localStorage.setItem("listTodo", JSON.stringify(newArray));
    setArr(newArray);
    console.log(newArray);
    setFilterArr(filterSearch(textFilter, newArray));
    // console.log(filterSearch(textFilter));
  };

  const showData = (v, t) => {
    let newObj = {
      id: uuidv4(),
      title: t,
      body: v,
    };
    let objAdd = [newObj, ...arr];
    setArr(objAdd);
    localStorage.setItem("listTodo", JSON.stringify(objAdd));
    setFilterArr(filterSearch(textFilter, objAdd));
  };

  const filterSearch = (text, arrState = arr) => {
    if (text.trim() === "") {
      return arrState;
    } else {
      return arrState.filter((item) => {
        return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
    }
  };
  const filterYourArray = (text) => {
    setTextFilter(text);
    setFilterArr(filterSearch(text));
  };

  return (
    <div className="App">
      <ContextArr.Provider value={filterArr}>
        <ContextShow.Provider value={show}>
          <ContextSetShow.Provider value={setShow}>
            <ContextShowData.Provider value={showData}>
              <ContextDeleteText.Provider value={deleteText}>
                <ContextUpdatedTask.Provider value={updatedTask}>
                  <ContextFilterYourArray.Provider value={filterYourArray}>
                    <Modal />
                    <Header />
                    <List />
                    <Filter />
                  </ContextFilterYourArray.Provider>
                </ContextUpdatedTask.Provider>
              </ContextDeleteText.Provider>
            </ContextShowData.Provider>
          </ContextSetShow.Provider>
        </ContextShow.Provider>
      </ContextArr.Provider>
    </div>
  );
}

export default App;
