import React, { useState } from "react";
import { Button, Card, CardBody, CardFooter } from "react-bootstrap";
import "./CardDisplay.css";
const Carddisplay = ({
  ele,
  task,
  setTask,
  taskname,
  setTaskName,
  taskdesc,
  setTaskDesc,
  complete,
  setComplete,
  iseditable,
  setIsEditable,
  currenttodo,
  setCurrentToDo,
}) => {
  const editTask = (element) => {
    setIsEditable("true");
    setTaskName(element.name);
    setTaskDesc(element.description);
    setCurrentToDo(element.id);
    //setComplete(element.completed)
  };

  const changestatus = (element) => {
    let optionselected = document.getElementById(ele.id);
    if (optionselected.value === "Completed") {
      element.completed = "true";
      setComplete("true");
    } else if (optionselected.value === "NotCompleted") {
        element.completed = "false";
        setComplete("false");
    }
  };
  const removeTask = (i) => {
    let filteredTask = [...task].filter((task) => task.id != i);
    setTask(filteredTask);
  };
  return (
    <>
      <Card>
        <CardBody>
          <strong>Name:</strong>
          {ele.name} <br />
          <strong>Description:</strong>
          {ele.description}
          <br />
          <strong>Status:</strong>
          {iseditable === "true" ? (
            <select
              id={ele.id}
              onChange={() => {
                changestatus(ele);
              }}
            >
              <option
                value="NotCompleted"
                onChange={(e) => setComplete("false")}
              >
                NotCompleted
              </option>
              <option value="Completed" onChange={(e) => setComplete("true")}>
                Completed
              </option>
            </select>
          ) : (
            <select>
              <option
                value={ele.completed === "true" ? "Completed" : "NotCompleted"}
              >
                {ele.completed === "true" ? "Completed" : "NotCompleted"}
              </option>
            </select>
          )}
          <br />
        </CardBody>
        <CardFooter>
          <div className="button_group">
            <Button
              variant="success"
              onClick={() => {
                editTask(ele);
              }}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                removeTask(ele.id);
              }}
            >
              Delete
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default Carddisplay;
