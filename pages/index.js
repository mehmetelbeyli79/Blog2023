import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mehmet Elbeyli Blog</title>
        <meta name="description" content="Mehmet Elbeyli Blog Sayfası" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col md:flex-row p-12 my-16">
          <div className="flex-auto md:w-32">
            <h2 className="text-2xl font-semibold mb-3">Merhaba,Ben Mehmet</h2>
            <p className="text-gray-600 text-lg mb-4">Yazılım ile uğraşmayı seviyorum.</p>
            <p className="text-gray-600 text-lg leading-12">
              Şu anda bildiklerimi paylaşmak ve pekiştirmek için youtube için
              içerik üretiyorum.En temel düzeyden ileri düzeye anlattığım konulara göz atabilirsiniz.
            </p>
            <p className="font-bold text-2xl my-6">Çalıştığım Yazılımlar</p>
            <div className="flex flex-wrap">
              <span className=" text-amber-600 bg-amber-200 skills">
                HTML
              </span>
              <span className="text-pink-600 bg-pink-200 skills">
                CSS
              </span>
              <span className="text-green-600 bg-green-200 skills">
                Javascript
              </span>
              <span className="text-blue-600 bg-blue-200 skills">
                React
              </span>
              <span className="text-indigo-600 bg-indigo-200 skills">
                Bootstrap
              </span>
              <span className="text-sky-600 bg-sky-200 skills">
                Tailwind
              </span>
              <span className="text-lime-600 bg-lime-200 skills">
                Firebase
              </span>
              <span className="text-slate-600 bg-slate-200 skills">
                PHP
              </span>
              <span className="text-purple-600 bg-purple-200 skills">
                C#
              </span>
              <span className="text-orange-600 bg-orange-200 skills">
                MYSQL
              </span>
            </div>
          </div>
          <div className="flex-auto mt-12  md:w-32 md:mt-0">
            <Image src="/deneme.jpg" width={500} height={500} alt="Mehmet Elbeyli Blog" className="rounded-md md:ml-4" />
          </div>
        </div>
      </main>
    </div>
  );
}
