import React from "react";
import "./style.css";

export function Counter() {
  const [count, setCount] = React.useState(0);
  const [resources, setResources] = React.useState([]);
  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts");
  };
  React.useEffect(() => {
    fetchData()
      .then((res) => {
        return res.json();
      })
      .then((data) => setResources(data))
      .catch(console.log);
  }, []);
  return (
    <div className="container">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Data fetched from api --{resources && resources.length}</p>
    </div>
  );
}
