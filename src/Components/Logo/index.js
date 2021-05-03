import { Container } from './style';
import logo from '../../img/logo.jpeg';

const Logo = () => {
    return(
        <Container>
            <img src={logo}/>
            <div className="content">
                <h1>WHERE PASSION MEETS EDUCATION</h1> 
                <h3>Building a community of full stack entrepreneurs!</h3>
            </div>
        </Container>
    )
}

export default Logo;