import { NextPage } from "next";
import { client } from "../../lib/cms";
import { Post } from "../../lib/types";
import PostCard from "../../components/PostCard";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


interface PostProps {
    post: Post;
}

const Post: NextPage<PostProps> =({ post }) =>{
    const Content = documentToReactComponents(post.fields.content);
    
    return(
        <div>
            <PostCard post={post} />
            {documentToReactComponents(post.fields.content)}
        </div>
    );
};

export const getStaticPaths = async () => {
    const data = await client
  .getEntries({
    content_type: "blogPost",
  })
  .then((response: any) => response.items)
  .catch(console.error)

  const paths = data.map((post: any) => ({
      params: {
          post: post.sys.id,
      },
    }));

    return {paths, fallback: false};
};

export const getStaticProps = async ({params}: {params:any}) => { //type objects

    console.log(params);
    const post = await client
    .getEntry(params.post)
  .then((response: any) => response)
  .catch(console.error);

  console.log("data: ", post);

  
    return {
        props: {
            post}
    }
};

export default Post;