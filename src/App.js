import React, { useState, useEffect } from 'react';
import './App.css';
import FooterCmp from './Compo/Route/FooterCmp';
import RouteCompo from './Compo/Route/RouteCompo';
import '@fortawesome/fontawesome-free/css/all.css';
// import './style.css'
import GradientBufferBar from './Compo/Route/BufferGradient';


function App() {

  // this functionality only for buffergradient 
  // __________________________________________
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading for demonstration purposes
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a 3-second loading period
    
    return () => clearTimeout(timeout);
  }, []);
  // __________________________________________


  return (
    <div className="App">
      <GradientBufferBar isLoading={isLoading} />
      <div id='siren'><span id='rotate'>The</span><span id='sirentext'>Siren</span></div>
      <RouteCompo/>
      <FooterCmp/>
    </div>
  );
}

export default App;
