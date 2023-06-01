import { useRef } from "react";
import { useState } from "react";
import "./UserNameForm.css"
import Home from "../../../pages/Home/Home";

export const UserNameForm = ({ onSendName }) => {
  const [userNameValue, setUserNameValue] = useState("");
  const [nameError, setNameError] =useState ("");
  const hasInputAlreadyTouched = useRef(false);


  const handleChange = (e) => {
    const nameValue = e.target.value;
    if (!hasInputAlreadyTouched.current)
     hasInputAlreadyTouched.current = true;

    if(!nameValue) setNameError("Name is empty!");

    else if (/[^a-z ]/i.test(nameValue)) 
    setNameError("Only letters and spaces allowed");
    else if (!/^[a-z]{2,} ?$/i.test(nameValue))
    setNameError("Name must be at least 2 characters");
    else setNameError("");

    setUserNameValue(nameValue)

  };

const handleSubmit = (e) => {
e.preventDefault();

if (!nameError && hasInputAlreadyTouched.current) onSendName(userNameValue);


};

  return (
    <form onSubmit={handleSubmit}>
      {Boolean(nameError) && <p>{nameError}</p>}
        <input type="text" placeholder="Your name..." 
        value={userNameValue} onChange={handleChange} />
        <button type="submit">Start</button>
    </form>
  );
};

export default UserNameForm;