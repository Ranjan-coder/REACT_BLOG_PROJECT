import './App.css';
import FooterCmp from './Compo/Route/FooterCmp';
import RouteCompo from './Compo/Route/RouteCompo';
import '@fortawesome/fontawesome-free/css/all.css';


function App() {
  return (
    <div className="App">
      <div id='siren'><span id='rotate'>The</span><span id='sirentext'>Siren</span></div>
      <RouteCompo/>
      <FooterCmp/>
    </div>
  );
}

export default App;
