import { useState } from "react";

const StateFullForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} value={'reba'} type="text" name="name" id="" /><br />
                <input onChange={handleEmailChange} type="email" name="email" id="" /><br />
                <input onChange={handlePasswordChange} type="password" name="password" id="" /><br />
                <input type="submit" name="" id="" value="Submit" />
            </form>
        </div>
    );
};

export default StateFullForm;