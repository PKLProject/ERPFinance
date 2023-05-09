import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
  <div>
    <div class='kotak'>
    <div class='erp'>ERP Finance</div>
    <div class='abcd'>
        <p>Email</p>
        <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
        <div>
        <p>Username</p>
        <input type="username" placeholder="Username" class="input input-bordered w-full max-w-xs" />
        <div>
        <p>New Password</p>
        <input type="password" placeholder="New Password" class="input input-bordered w-full max-w-xs" />
        </div>
        <p>Confirm Password</p>
        <input type="password" placeholder="Confirm Password" class="input input-bordered w-full max-w-xs" />
        </div>

      <div>
      <button class="btn">Submit</button>
      </div>
   
    </div>
    </div>
    </div>
  );
};

export default App;
