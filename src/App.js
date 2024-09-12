
import { useState } from 'react';
import './App.css';
import Controller from './component/Controller';
import Viewer from './component/Viewer';

function App() {
  const [count,setConut]=useState(0);
  
  const handleSetCount=(value)=>{
    setConut(count+value);
  }
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
