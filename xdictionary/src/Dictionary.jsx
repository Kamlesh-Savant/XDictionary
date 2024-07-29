import React, { useRef, useState } from 'react';
import './Dictionary.css';

function Dictionary() {

    const [defination, setDefination] = useState('');
    const inputRef = useRef();

    const data = 
    [
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
    ];

    const handleSearch = ()=>{
        const result = data.find(res => {
            const search = inputRef.current.value;
            // console.log(search)
            if(res.word.toLowerCase() === search.toLowerCase()){
                return res;
            }
        })
        // console.log(result);
        const solution = result !== undefined ? result.meaning : 'Word not found in the dictionary.';
        console.log(solution);
        setDefination(solution);
    }
    

  return (
    <div>
        <h1>Dictionary App</h1>
        <input type="text"  ref={inputRef}/>
        <button onClick={handleSearch}>Search</button>
        <div>
            <h3>Definition:</h3>
            <p>{defination}</p>
        </div>
    </div>
  )
}

export default Dictionary