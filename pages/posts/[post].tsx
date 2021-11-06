import { NextPage } from "next";
import { client } from "../../lib/cms";

interface PostProps {
    data: any;
}


const Post: NextPage<PostProps> =({data}) =>{
    return(
        <div>
            <h1>{data.fields.heading}</h1>
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
    const data = await client
    .getEntry(params.post)
  .then((response: any) => response)
  .catch(console.error);

  console.log("data: ", data);

  
    return {
        props: {
            data}
    }
};

export default Post;