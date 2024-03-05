import { Formik, Form, Field } from "formik";

import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
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
          <button  type="submit">Search</button>
        </Form>
      </header>
    </Formik>
  );
}
