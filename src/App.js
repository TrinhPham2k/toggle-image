import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const tabs = ["posts", "comments", "albums"];
function App() {
  const [show, setShow] = useState(false);
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handleToggle = () => {
    setShow(!show);
  };
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
    e.target.value = null;
  };

  return (
    <>
      <button onClick={handleToggle}>Toggle</button>
      <br />
      <input type="file" onChange={handleAvatar} />
      {avatar && <img src={avatar.preview} width="50%" />}
    </>
  );
}
export default App;
