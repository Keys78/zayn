import { useState, useCallback, lazy } from 'react';
import { lazyLoad } from '../utils/lazy';

import { useActive } from '../hooks/useActive'
import { handleCaptureClick } from '../utils/helpers';
import { Camera, FadersHorizontal } from 'phosphor-react';
import confetti from 'canvas-confetti'
import Modal from '../components/Modal';
import SettingsModal from '../components/Modal/SettingsModal';
const Loader = lazy(() => import('../components/Loader'))



function Home() {
  const active = useActive(1000)
  const [isModal, setIsModal] = useState<boolean>(true)
  const [fontSize, setFontSize] = useState<string>('16px')
  const [fontFamily, setFontFamily] = useState<string>('Work Sans')
  const [theme, setTheme] = useState<string>('#00000')
  const [sketchPickerColor, setSketchPickerColor] = useState<any>({ r: "65", g: "55", b: "55", a: "1", });
  const [blockPickerColor, setBlockPickerColor] = useState("#ffffff");

  const { r, g, b, a } = sketchPickerColor;

  const onClick = useCallback(() => {
    handleCaptureClick('.inspi__write')
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      }
    });
  }, []);



  return (
    <main className="main__wrapper">



      <div className='header__section'>
        <h1>Logo Here</h1>
        <p>Write beautiful excerpts and share with <br /> loved ones!</p>
      </div>

      <section className='section__wrapper'>
        <div className='settings__cta_wrapper'>
          <div style={{ cursor: 'pointer' }} className='settings__prompt'>
            <FadersHorizontal onClick={() => setIsModal(!isModal)} size={32} color="#fff" weight="duotone" />
            <Modal setShowModal={setIsModal} showModal={isModal}>
              <SettingsModal
                setIsModal={setIsModal}
                sketchPickerColor={sketchPickerColor}
                blockPickerColor={blockPickerColor}
                setBlockPickerColor={setBlockPickerColor}
                setSketchPickerColor={setSketchPickerColor}
                setFontSize={setFontSize}
                setFontFamily={setFontFamily}
                setTheme={setTheme}
              />
            </Modal>
          </div>

        </div>


        <div
          className='inspi__write'
          style={{ backgroundColor: `rgba(${r},${g},${b},${a})` }}
        >

          <div style={{ background: theme }} className='inspi__write__content'>
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
              style={{ fontSize: fontSize, fontFamily: fontFamily, color: blockPickerColor }}
            >

              Hello
            </div>
          </div>
        </div>
        <button className='export__btn' style={{ marginTop: '-120px' }} onClick={onClick}>
          <Camera size={26} color="#fff" weight="duotone" />
        </button>
      </section>
      <a href="/privacy-policy">Privacy Policy</a>
    </main>
  )
}

export default Home
