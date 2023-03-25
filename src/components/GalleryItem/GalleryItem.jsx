import { useState } from 'react';

function GalleryItem({list, like}){
console.log('in the GalleryItem function')

const [toggleSwitch, setToggleSwitch] = useState(true);

const toggleImage = () => {
    setToggleSwitch(!toggleSwitch)
}

return (

<>

<div className='galleryItems' key={list.id}>

    {
        toggleSwitch ? 
        <img src={list.path} width="100px" height="100px" object-fit='cover' display='inline-block' onClick={()=> toggleImage()}/> :
        <p onClick={()=> toggleImage()}>{list.description}</p>
    }
         
          <p>{list.title}</p>
          <button onClick={()=> like(list.id)}>Meh</button>
          <p>{list.likes} people thought this was, aight....</p>
        </div>
</>
)
}


export default GalleryItem;