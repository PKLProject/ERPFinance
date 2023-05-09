import { createSignal, type Component } from 'solid-js';
import imageSrc from '../assets/gmbr.png'
import imagesrc from '../assets/erp.png'
import imagesrcc from '../assets/org.png'
import imagessrc from '../assets/user.png'
import immagesrc from '../assets/kunci.png'

import logo from './logo.svg';
import styles from './App.module.css';
import { login } from '../Service/service';


const App: Component = () => {
    const [image, SetImage] = createSignal(imageSrc);
    const [imagee, SetImagee] = createSignal(imagesrc);
    const [imaage, SetImaage] = createSignal(imagesrcc);
    const [iimage, SetIimage] = createSignal(imagessrc);
    const [images, SetImages] = createSignal(immagesrc);
    const [inputValue, setInputValue] = createSignal();
    const [inputValue1, setInputValue1] = createSignal();

    const hasil = async() =>{
        console.log('username ->',inputValue())
        console.log('password ->',inputValue1())
        login({'username':inputValue(),'password':inputValue1()}).then((data : any) =>{
            console.log('result-login ->',data);
          });
    };


  return (

  <div>
    <div class='persegi'>
    <div class='xs'></div>
    <img src={image()} alt="Alternative Text" class= "ya" elementtiming={''} fetchpriority={'high'}  />
    <img src={imagee()} alt="Alternative Text" class= "apa" elementtiming={''} fetchpriority={'high'}  />
    <img src={imaage()} alt="Alternative Text" class= "ok" elementtiming={''} fetchpriority={'high'}  />

    <div class='efg'>
        <p>Already have an account?</p>
        <input type="username" placeholder="         Username" class="input input-bordered w-full max-w-xs" onChange={(e=>{setInputValue(e.target.value)})}/>
        <img src={iimage()} alt="Alternative Text" class= "ta" elementtiming={''} fetchpriority={'high'}  />
        <div>
        <input type="password" placeholder="         Password" class="input input-bordered w-full max-w-xs"  onChange={(f=>{setInputValue1(f.target.value)})}/>
        <img src={images()} alt="Alternative Text" class= "ba" elementtiming={''} fetchpriority={'high'}  />
        <p id='fgt'>Forgot password?</p>
        </div>

      <div>
      <button class="btn btn-wide msk"onclick={hasil}>Log in</button>
      </div>
   
    </div>
    </div>
    </div>
  );
};

export default App;
