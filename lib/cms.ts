import { createClient} from 'contentful';

export const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_API_KEY!,
  });

//client
//.getSpace()
//.then((space) => console.log(space))
//.catch(console.error)