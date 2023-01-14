import { useState, useCallback, lazy, useRef } from 'react';
import { useActive } from '../hooks/useActive'
import { handleCaptureClick } from '../utils/helpers';
import { Aperture, FadersHorizontal } from 'phosphor-react';
import confetti from 'canvas-confetti'
import Modal from '../components/Modal';
import SettingsModal from '../components/Modal/SettingsModal';
import Footer from '../components/Footer';
const Loader = lazy(() => import('../components/Loaders/Loader'))



function Home() {

  const writePadRef = useRef(null as any)
  const id = document.getElementById(writePadRef?.current?.id)
  const active = useActive(1000, id)
  const [isModal, setIsModal] = useState<boolean>(false)
  const [fontSize, setFontSize] = useState<string>('16px')
  const [fontFamily, setFontFamily] = useState<string>('WorkSans-Regular')
  const [theme, setTheme] = useState<string>('#00000')
  const [textAlign, setTextAlign] = useState<any>('center')
  const [sketchPickerColor, setSketchPickerColor] = useState<any>({ r: "65", g: "55", b: "55", a: "1", });
  const [blockPickerColor, setBlockPickerColor] = useState("#ffffff");
  const { r, g, b, a } = sketchPickerColor;

  const onClick = useCallback(() => {
    handleCaptureClick('.inspi__write')
    var audio = new Audio('/assets/shutter.wav');
    audio.play();
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
        <div className='logo__wrapper'>
          <img src="/assets/logo.png" alt="logo" />
        </div>
        <p className='sm:text-base text-sm'>Write beautiful excerpts and share with <br /> loved ones!</p>
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
                setTextAlign={setTextAlign}
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
              active ?
                <Loader /> :
                <div className='art__board_two'>
                  <div className='art__three'></div><div className='art__four'></div>
                </div>

            }

            <div
              spellCheck="true"
              ref={writePadRef}
              id={'writer'}
              placeholder='start typing...'
              contentEditable
              suppressContentEditableWarning={true}
              className='inspi__write__box'
              style={{
                fontSize: fontSize,
                fontFamily: fontFamily,
                color: blockPickerColor,
                textAlign: textAlign
              }}
            >
            </div>
          </div>
        </div>
        <button className='export__btn spin' style={{ marginTop: '-120px' }} onClick={onClick}>
          <Aperture size={36} color="#e2e2e2" weight="bold" />
        </button>
      </section>
      <Footer />
    </main>
  )
}

export default Home
