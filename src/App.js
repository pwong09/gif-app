import {useState, useEffect } from "react";
import './App.css';
import Form from './Form.js';
import Gif from './Gif.js';

// API call urls
// `https://api.giphy.com/v1/gifs/random?api_key=${key}`;
// `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${gifSearch}&limit=1`;

function App() {
  const [gifData, setGifData] = useState('');
  const [gifSearch, setGifSearch] = useState('');

  const handleSubmit = async (search) => {
    const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${search}&limit=1`;
    const res = await fetch(searchUrl);
    const data = await res.json();
    setGifData(data.data[0].images.downsized_large.url)
  }
  const key = 'tH0qPhglUOsp3JJjyz2g6VNwczxvX2Ys';
  useEffect(() => {
    const gifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;

    const makeApiCall = async () => {
      const res = await fetch(gifUrl);
      const data = await res.json();
      console.log(data);
      setGifData(data.data.images.downsized_large.url);
      console.log(gifData);
    }
    makeApiCall();
  }, [])

  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form handleSubmit={handleSubmit} />
      <br />
      <br />
      {gifData !== undefined ? (<Gif gif={gifData}/>
      ) : (
        <h2>Get a gif from Giphy</h2>
      )
    }
      
    </div>
  );
}

export default App;
