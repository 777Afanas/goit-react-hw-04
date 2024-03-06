
import css from "./ImageModal.module.css";
import Modal from "react-modal";


Modal.setAppElement("#root");
export default function ImageModal({ image, isOpen, onClose }) {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
    >
      <div className={css.wrapper}>
        {image && (
          <img
            className={css.image}
            src={image.urls.regular}
            alt={image.description}
            onClick={onClose}
          />
        )}
        {/* <p className={css.description}>{image.description}</p>
        <p className={css.text}>
          Author: <span className={css.span}>{image.user.name}</span>
        </p>
        <p className={css.text}>
          Likes: <span className={css.span}>{image.likes}</span>
        </p> */}
      </div>
    </Modal>
  );
}







// export const ImageModal = ({
//   isOpen,
//   onClose,
//   content: { description, urls, user, links },
// }) => {
//      Modal.setAppElement("#root");
//   const handleDownloadClick = () => {
//     window.open(links.download, "_blank");
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       className={css.modal}
//       overlayClassName={css.overlay}
//     >
//       {isOpen && (
//         <>
//           <img className={css.image} src={urls.regular} alt={description} />
//           <div className={css.title}>
//             <p>Author: {user.last_name}</p>
//             <button type="button" onClick={handleDownloadClick}>
//               download
//             </button>
//           </div>
//         </>
//       )}
//     </Modal>
//   );
// };