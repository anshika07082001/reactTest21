import { useState } from 'react';
import './App.css';
import ColorComponent from './components/ColorComponent';
import CounterComponent from './components/CounterComponent';
import AgeComponent from './components/AgeComponent';
import GenderComponent from './components/GenderComponent';

function App() {
  
  const [arr,setArr]=useState([])
  var [count,setCount]=useState(0)

  const counterBtn=()=>{
    count+=5
    setCount(count)
  }
  
  
  const btnHandler=(url)=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setArr(data.users)
    })
  }

  return (
    <div className="App">
      <CounterComponent counterBtn={counterBtn} count={count}/>
      <AgeComponent btnHandler={btnHandler}/>
      <ColorComponent btnHandler={btnHandler}/>
      <GenderComponent btnHandler={btnHandler}/>
      <table>
        <tr>
          <th>ID</th><th>NAME</th><th>AGE</th><th>HAIR COLOR</th><th>GENDER</th>
        </tr>
        {arr.map((item)=>{
          return(
            <tr>
              <td>{item.id}</td><td>{item.firstName}</td><td>{item.age}</td><td>{item.hair.color}</td><td>{item.gender}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}


export default App;
