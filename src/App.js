import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import React, {useState} from "react";


function App() {

  const [users, setUsers] = useState([]);

  const saveUserHandler = (newUser) => {
      setUsers(prevState => {
          return [newUser, ...users];
      })
  }

  return (
      <div>
          <AddUser onSaveUser={saveUserHandler}/>
          <UserList users={users}/>
      </div>
  );
}

export default App;
