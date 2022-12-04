
export default function YoutubeStats({ stats }) {
    const data=stats.items[0].statistics;
    return (
        <div className="mt-5 flex justify-center">
          <div className="px-4 w-1/3 py-5 mx-5 bg-gray-800 shadow rounded-md overflow-hidden sm:p-6">
            <dt className="font-medium text-cyan-300 truncate">Total Subscribers</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-200">{data.subscriberCount}</dd>
          </div>
  
          <div className="px-4 w-1/3 py-5 mx-5 bg-gray-800 shadow rounded-md overflow-hidden sm:p-6">
            <dt className="font-medium text-cyan-300 truncate">Total Views</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-200">{data.viewCount}</dd>
          </div>
  
          <div className="px-4 w-1/3 py-5 mx-5  bg-gray-800 shadow rounded-md overflow-hidden sm:p-6">
            <dt className="font-medium text-cyan-300 truncate">Videos Uploaded</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-200">{data.videoCount}</dd>
          </div>
        </div>
    );
  }