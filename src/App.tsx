import { useState } from 'react';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import './App.css'
import { useActive } from './hooks/useActive';
import useOnClickOutside from './hooks/useOnClickOutside';
import Loader from './components/Loader';
import { Camera } from 'phosphor-react';

function App() {
  const [quote, setQuote] = useState()
  const active = useActive(1000)



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

        <div className='inspi__write__content'>
          <div className='art__board'>
            <div className='art__one'></div><div className='art__two'></div>
          </div>
          {
            !active ?
              <div className='art__board_two'>
                <div className='art__three'></div><div className='art__four'></div>
              </div> :
              <Loader />
          }
          <div spellCheck="true" contentEditable className='inspi__write__box'>

            Hello
          </div>
        </div>
      </div>
      <button className='export__btn' style={{ marginTop: '-120px' }} onClick={handleCaptureClick}>
        <Camera size={26} color="#fff" weight="duotone" />
      </button>
    </main>
  )
}

export default App
