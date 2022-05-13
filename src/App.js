import {useState, useEffect } from "react";
import './App.css';
import Form from './Form.js';
import Gif from './Gif.js';

function App() {
  const [gifData, setGifData] = useState({});
  const key = 'tH0qPhglUOsp3JJjyz2g6VNwczxvX2Ys';
  let gifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;

  const makeApiCall = async () => {
    const res = await fetch(gifUrl);
    const data = await res.json();
    setGifData({
      url: data.data.images.downsized_large.url,
      title: data.data.title
      });
  }
  const handleSubmit = async (search) => {
    gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${search}&limit=1`;
    const res = await fetch(gifUrl);
    const data = await res.json();
    setGifData({
      url: data.data[0].images.downsized_large.url,
      title: data.data[0].title
    })
  }
  useEffect(() => {
    makeApiCall();
  }, [])

  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form handleSubmit={handleSubmit} />
      <br />
      <br />
      {gifData.url !== undefined ? (<Gif gif={gifData}/>
      ) : (
        <h2>Get a gif from Giphy</h2>
      )
    }
    </div>
  );
}

export default App;
