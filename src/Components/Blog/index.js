import { Container, SubContainer } from '../styles';

const Blog = () => {
    return(
        <Container>
            <h1 style={{"font-size": "33px", 'color': 'rgb(138, 150, 158)'}}>Read Entrepreneurship Articles</h1>
            <div className="content">        
                <SubContainer>
                    <h2>Posts Coming Soon!</h2>
                </SubContainer>
                
            </div>
        </Container>
    )
}

export default Blog;