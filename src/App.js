import React, { useState, useEffect } from 'react';
import './App.css';
import * as d3 from 'd3';
import Child1 from './child1';
import Child2 from './child2';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    d3.csv('/tips.csv').then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="App">
      <Child1 data={data} />
      <h1> </h1>
      <Child2 data={data} />
    </div>
  );
}

export default App;
