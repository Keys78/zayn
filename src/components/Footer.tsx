import PoweredByVercel from 'powered-by-vercel'

const Footer = () => {
    return (
        <footer>
            <a href="#">
                <p>privacy policy</p>
            </a>
            <PoweredByVercel
                utmSource="my-source"
                target="_blank"
                rel="noopener noreferrer"
                svgProps={{
                    width: 150,
                }}
            />
        </footer>
    )
}

export default Footer