export const noktaGosterim=(deger)=>{
    if(deger.length>3 && deger.length<7){
        const str=deger.slice(1,4);
        console.log(str);
        const tam=deger[0].concat(".",str);
        return tam;
    }
    else if(deger.length>=7)
    {
      const str1=deger.slice(1,4);
      const str2=deger.slice(4,7);
      const tam=deger[0].concat(".",str1).concat(".",str2);
      return tam;
    }
    else{
        return deger;
    }
}