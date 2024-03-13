import { useState } from 'react';
import './App.css'



function App() {
  let state = useState(0);
  let counter = state[0];
  let changeCounter = state[1];

  //console.log(counter);

  const log = () => {
  console.log("click");
  changeCounter((previousValue)=>{
  console.log("previousValue: ", previousValue);
  return previousValue + 1;
  });
  }

  return ( 
  <>
  <h1>coucou!</h1> 
  <p>bienvenue</p>
  <ul>
  <li>react</li>
  <li>javascript</li>
  <li>css</li>
  </ul>
  <p>nombre de compétences validées : <span >{counter}</span></p>
  <button onClick={log}>VALIDER UNE COMPETENCE</button>
  </>
  )
}

export default App;
