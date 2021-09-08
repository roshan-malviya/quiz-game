import './App.css';
import Intro from './component/Intro';
import Quest2 from './component/Ques2';
import  Ques1  from './component/Ques1';
import  History  from './component/History';
import { Landing } from './component/Landing';
import { Navbar } from './component/Navbar';
import Summary from './component/Summary';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (

    <Provider store={store}>

    <Router>

      <>
        <Navbar />
        <section>
          <Route exact path="/" component={Landing} />

          <Switch>

            <Route exact path="/intro" component={Intro} />
            <Route exact path="/q1" component={Ques1} />
            <Route exact path="/q2" component={Quest2} />
            <Route exact path="/history" component={History} />
            <Route exact path="/summary" component={Summary} />
            

          </Switch>
        </section>

      </>
    </Router>
    </Provider>

  );
}

export default App;
