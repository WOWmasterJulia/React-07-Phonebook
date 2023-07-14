import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFind } from './ContactFind/ContactFind';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import css from './App.module.css'

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <ContactFind />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <ContactList />
//     </div>
//   );
// };


// import { ContactForm } from "./ContactForm/ContactForm";
// import { ContactList } from './ContactList/ContactList';
// import { ContactFind } from './ContactFind/ContactFind';
// import css from './App.module.css'


// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllContacts } from "redux/operations";
// import { selectIsLoading, selectError } from "redux/selectors";

// export const App = () => {
//   const dispatch = useDispatch();
//   // Получаем части состояния
//   const { isLoading } = useSelector(selectIsLoading);
//   const { error } = useSelector(selectError);
//   // Вызываем операцию
//   useEffect(() => {
//     dispatch(fetchAllContacts());
//   }, [dispatch]);


// // export const App = () => {
return (
      <div>
        <h1 className={css.h1}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.h2}>Contacts</h2>
        <ContactFind />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList /> 
      </div>
    );
}