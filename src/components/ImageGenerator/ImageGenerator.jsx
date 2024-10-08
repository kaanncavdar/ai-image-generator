import React, { useState } from 'react';
import './ImageGenerator.css';
import adana_logo from '../Assets/adana_logo.svg';
import axios from 'axios';

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  const [inputText, setInputText] = useState("");

  const generateImage = async () => {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      {
        prompt: inputText,
        n: 1,
        size: "512x512",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer sk-proj-3gzfAJC8l3U6FvZeQ1E0T3BlbkFJ7f7TtEpioQVXIIwQd289",
        },
      }
    )
    setImage_url(response.data.data[0].url);
  };

  // "Authorization":
          //   "Bearer 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",
          //   "Bearer sk-proj-3gzfAJC8l3U6FvZeQ1E0T3BlbkFJ7f7TtEpioQVXIIwQd289",
  return (
    <div className='ai-image-generator'>
      <div className='header'>Ai image <span>generator</span></div>
      <div className="search-box">
        <input type="text" onChange={(e) => setInputText(e.target.value)} className='search-input' placeholder='Describe What Do You Want to See' />
        <div className="generate-btn" onClick={generateImage}>Generate</div>
      </div>
      <div className='img-loading'>
        <div className='image'><img src={image_url === "/" ? adana_logo : image_url} alt="" /> </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
