import { PaintRoller, TextT, TextAa, SmileyWink, X } from 'phosphor-react'
import { SketchPicker } from "react-color";


interface IProps {
    sketchPickerColor: any,
    setIsModal: (val: boolean) => void;
    setSketchPickerColor: (val: {}) => void;
}

const SettingsModal = ({ sketchPickerColor, setIsModal, setSketchPickerColor }: IProps) => {
    const { r, g, b, a } = sketchPickerColor;

    return (
        <div className='settings__modal'>
            <div onClick={() => setIsModal(false)} className='close__modal'>
                <X size={18} color="#eeecec" weight="bold" />
            </div>
            <div className='settings__modal__content'>
                <div>
                    <div className='settings_option'>
                        <div
                            className='color__badge'
                            style={{ backgroundColor: `rgba(${r},${g},${b},${a})`, }}
                        ></div>
                        <h3>Color Picker</h3>
                    </div>
                    <SketchPicker
                        onChange={(color) => {
                            setSketchPickerColor(color.rgb);
                        }}
                        color={sketchPickerColor}
                    />
                </div>
                <div className='settings_option'>
                    <div><SmileyWink size={20} color="#fff" weight="duotone" /></div>
                    <h3>Mood</h3>
                </div>
                <div className='settings_option'>
                    <div><TextAa size={20} color="#fff" weight="duotone" /></div>
                    <h3>Font Size</h3>
                </div>
                <div className='settings_option'>
                    <div><TextT size={20} color="#fff" weight="duotone" /></div>
                    <h3>Fonts</h3>
                </div>
                <div className='settings_option'>
                    <div><PaintRoller size={20} color="#fff" weight="duotone" /></div>
                    <h3>Themes</h3>
                </div>
            </div>
        </div>
    )
}

export default SettingsModal