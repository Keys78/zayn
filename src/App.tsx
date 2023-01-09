import { useState } from 'react';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import './App.css'

function App() {
  const [quote, setQuote] = useState()


  const handleCaptureClick = async () => {
    const quoteBox =
      document.querySelector<HTMLElement>('.inspi__write');
    if (!quoteBox) return;

    const canvas = await html2canvas(quoteBox);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
  };


  return (
    <main className="main__wrapper">
      <div className='header__section'>
        <h1>Logo Here</h1>
        <p>Write beautiful excerpts and share with loved ones!</p>
      </div>
      <div className='inspi__write'>
      <div contentEditable className='inspi__write__box'>
          Hello Lorem5000
      </div>
      </div>
      <button onClick={handleCaptureClick}>Download</button>
    </main>
  )
}

export default App
