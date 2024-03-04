import css from "./ImageGallery.module.css"; 
import ImageCart from "../ImageCard/ImageCard";

export default function ImageGallery({ items }) {
  
	console.log(items);
	return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCart item={item}/>		  
        </li>
      ))}
    </ul>
  );
}
