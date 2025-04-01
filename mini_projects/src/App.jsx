import { useState } from 'react';

import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return <StarRating noOfStars={5}/>;
}

export default App;
