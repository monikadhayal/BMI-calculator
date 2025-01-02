import { useState } from "react";

function AppComponent() {
  const [userLogged, setUserLogged] = useState(false);

  return (
    <div>
      <button
        className=" hover:bg-blue-600 bg-blue-500  p-2  m-4 rounded"
        onClick={() => {
          setUserLogged(true);
        }}
      >
        Log In
      </button>
      <button
        className=" hover:bg-blue-600 bg-blue-500  p-2  m-4 rounded"
        onClick={() => {
          setUserLogged(false);
        }}
      >
        Log Out
      </button>

      {userLogged ? <p className="text-white">"Welcome back"</p> : <p className="text-white">"Please log in!!"</p>}
    </div>
  );
}
export default AppComponent;
