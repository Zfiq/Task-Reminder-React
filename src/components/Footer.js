import {Link} from 'react-router-dom' // To stop loading the page by using link instead <a> tag
const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2022</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
