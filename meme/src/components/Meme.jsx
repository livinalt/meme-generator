import React, {useState} from 'react'
import memesData from '../memesData'


const Meme = () => {
    const [memeImage, setMemeImage] = React.useState("");

    let url;

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // const url = memesArray[randomNumber].url
        // console.log(url)
        setMemeImage(memesArray[randomNumber].url);
    }
  return (
    <main>
        <p>{url}</p>
        <div>
            <label htmlFor='top-text'>Top Text</label>
            <input 
                id='top-text'
                type="text"
                placeholder='Shut up'
                className='form--input'
             />
            
            <label htmlFor='bottom-text'>Bottom Text </label>
            <input 
                id='bottom-text'
                type="text" 
                placeholder='Bottom Text'
                className='form--input'
            />

            <button
                className='form--botton'
                onClick={getMemeImage}
                >
                    Get a new image
                </button>
        </div>

        <img 
            src={memeImage} 
            alt='' 
            className='meme--image'
                />
    </main>
  )
}

export default Meme