'use client';
import { useRouter } from 'next/navigation';
import Videos from "../components/Videos";
import YoutubeStats from "../components/YoutubeStats";
import { fetchData } from "../lib/utils";
export default function Egitimler({ data,videos }) {
  return (
    <div className="my-16">
      
      <YoutubeStats stats={data} />
      <h2 className="text-center mt-10 text-3xl">En Son Yayınlanan Videolar</h2>
      <Videos videos={videos}/>
    </div>
  );
}

/** İstatistikler Youtube API tarafından çekiliyor. */
export const getStaticProps = async () => {
  const router = useRouter();
  router.refresh();
  const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;
  const statisticsURL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
  const videosURL=`https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=${YOUTUBE_CHANNEL_ID}&type=video&maxResults=10&order=date&key=${YOUTUBE_API_KEY}`
  const data = await fetchData(statisticsURL);
  const videos=await fetchData(videosURL);
  return {
    props: {
      data: data,
      videos:videos,
    },
  };
};

