import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryItem from '../GalleryItem/GalleryItem';


function App() {

  //The state for GalleryList
  let [galleryList, SetGalleryList] = useState([]);

//Gets the information from my GalleryList component.
  const fetchGalleryList = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then( (response) => {
        console.log('Entire response:', response);
        // The actual array comes from the data attribute on the response
        console.log('Just the data:', response.data);

        // Set data into component state
        SetGalleryList(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  } 




  useEffect( () => {
    fetchGalleryList();
  }, [])

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* container 1 for first row of images */}
<GalleryList list={galleryList}/>
        {/* <div class='container'>
         <div class='img1'><img src="images/goat_small.jpg"/></div> 
         <div class='img2'><img src="images/EGA_Small.jpeg"/></div>
          <div class='img3'><img src="images/breading_Small.jpeg"/></div>
          </div>  
          {/* container 2 for second row of images */}
        {/* <div class='conatainer2'>
          <div class='img4'> <img src="images/mem_Small.jpeg"/> </div>
          <div class='img5'> <img src="images/drawing_small.jpeg"/> </div>
          <div class='img6'> <img src="images/pizzadog_Small.jpeg"/> </div>
      </div> */} 
      </div>
    );
}

export default App;
