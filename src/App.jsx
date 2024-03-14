import { useState } from 'react';
import './App.css'
import AppCounter from './Counter';

//LE COUNTDOWN EST A FAIRE

function App() {
const [inputValue,changeInputValue] = useState("");
const [counter,setCounter] = useState

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
<button onClick={add}>AJOUTER UNE COMPETENCE</button>
<ul>
<li>react</li>
<li>javascript</li>
<li>css</li>
</ul>
<AppCounter counter={counter} click={setCounter}></AppCounter>
<p>compte a rebours : <span>{100}</span></p>
</>
)
}

export default App;