import React from 'react';
import GalleryItems from '../GalleryItem/GalleryItem'


// i am giving myself access to the put function
//with the 'like' as a prop
// see the comments in the app.jsx where it starts this ish'
function GalleryList({list, like}) {
  console.log('Pulling the gallery list', list);

  return (
    <div className='gallery'>
      {list.map((list) => (
        
        <GalleryItems list={list} like={like}/>
      ))}
    </div>
  );
}

export default GalleryList;
