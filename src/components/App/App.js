import Header from "../Header";
import List from "../List/list";
import Filter from "../Filter/Filter";
import "./App.css";
import Modal from "../Modal/Modal";
import React, { useState, createContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Api from "./../../api/apiReq";

export const ContextArr = createContext([]);
export const ContextDeleteText = createContext();
export const ContextShow = createContext(false);
export const ContextSetShow = createContext();
export const ContextAddData = createContext();
export const ContextUpdatedTask = createContext();
export const ContextFilterYourArray = createContext();

function App() {
  const [show, setShow] = useState(false);
  const [arr, setArr] = useState([]);
  const [textFilter, setTextFilter] = useState("");
  const [filterArr, setFilterArr] = useState([]);

  const loadData = async () => {
    const data = await Api.getAllData();
    setArr(data);
    setFilterArr(data);
  };
  useEffect(() => {
    loadData();
  }, []);

  const deleteText = async (id) => {
    await Api.deleteId(id);
    loadData();
  };

  const updatedTask = async (id, newText) => {
    const updObj = {
      body: newText,
    };
    await Api.updateId(id, updObj);
    loadData();
  };

  const addData = async (v, t) => {
    let newObj = {
      title: t,
      body: v,
    };
    await Api.postData(newObj);
    loadData();
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
  // ++++

  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  return (
    <div className="App">
      <p>{reduxState.counter}</p>
      <button
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "MINUS" });
        }}
      >
        -
      </button>
      {/* // ++++ */}

      <ContextArr.Provider value={filterArr}>
        <ContextShow.Provider value={show}>
          <ContextSetShow.Provider value={setShow}>
            <ContextAddData.Provider value={addData}>
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
            </ContextAddData.Provider>
          </ContextSetShow.Provider>
        </ContextShow.Provider>
      </ContextArr.Provider>
    </div>
  );
}

export default App;
