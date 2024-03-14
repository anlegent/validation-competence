import { useState } from "react";

export default function AppCounter(props) {
let counter = props.counter;
let setCounter = props.click;

const [count,changeCount] = useState(0);

const changeCounter = () => {
changeCount((previousValue)=> {
return ++previousValue;
});
};

<>
<p>compte:<span>{count}</span></p>
<button onClick={changeCounter}>+</button>
</>
}