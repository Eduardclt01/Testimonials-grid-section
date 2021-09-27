import React from 'react';
import { AppContext } from "./AppContext.js";
import TestimonialGrid from './components/testimonialGrid/TestimonialGrid.js';

import './css/App.css'

function App() {
  const appContext = React.useContext(AppContext);

  return (
    <div className="App">
      <TestimonialGrid testimonials={appContext.state.testimonials}></TestimonialGrid>
    </div>
  );
}

export default App;
