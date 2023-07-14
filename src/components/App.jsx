import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { ContactFind } from './ContactFind/ContactFind';
import css from './App.module.css'
export const App = () => {

return (
      <div>
        <h1 className={css.h1}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.h2}>Contacts</h2>
        <ContactFind />
        <ContactList /> 
      </div>
    );
}




// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
