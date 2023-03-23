import React from 'react';
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* container 1 for first row of images */}
        <div class='container'>
         <div class='img1'><img src="images/goat_small.jpg"/></div> 
         <div class='img2'><img src="images/EGA_Small.jpeg"/></div>
          <div class='img3'><img src="images/breading_Small.jpeg"/></div>
          </div>  
          {/* container 2 for second row of images */}
        <div class='conatainer2'>
          <div class='img4'> <img src="images/mem_Small.jpeg"/> </div>
          <div class='img5'> <img src="images/drawing_small.jpeg"/> </div>
      </div>
      </div>
    );
}

export default App;
