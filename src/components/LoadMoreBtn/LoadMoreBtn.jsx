import css from "./LoadMoreBtn"

export default function LoadMoreBtn({onClick}) {
    return (
        <button className={css.button} onClick={onClick}>Load more</button>
    );
}