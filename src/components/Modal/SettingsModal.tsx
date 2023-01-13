import { PaintRoller, TextT, TextAa, SmileyWink, X, SmileySad, MaskHappy, MaskSad, SmileyXEyes, ArticleNyTimes, Upload, Camera } from 'phosphor-react'
import { useState } from 'react';
import { SketchPicker, BlockPicker } from "react-color";
import { fontFamiliesData, fontSizesData, themesData } from '../../utils/data';


interface IProps {
    sketchPickerColor: any,
    blockPickerColor: any,
    setIsModal: (val: boolean) => void;
    setSketchPickerColor: (val: {}) => void;
    setFontSize: (val: string) => void;
    setFontFamily: (val: string) => void;
    setBlockPickerColor: (val: string) => void;
    setTheme: (val: any) => void;
}



const SettingsModal = ({ sketchPickerColor, blockPickerColor, setIsModal, setSketchPickerColor, setFontSize, setFontFamily, setBlockPickerColor, setTheme }: IProps) => {
    const { r, g, b, a } = sketchPickerColor;
    const [activeOption, setActiveOption] = useState('0')

    const imageHandler = (e: any) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setTheme(`url(${reader.result})`)
            }
        }
        reader.readAsDataURL(e.target.files[0])

    };






    return (
        <div className='settings__modal'>
            <div onClick={() => setIsModal(false)} className='close__modal'>
                <X size={18} color="#eeecec" weight="bold" />
            </div>
            <div className='settings__modal__content'>
                <div className='relative'>
                    <div onClick={() => { activeOption !== '1' ? setActiveOption('1') : setActiveOption('0') }} className='settings_option'>
                        <div
                            className='color__badge'
                            style={{ backgroundColor: `rgba(${r},${g},${b},${a})`, }}
                        ></div>
                        <h3>Background Picker</h3>
                    </div>
                    <span className='absolute top-12 right-0 z-20'>
                        {
                            activeOption === '1' &&
                            <SketchPicker
                                onChange={(color) => {
                                    setSketchPickerColor(color.rgb);
                                }}
                                color={sketchPickerColor}
                            />
                        }
                    </span>
                </div>
                <div className='relative'>
                    <div onClick={() => { activeOption !== '2' ? setActiveOption('2') : setActiveOption('0') }} className='settings_option'>
                        <div>
                            <ArticleNyTimes size={20} color={blockPickerColor} weight="duotone" />
                        </div>
                        <h3>Text Color</h3>
                    </div>
                    <span className='absolute top-12 right-0 z-20'>
                        {
                            activeOption === '2' &&
                            <BlockPicker
                                color={blockPickerColor}
                                onChange={(color) => {
                                    setBlockPickerColor(color.hex);
                                }}
                            />
                        }
                    </span>
                </div>
                <div className='relative'>
                    <div onClick={() => activeOption !== '3' ? setActiveOption('3') : setActiveOption('0')} className='settings_option'>
                        <div><TextT size={20} color="#fff" weight="duotone" /></div>
                        <h3>Font</h3>
                    </div>
                    <span className='absolute top-12 right-0 z-20'>
                        {
                            activeOption === '3' &&
                            <article className='fontsize__modal'>
                                {fontFamiliesData.map((val: any, i: number) => (
                                    <div style={{ fontFamily: val.value }} className='capitalize' key={i} onClick={() => setFontFamily(val.value)}>{val.title}</div>
                                ))}
                            </article>
                        }
                    </span>
                </div>
                <div className='relative'>
                    <div onClick={() => activeOption !== '4' ? setActiveOption('4') : setActiveOption('0')} className='settings_option'>
                        <div><TextAa size={20} color="#fff" weight="duotone" /></div>
                        <h3>Font Size</h3>
                    </div>
                    <span className='absolute top-12 right-0 z-20'>
                        {
                            activeOption === '4' &&
                            <article className='fontsize__modal'>
                                {fontSizesData.map((val: any, i: number) => (
                                    <div className='capitalize' key={i} onClick={() => setFontSize(val.value)}>{val.title}</div>
                                ))}
                            </article>
                        }
                    </span>
                </div>
                <div className='relative'>
                    <div onClick={() => activeOption !== '5' ? setActiveOption('5') : setActiveOption('0')} className='settings_option'>
                        <div><PaintRoller size={20} color="#fff" weight="duotone" /></div>
                        <h3>Themes</h3>
                    </div>
                    <span className='absolute top-12 right-0 z-20'>
                        {
                            activeOption === '5' &&
                            <article className='fontsize__modal'>
                                {themesData.map((val: any, i: number) => (
                                    <div className='capitalize' key={i} onClick={() => setTheme(val.value)}>{val.title}</div>
                                ))}

                                <hr className='my-5' />

                                <span className='file'>
                                    <label htmlFor='input-file'>
                                        <div className='flex space-x-3'>
                                            <Upload size={20} color="#fff" weight="duotone" />
                                            <p>Upload Theme</p>
                                        </div>
                                    </label>
                                    <input id='input-file' accept="image/*" type='file' onChange={(e) => imageHandler(e)} />
                                </span>

                                <div className='flex space-x-3'>
                                    <Camera size={20} color="#fff" weight="duotone" />
                                    <p>Take Photo ~ <small><i>unavailable</i></small></p>
                                </div>

                            </article>
                        }
                    </span>
                </div>
                <div className='settings_option'>
                    <div className='dataflow-x'>
                        <div className='data-x'><SmileyWink size={20} color="#fff" weight="duotone" /></div>
                        <div className='data-x'><SmileySad size={20} color="#fff" weight="duotone" /></div>
                        <div className='data-x'><MaskHappy size={20} color="#fff" weight="duotone" /></div>
                        <div className='data-x'><SmileyXEyes size={20} color="#fff" weight="duotone" /></div>
                        <div className='data-x'><MaskSad size={20} color="#fff" weight="duotone" /></div>
                    </div>
                    <h3>Mood  ~  <small className='text-gray-500'><i>coming soon...</i></small></h3>
                </div>
            </div>
        </div>
    )
}

export default SettingsModal