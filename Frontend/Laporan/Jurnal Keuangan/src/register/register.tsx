import { createSignal, type Component } from "solid-js";
import "./register.css";

const App: Component = () => {
  const [imageUrl, setImageUrl] = createSignal("setImage");
  return (
    <div>
        <div class="kotak1">
        <div class="wb">
            <div class="erp">ERP Finance</div>
        <div class="inpt">
                      
          <p>Email</p>
          <input
            type="text"
            placeholder="Email"
            class="input input-bordered w-full max-w-xs"
          />
          <p>Username</p>
          <input
            type="text"
            placeholder="Username"
            class="input input-bordered w-full max-w-xs"
          />  

          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            class="input input-bordered w-full max-w-xs"
          />

          
        </div>

        <button class="btn w-64 rounded-full">Register</button>
      </div>
        </div>
      
    </div>
  );
};

export default App;
