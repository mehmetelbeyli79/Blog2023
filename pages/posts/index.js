import { useRouter } from 'next/router'

const Posts = () => {
  const router = useRouter()
  console.log(router.query);
  return <p>Tüm Postlar</p>
}

export default Posts

