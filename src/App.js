import React, { Component } from 'react';
import Gallery from "./pages/Gallery";
import Signup from "./pages/Signup";
import Header from "./pages/Header";
import CreateBlocks from "./pages/CreateBlocks";
import SinglePost from "./pages/SinglePost";
import Misc from "./pages/Misc";

// import CreateBlocks from "./components/CreateBlocks";
import {BrowserRouter, Route} from 'react-router-dom';






class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

        <Header />

          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Gallery />
            </div>
          )}/>

<Route exact={true} path='/single' render={() => (
            <div className="App">
              <SinglePost />
            </div>
          )}/>

          <Route exact={true} path='/create' render={() => (
            <div className="App">
              <CreateBlocks />
            </div>
          )}/>

          <Route exact={true} path='/signup' render={() => (
            <div className="App">
              <Signup />
            </div>
          )}/>

<Route exact={true} path='/misc' render={() => (
            <div className="App">
              <Misc />
            </div>
          )}/>

        </div>
      </BrowserRouter>
    );
  }
}
export default App;


// function App() {
//   return (
//     <div>
      
//       <Header />
//       <Gallery />
     
  
//       <div className="collapse" id="boxes">
//         <div id='boxes-holder' className='card' data-spy="scroll"></div>
//     </div>
    


//     </div>
//   );
// }


// export default App;
