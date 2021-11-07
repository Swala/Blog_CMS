import { Post } from '../lib/types';

import Image from 'next/image';

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    console.log(post);
    return (
    <div className="flex flex-col items-center justify-between w-full border rounder-md shadow-md px-8 pb-8 text-center hover:bg-gray-100">
        <h3 className="text-3xl p-4">{post.fields.heading}</h3>
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