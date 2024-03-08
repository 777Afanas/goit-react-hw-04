import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast"; 
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
       
         if (!values.query) {
           toast.error("Please enter a search query", 
           );
           return;
        }
         onSearch(values.query);
        actions.resetForm();
      }}
    >
      <header className={css.box}>
        <Form className={css.searchForm}>
          <Field
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          /> 
           <ErrorMessage
            name="query"
            component="span"
            style={{ color: "green" }}
          />
          <button  type="submit">Search</button>
        </Form>
      </header>
    </Formik>
  );
}
