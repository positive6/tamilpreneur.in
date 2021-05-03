import { Container, SubContainer } from '../styles';

const Podcast = () => {
    return(
        <Container>
            <h1 style={{"font-size": "33px", 'color': 'rgb(138, 150, 158)'}}>Listen to our Podcasts</h1>
            <div className="content">        
                <SubContainer>
                    <h2>Coming Soon!</h2>
                </SubContainer>
                
            </div>
        </Container>
    )
}

export default Podcast;