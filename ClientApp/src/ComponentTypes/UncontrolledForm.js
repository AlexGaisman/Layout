import React from "react";

const nameRef = React.createRef();
const ageRef = React.createRef();
const hairColorRef = React.createRef();

export const UncontrolledForm=()=>{
    const handleSubmit = (e) => {

        console.log(nameRef.current.value);
        console.log(ageRef.current.value);
        console.log(hairColorRef.current.value);

        e.preventDefault();

    }

    return(
        <form onSubmit={handleSubmit}>
            <input name='name' type='text' placeholder='Name'  ref={nameRef}/>
            <input name='age' type='number' placeholder='Age' ref={ageRef}/>
            <input name='hairColor' type='text' placeholder='Hair Color' ref={hairColorRef} />
            <input type='submit' value='Submit' />
        </form>
    )
}