/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

// import './register/register.css'
// import Andre from './register/register';

import './jurnal/jurnal.css'
import Jurnal from './jurnal/jurnal';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => <App />, root!);
// render(() => <Andre />, root!);
render(() => <Jurnal />, root!);
