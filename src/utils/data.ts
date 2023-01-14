import { TextAlignLeft } from "phosphor-react";

const fontSizesData: { title: string; value: string }[] = [
    {
        title: 'default',
        value: '16px'
    },
    {
        title: 'small',
        value: '14px'
    },
    {
        title: 'medium',
        value: '18px'
    },
    {
        title: 'large',
        value: '24px'
    },
]

const fontFamiliesData: { title: string; value: string }[] = [
    {
        title: 'WorkSans',
        value: 'WorkSans-Regular'
    },
    {
        title: 'Grand Hotel',
        value: 'GrandHotel-Regular'
    },
    {
        title: 'Merienda',
        value: 'Merienda-Regular'
    }
]

const themesData: { title: string; value: string }[] = [
    {
        title: 'Default',
        value: '#000000'
    },
    {
        title: 'Lunda Tans',
        value: 'linear-gradient(to right, #5433ff, #20bdff, #a5fecb)'
    },
    {
        title: 'Royalins',
        value: 'linear-gradient(to right, #536976, #292e49)'
    },
    {
        title: 'Keys Special',
        value: 'url(https://thumbs.dreamstime.com/b/d-metal-brain-growing-light-bulb-standing-out-unlit-incandescent-bulbs-as-leadership-concept-41322341.jpg)'
    },
    {
        title: 'Med Arena',
        value: 'url(https://thumbs.dreamstime.com/b/portrait-caucasian-female-doctor-apple-human-brain-light-bulb-peach-background-copy-space-scribbles-world-249384004.jpg)'
    }
]


export {
    fontSizesData,
    fontFamiliesData,
    themesData,
}
