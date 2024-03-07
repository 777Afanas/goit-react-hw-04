import css from "./ImageGallery.module.css"; 
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, openModal }) {
  
	console.log(items);
	return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          {/* <ImageCart item={item} onClick = {() => openModal(item)} />		   */}
        <ImageCard image={item} onClick = {() => openModal(item)} />		  
        </li>
      ))}
    </ul>
  );
}
