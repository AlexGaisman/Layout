import React, { useState, useEffect} from "react";

export const ControlledForm = () => {

    const [nameInputError, setNameInputError] = useState('')

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [hairColor, setHairColor] = useState('');

    useEffect(()=>{
        if(name.length<2) 
            setNameInputError(' Name should be longer than 2 chars');
        else setNameInputError('');
        
    },[name]);

    const handleSubmit = (e) => {

        console.log(name);
        console.log(age);
        console.log(hairColor);

        e.preventDefault();

    }



    return (
        <form onSubmit={e=>handleSubmit(e)}>
            {nameInputError && <p style={{color:'red'}}>{nameInputError}</p>}
            <input name='name' type='text' 
                placeholder='Name' value={name} 
                onChange={e=>setName(e.target.value)} />

            <input name='age' type='number' 
                placeholder='Age' value={age} 
                onChange={e=>setAge( Number(e.target.value))} />

            <input name='hairColor' type='text' 
                placeholder='Hair Color' value={hairColor} 
                onChange={e=>setHairColor(e.target.value)} />

            <input type='submit' value='Submit' />
        </form>
              )

}