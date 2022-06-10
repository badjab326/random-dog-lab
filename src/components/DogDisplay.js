import React from "react";

const DogDisplay = ({ dog }) => {
    const loaded = () => {
        return (
            <>
            <img src={dog.message} alt='Pupper Doggo' />
            </>
        )
    }
    const loading = () => {
        return <h1>No Dog to Display</h1>
    };
    return dog ? loaded() : loading();
};

export default DogDisplay;
