import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import React, {useState, Fragment} from "react";
import ErrorModal from "./components/UI/ErrorModal";


function App() {

  const [users, setUsers] = useState([]);
  const [errorModal, setErrorModal] = useState({});

  const errorSubmitHandler = (error) => {
      setErrorModal({
          title: error.title,
          message: error.message
      })
  }

  const closeModalHandler = () => {
      setErrorModal({})
  }

  const saveUserHandler = (newUser) => {
      setUsers(prevState => {
          return [newUser, ...users];
      })
  }

  let error = null;

  if(errorModal.title || errorModal.message) {
      error = <ErrorModal title={errorModal.title} message={errorModal.message} onConfirm={closeModalHandler}/>
  }

  return (
      <Fragment>
          <AddUser onSaveUser={saveUserHandler} onErrorSubmit={errorSubmitHandler}/>
          <UserList users={users}/>
          {error}
      </Fragment>
  );
}

export default App;
