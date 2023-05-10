/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import './forgot/forgot.css';
import './login/login.css';
import './register/register.css';
import Rafi from './forgot/forgot';
import Rapi from './login/login';
import Rapii from './register/register';




const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}


render(() => <Rapii />, root!);
