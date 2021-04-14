import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Views/Home';
import Blog from './Views/Blog';
import Podcast from './Views/Podcast';
import Contacts from './Views/Contacts';

const App = () => {

  return(
    <main>
      <BrowserRouter>
        <Switch>
          <Route path ='/' component={Home} exact/>
          <Route path='/blog' component={Blog}/>
          <Route path='/podcast' component={Podcast}/>
          <Route path='/contacts' component={Contacts}/>
        </Switch>
      </BrowserRouter>
    </main>
  )
}

export default App;