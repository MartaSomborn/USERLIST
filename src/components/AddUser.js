import { useState } from "react";
import Card from "./UI/Card";
import classes from "./AddUser.module.css";
import Button from "./UI/Button";
import ErrorModal from "./ErrorModal";

const AddUser = ({ onAddUser }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const onClickHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        msg: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        msg: "Please enter a valid age (> 0).",
      });
      return;
    }
    onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          msg={error.msg}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <div>
          <form onSubmit={onClickHandler}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={usernameChangeHandler}
              value={enteredUsername}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              onChange={ageChangeHandler}
              value={enteredAge}
            />
            <Button type="submit" onClick={onClickHandler}>
              Add User
            </Button>
          </form>
        </div>
      </Card>
    </>
  );
};

export default AddUser;
