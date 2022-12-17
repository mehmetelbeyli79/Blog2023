import { fetchData } from "./lib/yer_imleri";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { parseISO, formatDistanceToNowStrict } from "date-fns";
import { tr } from "date-fns/locale";
function Siteler({ data }) {
  const veri = data.items;
  
  return (
    <div className="flex flex-col justify-center items-center my-16">
      <h2 className="text-2xl mb-8">Link Havuzum</h2>
      <h2 className="text-lg mb-8">Son Eklenen 10 Yer İmi</h2>
      <div className="w-2/5">
        {veri.map((v) => {
          return (
            <Link href={v.link} target="_blank">
              <div className="flex mb-2">
                <img src={v.cover} className="w-32 h-32" />
                <div className="flex flex-col ml-4">
                  <p className="font-medium mb-2">{v.title}</p>
                  <p className="font-light mb-2">{v.excerpt.substring(0,150).concat("...")}</p>
                  <p className="font-light">Etiketler:{v.tags[0]}</p>
                  <p className="font-light">• {formatDistanceToNowStrict(parseISO(v.created), {
                    addSuffix: true,
                    locale: tr,
                  })}</p>
                </div>
              </div>
              <hr className="mb-6"/>
            </Link>
          );
        })}
        <Link  href="/Siteler" className="text-start text-red-900 mb-5 bg-red-200 p-2 rounded-md">
          Tüm Yer İmlerini Göster
        </Link>
      </div>
    </div>
  );
}
export default Siteler;

/** İstatistikler Youtube API tarafından çekiliyor. */

export const getStaticProps = async () => {
 
  const staticUrl=`https://api.raindrop.io/rest/v1/raindrops/0?perpage=10`
  const data = await fetchData(staticUrl);
  return {
    props: {
      data: data,
    },
  };
};
