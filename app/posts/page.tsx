import HandleData from "../components/Posts/HandleData";

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

interface Iposts {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export default async function Posts() {
  const response = await fetch(baseUrl, {
    cache: "no-store"
  });
  const posts: Iposts[] = await response.json();

  return (
    <>
      <div className="min-h-screen flex">
        <div className="my-auto w-full px-24 pt-48">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Posts</span> page.</h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Posts list.</p>
          <HandleData posts={posts}/>
        </div>
      </div>
    </>
  )
}
