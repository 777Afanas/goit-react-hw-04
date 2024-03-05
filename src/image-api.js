import axios from "axios";


axios.defaults.baseURL = "https://api.unsplash.com/search"; 
const YOUR_ACCESS_KEY = "PpKOVlIU1jpiBUczpFv1FRZZ7i0l26nYmGB7MUvg5cg"; 
// https://api.unsplash.com/search/photos?page=1&query=office&client_id=YOUR_ACCESS_KEY

export const fetchImages = async (searchQuery, page) => { 
 
  const response = await axios.get("/photos", {
    params: {
      page,
      per_page: 12,
      query: searchQuery, 
      client_id: YOUR_ACCESS_KEY,
      }
  });  
  
    return response.data.results; 
}

















// // axios.defaults.baseURL = 
// // const BASE_URL = "https://api.unsplash.com/photos";  GTHTLKFNM
// const BASE_URL = "https://api.unsplash.com/search/photos";
// const YOUR_ACCESS_KEY = "PpKOVlIU1jpiBUczpFv1FRZZ7i0l26nYmGB7MUvg5cg";

// // https://api.unsplash.com/search/photos?page=1&query=office&client_id=YOUR_ACCESS_KEY

// export const fetchImages = async (query) => {

//   // const url = `${BASE_URL}?page=1&query=office&client_id=${YOUR_ACCESS_KEY}`;
//   const url = `${BASE_URL}?page=1&query=${query}&client_id=${YOUR_ACCESS_KEY}`;
   
//   const options = {
//       headers: {
//         "Accept-Version": "v1",
//       },
//     };
//   const response = await axios.get(url, options); 
    
//     return response.data.results; 
// }
