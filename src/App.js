import "./App.css";
import { useState } from "react";

function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
const generateNumbers = () => {
  const newMass = [1,2,3,4,5];
  shuffle(newMass)
  return newMass;
};
function App() {
  const [numbers, setNumbers] = useState(generateNumbers());
  const [maxNumber, setMaxNumber] = useState(5);
  const remove = (item, index) => {
    if (item == maxNumber) {
     const newMass = numbers.slice()
     newMass.splice(index, 1)
     setMaxNumber(maxNumber-1)
     if (newMass.length == 0) {
      alert("Win")
     } else{
      setNumbers(newMass)
     }
    } else{
      alert("Loose")
    }
  }
    
    
  
  const Nie = numbers.map((item, index) => {
    return <li key={index} onClick={() => remove(item, index)}>{item}</li>;
  });
  return (
    <div>
      <ul>{Nie}</ul>
    </div>
  );
}

export default App;
