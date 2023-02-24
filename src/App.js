import "./App.css";
import { useEffect, useState } from "react";
import video from "./Balloons.mp4";

function App() {
  const [tips, setTips] = useState("");

  const fetchTips = async () => {
    const response = await fetch("https://www.boredapi.com/api/activity/");
    const data = await response.json();
    setTips(data.activity);
  };

  useEffect(() => {
    fetchTips();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1083/1083511.png?w=740&t=st=1677015605~exp=1677016205~hmac=d436f453ee3253554ac9ff23a108a2c69ba711199f3ede7992eeb3526abaaf7d"
            alt="icon"
            width="35px"
          />
          Tips for dealing with boredom!
        </h1>
      </div>

      <div className="container">
        <p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/522/522939.png?w=740&t=st=1677014904~exp=1677015504~hmac=ffd133ebc58b2c4e703d16c00059ba55c671a48dfdaaeaf5cbeed57e750d0839"
            width="35px"
            alt="icon"
          />
          {tips}{" "}
        </p>
      </div>

      <div className="container">
        <button className="btn" onClick={fetchTips}>
          New Tip
        </button>
      </div>
    </div>
  );
}

export default App;
