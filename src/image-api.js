import axios from "axios";


// const BASE_URL = "https://api.unsplash.com/photos";
const BASE_URL = "https://api.unsplash.com/search/photos";
const YOUR_ACCESS_KEY = "PpKOVlIU1jpiBUczpFv1FRZZ7i0l26nYmGB7MUvg5cg";


export const fetchImages = async (query) => {

    const url = `${BASE_URL}/?client_id=${YOUR_ACCESS_KEY}`;
    const options = {
      headers: {
        "Accept-Version": "v1",
      },
    };
    const response = await axios.get(url, options); 
    return response.data;


}