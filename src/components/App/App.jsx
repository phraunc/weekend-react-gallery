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
//i am passing this put function as a prop
  const likeGallery = (id) => {
    console.log(`In buyItem working on ID#:`, id);
    axios.put(`/gallery/like/${id}`)
    .then(response => {
        console.log(`Item ID: ${id} marks the likes`);
        fetchGalleryList()
    })
        .catch(err => {
            alert('error in PUT Route in buyItem');
            console.log(`error:`, err);
        })
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
   {/* like={likeGallery} is passing the function as a prop */}
<GalleryList list={galleryList} like={likeGallery}/>

      </div>
    );
}

export default App;
