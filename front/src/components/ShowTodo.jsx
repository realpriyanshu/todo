export const ShowTodo = ({ todos })=> {
    return (
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
          </div>
        ))}
      </div>
    );
  }
  

