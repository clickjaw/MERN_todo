import React from "react";

export const TodoItem = ({todo}) => {

    const toggleCompletion = () => {
        
    }


  return (
    <div>
        <input type = "checkbox" onChange = {toggleCompletion}></input>
        {todo.text}
        {`${todo.completed}`}
    </div>
  );
};
