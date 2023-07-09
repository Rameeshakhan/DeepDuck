import React from 'react'
import deepDuck from "../assets/images/deepDuck.png"
import Navbar from '../components/Navbar2'
import image from "../assets/images/GalleryNoContent.png"

const Gallery = () => {

    const option={
        margin: "05px 10px"
    }

    const media={
        background:"#1F1F1F",
        padding:'20px',
        borderRadius: "10px",
        height: "300px",
        width: "100%",
        marginBottom: "20px",
        display: "flex",
        justifyContent:'center',
        alignItem:"center"
    }
  return (
    <div
    style={{
        background:"black",
        height: "633px"
    }}
    >
        <Navbar
        deepDuckImage={deepDuck}
        optionColor="#888888"
      />

      <div style={{
        margin: "30px",
        fontFamily:"Raleway",
        color:"white"
      }}>
<h1>My Gallery</h1>

<p>
    <span style={option}> Images</span>
    <span style={option}>Video</span>
    <span style={option}> Gifs</span>
    </p>

    <div style={media}>
<img src={image}/>
    </div>
      </div>
    </div>
  )
}

export default Gallery
