import React from "react";


const Completed = ({todos}) => {
    const completedTodos = todos.filter(todos => todos.completed);

    const renderMessage = () => {
        if(completedTodos.length <= 1) {
        return {
            title: "Come on eyou can do it..!",
            subtitle:`Only ${todos.length - completedTodos.length} tasks to go`
        };        
    } else if(completedTodos.length < todos.length) {
        return {
            title: `Awesome you have completed ${completedTodos.length} task already`,
            subtitle: `Only ${todos.length - completedTodos.length} tasks to go`
        };
    } else {
        return {
            title: `Excelent you have completed all the task`
        }
    }
};
if (!todos.length) return null;

return (
    <div className="App">
        <div className="header">{renderMessage().title}</div>
        {renderMessage().subtitle && <p>{renderMessage().subtitle}</p>}
    </div>
)
}
export default Completed;