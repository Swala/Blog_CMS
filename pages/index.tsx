import type { NextPage } from 'next'
import Link from "next/link";
import { client } from '../lib/cms'
import styles from '../styles/Home.module.css'
import {Post} from '../lib/types'
import { Entry } from 'contentful';
import PostCard from '../components/PostCard';

interface HomeProps {
  data: Post[];
}

const Home: NextPage<HomeProps> = ({ data }) => {
  
  console.log(data);

  return (
    
    <div className="flex flex-col h-screen justify-center gap-8">
    <h1 className="text-center text-7xl">
      Welcome To CMS</h1>
    <div className="w-full grid grid-cols-3 gap-6">
      
      {data.map((post) => (
        <Link key={post.sys.id} href={`/posts/${post.sys.id}`}>
          <a>
          <PostCard  post={post}>
            {post.fields.heading}
          </PostCard>
      </a>
      </Link>
      ))}
    
    </div>
    </div>
  )
};

export const getStaticProps=async()=>{
  const data = await client
  .getEntries({
    content_type: "blogPost",
  })
  .then((response) => response.items)
  .catch(console.error)

  return {props: {data}}

}

export default Home;
