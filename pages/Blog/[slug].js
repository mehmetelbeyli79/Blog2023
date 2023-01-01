import React, { useEffect, useState } from "react";
import Head from "next/head";
import { allPosts } from "contentlayer/generated";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import { tr } from "date-fns/locale";
import { format, parseISO } from "date-fns";
import Link from "next/link";

function PostDetay({ post1 }) {
  // const router = useRouter();
  // const url = router.query.slug;
  // const post1 = allPosts.filter((p) => p.url === "/Blog/" + url);
  //console.log(post1);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <Head>
        <title>{post1[0].title}</title>
        <meta name="description" content={post1[0].title} />
        <meta name="keywords" content={post1[0].keywords} />
        <meta name="author" content="Mehmet Elbeyli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col my-16 w-full items-center">
        {post1
          ? post1.map((veri, index) => {
              return (
                <div className="flex-col lg:w-2/5 mx-3 lg:mx-0" key={index}>
                  <h2 className="mb-3 text-3xl">{veri.title || null}</h2>
                  <h2 className="mb-3 text-lg text-slate-400">
                    {veri.subtitle || null}
                  </h2>
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
            })
          : ""}
        <Link
          href="/Blog"
          className="text-start text-red-900 mb-5 bg-red-200 p-2 rounded-md"
        >
          Geri Dön
        </Link>
      </div>
    </div>
  );
}

export default PostDetay;
export async function getStaticPaths() {
  //const router = useRouter();
  //const url = router.query.slug;
  const paths = allPosts.map((post) => {
    return {
      params: {
        slug: post.url,
      },
    };
  });
  //console.log(paths);
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  //const router = useRouter();
  //console.log("Çalıştı");
  const url = "/Blog/" + params.slug;
  //console.log(url);
  const post1 = allPosts.filter((p) => p.url === url);
  //console.log(post1);
  return {
    props: {
      post1,
    },
  };
}
