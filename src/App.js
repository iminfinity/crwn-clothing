import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';

const Hatspage = () => (
  <h1>Hats page</h1>
)

function App() {
  return (
    <div>
      <Switch>
      <Route  exact path='/' component={HomePage}/>
      <Route  exact path='/hats' component={Hatspage} />
      </Switch>

    </div>
  );
}

export default App;
