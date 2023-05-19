"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import LinesEllipsis from 'react-lines-ellipsis';
import ContentfulImage from "@/component/ui/contentfulImage";

function PostData({ post }) {
  return (
    <>
      <div class="bic blogp flex gap-4 lg:gap-6 flex-col p-4 lg:py-8 lg:px-6">
        <div class="lg:h-64 flex items-end object-cover h-52 w-full rounded-2xl overflow-hidden">
          <ContentfulImage
            alt={`Cover Image `}
            src={post.fields.image.fields.file.url}
            width={post.fields.image.fields.file.details.image.width}
            height={post.fields.image.fields.file.details.image.height}
          />
        </div>
        <Link
          href={'/posts/' + post.fields.slur}
          class="H5 hover:underline hover:text-green-900 hidden lg:block whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {post.fields.title}
        </Link>

        <Link
          href={'/posts/' + post.fields.slur}
          class="H6 hover:underline hover:text-green-900 lg:hidden block whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {post.fields.title}
        </Link>

        <div class="B4 hidden lg:block black7 max-w-2xl">
          <LinesEllipsis
            text={post.fields.excerpt}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
        <div class="B5 lg:hidden block black7 max-w-2xl ">
          <LinesEllipsis
            text={post.fields.excerpt}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
        <div class="flex justify-between items-center">
          <span class="grn-10 grn-60 H6 hidden lg:block py-2 px-4 rounded-full ">
            {post.fields.category}
          </span>
          <span class=" lg:hidden block grn-10 grn-60 subH py-2 px-4 rounded-full">
            {post.fields.category}
          </span>
          <p class="H6 hidden lg:block"> {post.fields.minutesRead} mins read</p>
          <p class="subH lg:hidden block"> {post.fields.minutesRead} mins read</p>
        </div>
      </div>
    </>
  );
}
 
export default PostData;
