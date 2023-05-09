
import { createSignal } from "solid-js";
import { api } from "../API/api";

const login = async (body_params: any) => {
    const [data,setData] = createSignal();
    const [error,setError] = createSignal();
    const url = 'http://192.168.1.32:9001/login';
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body_params),
    }).then((res) => res.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => {
      setError(err);
      console.log(err);
    });
  return data();
};

export {login};

