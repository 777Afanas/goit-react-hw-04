import { useEffect, useState } from "react";
import "../../../node_modules/modern-normalize/modern-normalize.css"; 
import { fetchImages } from "../../image-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";  
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import css from "./App.module.css";
import ImageModal from "../ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";



export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false); 

  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

 

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImages(searchQuery, page);
        
        setImages((prevImages) => {
          return [...prevImages, ...data];           
        });
        
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, searchQuery]);

  const handleSearch = (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  function openModal(image) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

 
  // useEffect(() => {
  //   async function getImages() {
  //     const data = await fetchImages();
  //     setImages(data);
  //   }
  //   getImages();
  // }, []);

  return (
    
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      <div className={css.main}>
      {error && <ErrorMessage message={`Oops! Error! Reload!`} />}
      {images.length > 0 && <ImageGallery items={images} openModal={openModal} />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore}/>
      )}
      {isLoading && <Loader message={`Loading images...`} />}
      
      {selectedImage && (
        <ImageModal
          isOpen={isOpen}
          onClose={closeModal}
          image={selectedImage}
        />
        )}
         <Toaster position="top" />
      </div>
      </div>
  );

 
               
}
