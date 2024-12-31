import React from 'react'
import image1 from '../Assets/red-panda-1194504_1280.jpg'
import image2 from '../Assets/red-panda-1851661_1280.jpg'
import image3 from '../Assets/red-panda-1852860_1280.jpg'
import image4 from '../Assets/red-panda-3006441_1280.jpg'
import image5 from '../Assets/red-panda-3507877_1280.jpg'
import image6 from '../Assets/red-panda-3869111_1280.jpg'
import image7 from '../Assets/red-panda-4366264_1280.jpg'
import image8 from '../Assets/red-panda-6327749_1280.jpg'
import image9 from '../Assets/red-panda-7194670_1280.jpg'
import image10 from '../Assets/red-panda-8374737_1280.jpg'
import image11 from '../Assets/red-panda-7764725_1280.jpg'
import image12 from '../Assets/red-panda-1194504_1280.jpg'
const Gallery = () => {
  const images = [
    image1, image2, image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12
  ];

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  )
}

export default Gallery