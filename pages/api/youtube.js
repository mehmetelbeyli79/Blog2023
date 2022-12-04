import YoutubeStats from "../components/YoutubeStats";
import { loadPosts } from "../lib/utils";
export const getStaticProps=async()=> {
  //const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;
  //const statisticsURL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCcQmwKW-RSC978EisXee39Q&key=AIzaSyBsSchHIxzUPJfIogRjkMYB561qgh8ptoQ`;
  //const uploadsURL = `https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=${YOUTUBE_CHANNEL_ID}&type=video&maxResults=100&key=${YOUTUBE_API_KEY}`;
  const res = await fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCcQmwKW-RSC978EisXee39Q&key=AIzaSyBsSchHIxzUPJfIogRjkMYB561qgh8ptoQ')
  const data = await res.json();
  return {
      props: {
        data: data,
      },
    };
}
export default function Videos({ data }) {
  console.log(data.items);
  return (
    <div>

      
    </div>
  );
}


