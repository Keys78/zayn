import { useState, useCallback } from 'react';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import './App.css'
import { useActive } from './hooks/useActive';
import Loader from './components/Loader';
import { Camera, FadersHorizontal } from 'phosphor-react';
import confetti from 'canvas-confetti'
import { SketchPicker } from "react-color";


function App() {
  const active = useActive(1000)
  const [sketchPickerColor, setSketchPickerColor] = useState<any>({ r: "65", g: "55", b: "55", a: "1", });
  const { r, g, b, a } = sketchPickerColor;

  const onClick = useCallback(() => {
    handleCaptureClick()
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2
      }
    });
  }, []);


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
      {/* <SketchPicker
        onChange={(color) => {
          setSketchPickerColor(color.rgb);
        }}
        color={sketchPickerColor}
      /> */}
















      <div className='header__section'>
        <h1>Logo Here</h1>
        <p>Write beautiful excerpts and share with loved ones!</p>
      </div>

      <section className='section__wrapper'>
        <div className='settings__prompt'>
          <FadersHorizontal size={32} color="#fff" weight="duotone" />
        </div>


        <div
          className='inspi__write'
          style={{ backgroundColor: `rgba(${r},${g},${b},${a})`, }}
        >

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

            <div
              spellCheck="true"
              contentEditable
              suppressContentEditableWarning={true}
              className='inspi__write__box'
            >

              Hello
            </div>
          </div>
        </div>
        <button className='export__btn' style={{ marginTop: '-120px' }} onClick={onClick}>
          <Camera size={26} color="#fff" weight="duotone" />
        </button>
      </section>

    </main>
  )
}

export default App
