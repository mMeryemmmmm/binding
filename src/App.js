import React, { Component } from 'react';
import List from './List'
import Soso from './soso'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Comparaison from './Comparaison';
import Classification  from './Classification';


import Prediction from './Prediction';

class App extends Component {
  
  render () {
    
    return (
      
      <Router>
        <div className="App"style={{height: '800px',backgroundSize: "cover",backgroundImage: `url(${"https://www.microsoft.com/en-us/research/uploads/prod/2018/11/NIPS_Minimizing-Trial-And-Error-In-The-Drug-Discovery-Process_DL_Site_11_2018_1400x788-1024x576.png"})`} } >
        <div className="container">
          <Route exact path="/" component={List} />
            <Route exact path="/Comparaison" component={Comparaison} />
            <Route exact path="/Classification" component={List} />
            <Route exact path="/Prediction" component={Prediction} />
          </div>
         
        </div>
      </Router>
    );
  }
}

export default App;
