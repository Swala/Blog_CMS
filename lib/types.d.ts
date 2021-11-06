

export interface Post {
    fields: PostFields;
    metaData: MetaData;
    sys: Sys

}

export interface PostFields {
    heading: string;
    content: any;
    mainImage: ContentfulImage;
}

export  interface MetaData {
    tags: any[];

}

export  interface Sys{
    contentType: any;
    createdAt: string;
    environment: any;
    id: string;
    locale: string;
    revision: number;
    space: any;
    type: string;
    updatedAt: string;
}

export  interface ContentfulImage{
    fields: ImageFields;
    metaData: MetaData;
    sys: Sys;
}

export  interface ImageFields{
    description: string;
    file: {url: string; details: any; fileName: string; conentType: string;}
    title: string;
}