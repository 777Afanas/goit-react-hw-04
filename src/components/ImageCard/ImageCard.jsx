import css from "./ImageCard.module.css";


export default function ImageCard({ item }) {
  return (
    <div className={css.img}>
      <img src={item.urls.small} alt={item.alt_description} />
    </div>
  );
}
