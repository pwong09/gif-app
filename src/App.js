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

  const handleSubmit = (search) => {
    console.log('this is search', search);
    setGifSearch(search);
    console.log(gifSearch);
  }
  const key = 'tH0qPhglUOsp3JJjyz2g6VNwczxvX2Ys';
  useEffect(() => {
    let gifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;

    const makeApiCall = async () => {
      const res = await fetch(gifUrl);
      const data = await res.json();
      setGifData(data);
      console.log('gifData:', gifData)
    }
    makeApiCall();
  }, [gifData])

  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form handleSubmit={handleSubmit} />
      <br />
      <br />
      <Gif gif={gifData}/>
    </div>
  );
}

export default App;
