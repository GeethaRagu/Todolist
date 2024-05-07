import React from 'react';

const Filtertask = (
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
    setCurrentToDo,) => {
    return (
        <>
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
        </>
    );
};

export default Filtertask;