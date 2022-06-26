import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import NodeContextProvider from './Contexts/NodeContext';

import Flow from './Flow';
import ModalEdges from './Components/ModalEdges';


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <NodeContextProvider>
        <main style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div id="node-flows" style={{ width: "95%", height: "50vh", border: "0.5px solid black" }}>
            <Flow handleShow={handleShow} />
          </div>
        </main>
        <ModalEdges show={show} handleClose={handleClose} />
      </NodeContextProvider>
    </>

  );
}

export default App;
