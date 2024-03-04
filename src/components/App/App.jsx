import { useEffect, useState } from "react";
import "../../../node_modules/modern-normalize/modern-normalize.css";
import css from "./App.module.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import { fetchImages } from "../../image-api";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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
      {error && <b>Oops! Error! Reload!</b>}
      {images.length > 0 && <ImageGallery items={images} />}
      {images.length > 0 && !isLoading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
      {isLoading && (
        <p>
          <b>Loading images...</b>
        </p>
      )}
    </div>
  );
}
