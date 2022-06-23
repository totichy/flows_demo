import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Flow from './flow';

import initialNodes from './nodes.js';
import initialEdges from './edges.js';


function App() {


  return (
    <>
      <main style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div id="node-flows" style={{ width: "80%", height: "50vh", border: "0.5px solid black" }}>
          <Flow initialNodes={initialNodes} initialEdges={initialEdges} />
        </div>
      </main>
    </>
  );
}

export default App;
