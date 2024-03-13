import { useState } from 'react';
import './App.css'



function App() {
const [counter,changeCounter] = useState(0);
const [countDown,changeCountDown] = useState(100);
const [inputValue,changeInputValue] = useState("");

const onChangeCounter = () => {
console.log("click");
changeCounter((previousValue)=> {
return ++previousValue;
});
};

const onChangeInputValue = (event) => {
changeInputValue(() => {
return event.target.value;
});
};

const add = () => {
console.log(inputValue);
};

  return ( 
  <>
  <h1>coucou!</h1> 
  <p>bienvenue</p>
  <input value={inputValue} type="text" name="skill" onChange={onChangeInputValue}/>
  <button onClick={add}>AJOUTER UNE COMPETENCE (apparait dans la console)</button>
  <ul>
  <li>react</li>
  <li>javascript</li>
  <li>css</li>
  </ul>
  <p>nombre de compétences validées : <span >{counter}</span></p>
  <button onClick={onChangeCounter}>VALIDER UNE COMPETENCE</button>
  </>
  )
}

export default App;