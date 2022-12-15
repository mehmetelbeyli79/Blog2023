import React from "react";
import { allPosts } from "contentlayer/generated";
import { useRouter } from "next/router";
import parse from "html-react-parser";

function PostDetay() {
  const router = useRouter();
  const url = router.query.pid;
  //console.log(allPosts[0].url)
  const post = allPosts.filter((p) => p.url === "/posts/" + url);
    console.log(post);
  return (
    <div className="flex flex-col my-16 w-full items-center justify-center">
      {post.map((veri) => {
        return (
          <div className="flex-col lg:w-2/5 mx-3 lg:mx-0">
            <h2 className="text-center mb-3 text-2xl">{veri.title}</h2>
            <h2 className="text-center mb-3 text-lg">{veri.subtitle}</h2>
            <p className="text-justify">{parse(veri.body.html)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PostDetay;
