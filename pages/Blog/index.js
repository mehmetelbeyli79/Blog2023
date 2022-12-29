import Head from 'next/head'
import Link from 'next/link'
import { tr } from "date-fns/locale";
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

function PostCard(post) {
  return (
    <div className="mb-6 lg:mx-0 mx-3 ">
      
      <h2 className="text-lg">
        <Link className="text-blue-700 hover:text-blue-900 font-bold" href={post.url}>
          {post.title}
        </Link>
      </h2>
      <h2 className='text-slate-500 '>{post.subtitle}</h2>
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), 'd LLLL yyyy',{
          locale:tr,
        })}
      </time>
    </div>
  )
}

export default function Home({ posts }) {
  return (
    <div className="mx-auto max-w-2xl py-16 ">
      <Head>
        <title>Yazılar ve Notlarım</title>
      </Head>

      <h1 className="mb-16 text-3xl font-bold text-center">Yazılar ve Notlarım</h1>
      <div className='mb-20'>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
      </div>
    </div>
  )
}