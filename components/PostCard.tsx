import { Post } from '../lib/types';
import Image from 'next/image';

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    console.log(post);
    return (
    <div className="w-full border rounder-sm shadow-md p-8">
        <h3>{post.fields.heading}</h3>
        <div className="w-full">
            <Image 
            src={`https:${post.fields.mainImage.fields.file.url}`} 
            width={600}
            height={400}
            alt={post.fields.mainImage.fields.title}/>
        </div>
    </div>
    )}

export default PostCard;