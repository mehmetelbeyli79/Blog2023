import Videos from "./api/youtube";
import YoutubeStats from "./components/YoutubeStats";
import { fetchData } from "./lib/utils";
export default function Egitimler({data}) {
  return (
      <div>
        <YoutubeStats stats={data}/>
      </div>
  );
}
export const getStaticProps=async()=> {
  const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;
  const statisticsURL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
  const data=await fetchData(statisticsURL);
  return {
      props: {
        data: data,
      },
    };
}
