import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react'


function App() {

  const [puppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // console.log("puppyList: ", puppyList);
  
  // function handleClick() {
  //   //some logic here
  // }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  // console.log(featuredPup);

  return (
    <div className="App">
      {
        puppies.map((puppy) => {
          return (<button className="logo" onClick={() => { setFeatPupId(puppy.id) }} key={puppy.id}>{puppy.name}</button>);
        })
      }
      <a>{featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.name}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}</a>
    </div>
  );
}

export default App          


