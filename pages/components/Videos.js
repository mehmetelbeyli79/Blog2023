import Link from "next/link";
import React, { useState } from "react";

function Videos({ videos }) {
    
    const veri=Object.values(videos)[5];
  return (
    <div className="flex flex-wrap justify-center my-10">
      
        {
            veri.map((video,index)=>{
                return(
                    
                <div key={index} className="w-full max-w-sm lg:mr-5 mb-10 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <Link target="_blank" href={`https://youtu.be/${video.id.videoId}`}><img
                    className="object-cover w-full h-56"
                    src={video.snippet.thumbnails.medium.url}
                    alt="avatar"
                  /></Link>
        
                  <div className="py-5 text-center">
                    <a
                      href="#"
                      className="block text-lg font-bold text-gray-800 dark:text-white"
                      
                      role="link"
                    >
                      {video.snippet.title}
                    </a>
                    <span className="text-sm text-gray-700 dark:text-gray-200">
                     SOSYAL BİLİŞİM
                    </span>
                  </div>
                </div> )
              })
        }
      
    </div>
  );
}

export default Videos;
