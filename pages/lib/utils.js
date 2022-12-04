import axios from "axios";
export const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data= await res.json();/* Axios promise'den hep hata verdi.getstaticprops ile çalışmıyor... */
    return data;
  } catch (err) {
    console.log(err);
  }
};