import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field, FormikValues, FormikHelpers } from "formik";
import { FC } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    values.search !== ""
      ? onSearch(values.search)
      : toast.error("Please fill search field", { position: "top-right" });
    actions.resetForm();
  };
  const initialValues: FormikValues = { search: "" };
  return (
    <header className={css.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.header_form}>
          <Field
            className={css.header_form_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
          <button className={css.header_form_button} type="submit">
            Search
          </button>
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
};
export default SearchBar;
