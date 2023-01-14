import PoweredByVercel from 'powered-by-vercel'

const Footer = () => {
    return (
        <div className='flex items-center justify-between flex-col'>
            <a className='mb-6 mt-10' href="#">
                <p className='text-xs underline'>privacy policy</p>
            </a>
            <PoweredByVercel
                utmSource="my-source"
                target="_blank"
                rel="noopener noreferrer"
                svgProps={{
                    width: 150,
                }}
            />
        </div>
    )
}

export default Footer