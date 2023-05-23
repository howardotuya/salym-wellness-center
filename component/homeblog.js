import Link from "next/link";
import ContentfulImage from "./ui/contentfulImage";

export default function HBPostData({ post }) {
  return (
    <>
      <div class="slidx lg:px-6">
        <div class="bic flex gap-4 lg:gap-6 flex-col p-4 lg:py-8 lg:px-6">
          <div class="flex items-end object-cover h-56 w-full   rounded-2xl overflow-hidden">
            <ContentfulImage
              alt={`Cover Image `}
              src={post.fields.image.fields.file.url}
              width={post.fields.image.fields.file.details.image.width}
              height={post.fields.image.fields.file.details.image.height}
            />
          </div>
          <Link
            href={"/blog/" + post.fields.slug}
            class="H5 hover:underline hover:text-green-900 hidden lg:block whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {post.fields.title}
          </Link>

          <Link
            href={"/blog/" + post.fields.slug}
            class="H6 hover:underline hover:text-green-900 lg:hidden block whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {post.fields.title}
          </Link>

          <div class="B4 hidden lg:block black7">
            <div class="ctrr">{post.fields.excerpt}</div>
          </div>
          <div class="B5 lg:hidden block black7 ">
            <div class="ctrr">{post.fields.excerpt}</div>
          </div>
          <div class="flex justify-between items-center">
            <span class="grn-10 grn-60 H6 hidden lg:block py-2 px-4  rounded-2xl ">
              {post.fields.category}
            </span>
            <span class=" lg:hidden block grn-10 grn-60 subH py-2 px-4  rounded-2xl">
              {post.fields.category}
            </span>
            <p class="H6 hidden lg:block">
              {" "}
              {post.fields.minutesRead} mins read
            </p>
            <p class="subH lg:hidden block">
              {" "}
              {post.fields.minutesRead} mins read
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
