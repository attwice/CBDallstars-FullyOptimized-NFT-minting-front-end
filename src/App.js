import './App.css';
import { Fragment } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Story from './components/Story';
import Cbd from './components/Cbd';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Faq from './components/Faq';
import Join from './components/Join';
import Mint from './components/Mint';

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Story />
      <Cbd />
      <Roadmap />
      <Faq />      
      <Join />
      <Mint />
      <Team />
    </Fragment>
  );
}

export default App;
