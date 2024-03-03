import { useEffect, useState } from "react";
import "../../../node_modules/modern-normalize/modern-normalize.css";
// import axios from "axios";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import css from './App.module.css';
// import axios from "axios";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import { fetchImages } from "../../image-api";




export default function App() {

  const [images, setImages] = useState([]); 
  
  const handleSearch = async (newQuery) => { 
    // console.log(newQuery);
    const data = await fetchImages();
      setImages(data);
  }; 

  useEffect(() => {
    async function getImages() {            
      const data = await fetchImages();
      setImages(data);      
    }         
    getImages(); 
  }, []);

  return (     
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
}


