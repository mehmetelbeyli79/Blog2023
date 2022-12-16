import React from "react";
import Head from "next/head";
import { allPosts } from "contentlayer/generated";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import { tr } from "date-fns/locale";
import { format, parseISO } from "date-fns";
function PostDetay() {
  const router = useRouter();
  const url = router.query.pid;
  //console.log(allPosts[0].url)
  const post = allPosts.filter((p) => p.url === "/posts/" + url);
  console.log(post);
  return (
    <div>
      <Head>
        <title>{post[0].title}</title>
        <meta name="description" content={post[0].title} />
        <meta name="keywords" content={post[0].keywords} />
        <meta name="author" content="Mehmet Elbeyli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col my-16 w-full items-center justify-center">
        {post.map((veri,index) => {
          return (
            <div className="flex-col lg:w-2/5 mx-3 lg:mx-0" key={index}>
              <h2 className="mb-3 text-3xl">{veri.title}</h2>
              <h2 className="mb-3 text-lg text-slate-400">{veri.subtitle}</h2>
              <h2 className="mb-3 text-lg text-slate-300">
                {format(parseISO(veri.date), "d LLLL yyyy", {
                  locale: tr,
                })}
              </h2>
              <p className=" leading-8 tracking-normal">
                {parse(veri.body.html)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostDetay;
