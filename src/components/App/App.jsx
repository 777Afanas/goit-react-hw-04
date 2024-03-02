import { useEffect } from "react";
import "../../../node_modules/modern-normalize/modern-normalize.css";
// import axios from "axios";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import css from './App.module.css';
import axios from "axios";

export default function App() {
  

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "<https://hn.algolia.com/api/v1/search?query=react>"
      );
      console.log(response);
    }
    fetchArticles();
  }, []);

  return (
    <div className={css.container}>
     <h1>Latest articles</h1>
    </div>
  );
}


