import React from "react";
import Carddisplay from "../Carddisplay/Carddisplay";
import "./Mytodo.css";

const Mytodo = ({
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
  let completedtask = task.filter((e) => e.completed === "true");
  let notcompletedtask = task.filter((e) => e.completed === "false");
  const filtertask = () => {
    console.log(task);
    let optselected = document.getElementById("filtertask").value;
    console.log(optselected);
    if (optselected === "all") {
      document.getElementById("all").style.display = "flex";
      document.getElementById("completed").style.display = "none";
      document.getElementById("notcompleted").style.display = "none";
    } else if (optselected === "completed") {
      document.getElementById("completed").style.display = "flex";
      document.getElementById("all").style.display = "none";
      document.getElementById("notcompleted").style.display = "none";
    } else {
      document.getElementById("notcompleted").style.display = "flex";
      document.getElementById("all").style.display = "none";
      document.getElementById("completed").style.display = "none";
    }
  };
  return (
    <>
      <div className="filter_main">
        <strong>MyTodos</strong>
        <div className="filter_header">
          Status Filter:
          <select id="filtertask" onChange={filtertask}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="notcompleted">NotCompleted</option>
          </select>
        </div>
      </div>
      <div className="task_container" id="all">
        {task.map((ele, index) => {
          return (
            <div key={ele.id} className="task_container_list">
              <Carddisplay
                ele={ele}
                task={task}
                setTask={setTask}
                taskname={taskname}
                setTaskName={setTaskName}
                taskdesc={taskdesc}
                setTaskDesc={setTaskDesc}
                complete={complete}
                setComplete={setComplete}
                iseditable={iseditable}
                setIsEditable={setIsEditable}
                currenttodo={currenttodo}
                setCurrentToDo={setCurrentToDo}
              />
            </div>
          );
        })}
      </div>
      <div className="task_container" id="completed">
        {[...completedtask].map((ele, index) => {
          return (
            <div key={ele.id} className="task_container_list">
              <Carddisplay
                ele={ele}
                task={task}
                setTask={setTask}
                taskname={taskname}
                setTaskName={setTaskName}
                taskdesc={taskdesc}
                setTaskDesc={setTaskDesc}
                complete={complete}
                setComplete={setComplete}
                iseditable={iseditable}
                setIsEditable={setIsEditable}
                currenttodo={currenttodo}
                setCurrentToDo={setCurrentToDo}
              />
            </div>
          );
        })}
      </div>
      <div className="task_container" id="notcompleted">
        {[...notcompletedtask].map((ele, index) => {
          return (
            <div key={ele.id} className="task_container_list">
              <Carddisplay
                ele={ele}
                task={task}
                setTask={setTask}
                taskname={taskname}
                setTaskName={setTaskName}
                taskdesc={taskdesc}
                setTaskDesc={setTaskDesc}
                complete={complete}
                setComplete={setComplete}
                iseditable={iseditable}
                setIsEditable={setIsEditable}
                currenttodo={currenttodo}
                setCurrentToDo={setCurrentToDo}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Mytodo;
