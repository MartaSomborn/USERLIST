import Card from "./UI/Card";
import classes from "./UserList.module.css";

const UserList = ({ userListData }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {userListData.map((user, index) => (
          <li key={index}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
