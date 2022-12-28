export const fetchData = async (url) => {
    try {
      const res = await fetch(url,{
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
            },
          });
      const data= await res.json();/* Axios promise'den hep hata verdi.getstaticprops ile çalışmıyor... */
      return data;
    } catch (err) {
      console.log(err);
    }
  };