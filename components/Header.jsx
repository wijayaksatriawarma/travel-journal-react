import GlobeIcon from '../images/globe.png'

export default function Header() {
    return (
        <header>
            <img src={GlobeIcon} alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}