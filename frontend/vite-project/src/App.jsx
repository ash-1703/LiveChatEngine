import { useState } from "react";

import "./App.css";

import Authpage from "./Authpage.jsx";
import Chatpage from "./Chatpage.jsx";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <Authpage onAuth={(user) => setUser(user)} />;
  } else {
    return <Chatpage user={user} />;
  }
}

export default App;