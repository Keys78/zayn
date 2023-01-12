import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

const handleCaptureClick = async (className: string) => {
    const quoteBox =
        document.querySelector<HTMLElement>(`${className}`);
    if (!quoteBox) return;

    const canvas = await html2canvas(quoteBox);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
};


export {
    handleCaptureClick,
}