import { useState } from "react";
import axios from "axios"
import "./style.scss";

const Home = () => {
  const [url, setURL] = useState("");
  const [urlReply, setReply] = useState("")

  return (
    <div className="container">
      <h1>URL-Shortener</h1>
      <form
      onSubmit={(e) => {
        e.preventDefault()
        axios.post(`http://${process.env.REACT_APP_IP}:${process.env.REACT_APP_PORT}/api/newurl`, {
          url: url
        }).then((data) => {
          console.log(data.data);
          setReply(data.data)
          setURL("")
          console.log(urlReply);
        })
      }}
      >
        <input 
        type="text" 
        placeholder="www.example.com" 
        value={url}
        onChange={(e) => {setURL(e.target.value)}}
        />
        <button type="submit">Shorten</button>
      </form>
      {urlReply ? (
        <a 
        href={`http://${process.env.REACT_APP_IP}:${process.env.REACT_APP_PORT}/api/${urlReply}`}
        target="_blank"
        rel="noreferrer"
        >
          <h2>{`http://${process.env.REACT_APP_IP}:${process.env.REACT_APP_PORT}/api/${urlReply}`}</h2>
        </a>
      ) : (
        null
      )}
    </div>
  );
};

export default Home;
