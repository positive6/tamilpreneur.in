import Header from '../Components/Header';
import Footer from '../Components/Footer';
import BlogPage from '../Components/BlogPage';

const Blogpage = props => {
    return (
      <div className="App">
         <Header/>
         <BlogPage heading={props.heading} subtext={props.subtext}
         footnote={props.footnote} content={props.content} content1={props.content1} content2={props.content2}
         content3={props.content3} content4={props.content4} content5={props.content5}
         content6={props.content6} content7={props.content7} content8={props.content8}/>
         <Footer/>
      </div>
    );
  }
 
export default Blogpage