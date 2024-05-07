import React, { useState } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Mytodo from "../Mytodo/Mytodo";
const Header = () => {

  const [task, setTask] = useState([]);
  const [taskname, setTaskName] = useState("");
  const [taskdesc, setTaskDesc] = useState("");
  const [complete, setComplete] = useState("false");
  const [currenttodo,setCurrentToDo] = useState('');
  const [iseditable,setIsEditable] = useState("false");

  const addTask = () => {
    
    if (taskname !== "" && taskdesc != "") {
        setComplete("false");
        
      let addlist = {
        id: task.length+1,
        name: taskname,
        description: taskdesc,
        completed: complete,
      };
     // console.log(addlist);

      setTask([...task, addlist]);
      setTaskName('');
      setTaskDesc('');
      setIsEditable("false");
    }
  };
  const saveTask = ()=>{

    let updatedname = taskname;
    let updateddesc = taskdesc;
    let updatedcomplete;
    //let optionselected = document.getElementById("selectoption");
    // console.log(optionselected.value);
    if(complete === "true")
         updatedcomplete= "true";
    else
       updatedcomplete= "false";
    console.log("HEADER",updatedcomplete);
    let updatedtask = task.map((e)=>{
        if(e.id===currenttodo){
            e.name = updatedname,
            e.description = updateddesc,
            e.completed = updatedcomplete
            
        }
        return e;
    });
    setTask([...updatedtask]);
    setTaskName('');
      setTaskDesc('');
      setIsEditable("false");
      //setComplete("false");
      //setIsEditable("true");
  };
  return (
    <>
      <Container>
        <Row>
          <Col sm={4} md={12}>
            <h1>MyTodo</h1>
            <div className="header">
              <input
                type="text"
                id="taskname"
                placeholder="Taskname"
                value={taskname}
                onChange={(e) => setTaskName(e.target.value)}
              ></input>
              <input
                type="text"
                id="taskdescription"
                placeholder="Taskdescription"
                value={taskdesc}
                onChange={(e) => setTaskDesc(e.target.value)}
              ></input>
              {iseditable==="true" ? 
              (<Button onClick={()=>{saveTask(task)}}>Save Task</Button>)
              :
              (<Button variant="success" onClick={addTask}>Add Task</Button>)
             }
            
            </div>
            <Mytodo task={task} setTask={setTask} 
            taskname={taskname} setTaskName={setTaskName}
            taskdesc={taskdesc} setTaskDesc={setTaskDesc}
            complete={complete}  setComplete={setComplete}
            iseditable={iseditable} setIsEditable={setIsEditable}
            currenttodo={currenttodo} setCurrentToDo={setCurrentToDo}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
