import { useState } from "react";

const Form = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.dogGenerate();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Find Random Dog!" />
        </form>
    )
};

export default Form
