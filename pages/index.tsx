import type { NextPage } from 'next'
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
    <div className="grid grid-cols-3 gap-6 w-screen">
      {data.map((post) => (
      <PostCard key={post.sys.id} post={post}>
        {post.fields.heading}
      </PostCard>
      ))}
    
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
