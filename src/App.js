// todolist
import './App.css';
import {useState} from "react";
function App() {
  const [todolist,settodolist]=useState([]);
  const [task,settask]=useState("");
  const handleinput=(event)=>{
      settask(event.target.value);
  }
  const add=()=>{
    const newtodolist=[...todolist,task];
    settodolist(newtodolist);
  }
  const deletetask=(taskname)=>{
    const newtodo=todolist.filter((t)=>{
      if(t===taskname){
        return false
      }
      else{
        return true
      }
    });
    settodolist(newtodo);
  };
  return (
    <div className="App">
      <div className="addtask">
        <input onChange={handleinput} style={{margin:"30px",color:"orange"}}/>
        <button onClick={add} style={{color:"aqua"}}>ADD TASK</button>
        </div>
        <div className="list">
    
           {todolist.map((t)=>{
            
             return (
              <div>
             <h1 style={{color:"red"}}>{t}</h1>
             <button onClick={()=>deletetask(t)} style={{color:"aqua"}}>DELETE</button>
             </div>);
           })}
           
        </div>

       </div>
  );
}

export default App;
