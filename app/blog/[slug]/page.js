"use client";
import ReDate from "@/component/formatDate";
import { client } from "../../../contentful/client";
import ContentfulImage from "@/component/ui/contentfulImage";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logoLarge.png";
import RichText from "@/component/RichText";

const popuphandler = () => {
  const popup = document.querySelector(".bg-grn-60");

  if (popup.style.display == "none") {
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }
};

export async function generateStaticParams() {
  const response = await client.getEntries({ content_type: "blogPosts" });
  const posts = response.items;

  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

export const getPosts = async (params) => {
  const response = await client.getEntries({
    "fields.slug": params,
    content_type: "blogPosts",
  });
  return response?.items?.[0];
};

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getPosts(slug);
  console.log(post);
  const { content } = post.fields;

  return (
    <>
      <div class="bg-grn-60 flex flex-col justify-between">
        <div class="flex justify-end pt-6">
          <Image
            alt="png will occupy here"
            onClick={popuphandler}
            priority
            class="cancel"
            src="/close-circle.svg"
            width="48"
            height="48"
            quality={100}
          />
        </div>
        <div class="flex gap-8 flex-col">
          <Link onClick={popuphandler} href="/" class="H6 ">
            Home
          </Link>
          <Link onClick={popuphandler} href="/about" class="H6 ">
            About Us
          </Link>
          <Link onClick={popuphandler} href="/#clinicals" class="H6 ">
            Clinicals
          </Link>
          <Link onClick={popuphandler} href="/#productions" class="H6 ">
            Production
          </Link>
          <Link onClick={popuphandler} href="/blog" class="H6 ">
            Blog
          </Link>
          <Link onClick={popuphandler} href="/#contact" class="H6 ">
            Contact US
          </Link>
          <Link onClick={popuphandler} href="/#contact" class="buttonC H6">
            Book a Consultation
          </Link>
        </div>
        <div class="flex flex-col pb-8 gap-6 justify-center items-center">
          <div class="flex gap-6">
            <div>
              <a
                href="https://www.instagram.com/salym_wellness_centre"
                target="_blank"
              >
                <Image
                  alt="png will occupy here"
                  class="H4 text-center self-center"
                  src="/IG.svg"
                  priority
                  width="24"
                  height="24"
                  quality={100}
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100063809140048&mibextid=LQQJ4d"
                target="_blank"
              >
                <Image
                  alt="png will occupy here"
                  class="H4 text-center self-center"
                  src="/ffb.svg"
                  priority
                  width="24"
                  height="24"
                  quality={100}
                />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/salymwc?s=21&t=-e4Q0Ih6HOOkE7S_kJdCjg"
                target="_blank"
              >
                <Image
                  alt="png will occupy here"
                  class="H4 text-center self-center"
                  src="/ttw.svg"
                  priority
                  width="24"
                  height="24"
                  quality={100}
                />
              </a>
            </div>
          </div>
          <div>
            <p class="subH">
              © 2023 Salym Wellness Centre. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      <main class="body-margin">
        <header>
          <nav class="flex items-center flex-row justify-between">
            <Link href="/">
              <Image
                alt="png will occupy here"
                priority
                class="hidden w-12 h-auto lg:block"
                src={logo}
                quality={100}
              />
              <Image
                alt="png will occupy here"
                priority
                class="lg:hidden w-9 h-auto block"
                src={logo}
                quality={100}
              />
            </Link>
            <div class="navM hidden lg:flex">
              <Link class="H6" href="/about">
                About
              </Link>
              <Link class="H6" href="/#clinicals">
                Clinicals
              </Link>
              <Link class="H6" href="/#productions">
                Production
              </Link>
              <Link class="H6" href="/blog">
                Blog
              </Link>
              <Link class="H6" href="/#contact">
                Contact
              </Link>
            </div>

            <Link href="/#contact" class="buttonM H6 hidden lg:flex">
              Book a Consultation
            </Link>
            <Image
              alt="png will occupy here"
              onClick={popuphandler}
              priority
              class="lg:hidden block"
              src="/menu.svg"
              width="44"
              height="44"
              quality={100}
            />
          </nav>
        </header>

        <div>
          <div class=" max-w-3xl w-full mx-auto">
            <div
              id="Blog-Page-Heading"
              class="lg:pt-32 pt-16 flex flex-col item gap-8 lg:gap-10"
            >
              <div class="flex lg:items-center items-end object-cover h-56 w-full   rounded-2xl overflow-hidden">
                <ContentfulImage
                  alt={`Cover Image `}
                  src={post.fields.image.fields.file.url}
                  width={post.fields.image.fields.file.details.image.width}
                  height={post.fields.image.fields.file.details.image.height}
                />
              </div>
              <div class="flex flex-col gap-4 lg:gap-6">
                <h4 class="H5 hidden lg:block ">
                  {post.fields.title}
                </h4>
                <h4 class="H5 lg:hidden block ">
                  {post.fields.title}
                </h4>

                <div class="flex-row gap-2 lg:hidden flex items-center">
                  <div class="flex flex-col gap-2">
                    <p class="subH">By {post.fields.author}</p>
                    <p class="subH black7">
                      Published <ReDate date={post.fields.publishDate} />
                    </p>
                  </div>
                </div>

                <div class="flex-row gap-4 hidden lg:flex items-center">
                  <div class="flex flex-col gap-2">
                    <p class="h6">By {post.fields.author}</p>
                    <p class="subH black7">
                      Published <ReDate date={post.fields.publishDate} />
                    </p>
                  </div>
                </div>

                <div class="flex gap-8 lg:justify-start justify-between items-center">
                  <span class="grn-10 grn-60 H6 hidden lg:block py-2 px-4  rounded-2xl ">
                    {post.fields.category}
                  </span>
                  <span class=" lg:hidden block grn-10 grn-60 subH py-2 px-4  rounded-2xl">
                    {post.fields.category}
                  </span>
                  <p class="H6 hidden lg:block">
                    {post.fields.minutesRead} mins read
                  </p>
                  <p class="subH lg:hidden block">
                    {post.fields.minutesRead} mins read
                  </p>
                </div>
              </div>
            </div>

            <div
              id="Blog-Page-body"
              class=" prose-p:leading-7 lg:prose-p:leading-8 prose-h4:mt-8 flex flex-col pt-12 lg:pt-16 prose w-full max-w-none"
            >
              <RichText content={content} />
            </div> 
          </div>
        </div>
        <footer class="lg:pt-24 pt-20 m-0">
          <div class="footer px-6 text-white">
            <div class="flex lg:flex-row flex-col justify-between lg:items-center pt-12 lg:pt-16">
              <div class="flex lg:flex-row pb-12 lg:pb-0 flex-col gap-10">
                <Link href="/" class="hover:text-green-200 H6 hidden lg:block ">
                  Home
                </Link>
                <Link
                  href="/"
                  class="hover:text-green-200 subH lg:hidden block"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  class="hover:text-green-200 H6 hidden lg:block"
                >
                  About
                </Link>
                <Link
                  href="/about"
                  class="hover:text-green-200 subH lg:hidden block"
                >
                  About
                </Link>
                <Link
                  href="/#clinicals"
                  class="hover:text-green-200 H6 hidden lg:block"
                >
                  Clinicals
                </Link>
                <Link
                  href="/#clinicals"
                  class="hover:text-green-200 subH lg:hidden block"
                >
                  Clinicals
                </Link>
                <Link
                  href="/#productions"
                  class="hover:text-green-200 H6 hidden lg:block "
                >
                  Productions
                </Link>
                <Link
                  href="/#productions"
                  class="hover:text-green-200 subH lg:hidden block"
                >
                  Productions
                </Link>
                <Link
                  href="blog"
                  class="hover:text-green-200 H6 hidden lg:block"
                >
                  Blog
                </Link>
                <Link
                  href="blog"
                  class="hover:text-green-200 subH lg:hidden block"
                >
                  Blog
                </Link>
                <Link
                  href="/#contact"
                  class="hover:text-green-200 H6 hidden lg:block"
                >
                  Contact
                </Link>
                <Link
                  href="/#contact"
                  class="hover:text-green-200 subH lg:hidden block"
                >
                  Contact
                </Link>
              </div>

              <div class="flex justify-center gap-4">
                <a
                  href="https://www.instagram.com/salym_wellness_centre"
                  target="_blank"
                >
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block  self-center"
                    src="/IG.svg"
                    priority
                    width="24"
                    height="24"
                    quality={100}
                  />
                </a>
                <a
                  href="https://www.instagram.com/salym_wellness_centre"
                  target="_blank"
                >
                  <Image
                    alt="png will occupy here"
                    class="lg:hidden block self-start"
                    src="/iig.svg"
                    width="24"
                    height="24"
                    priority
                    quality={100}
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100063809140048&mibextid=LQQJ4d"
                  target="_blank"
                >
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block  self-center"
                    src="/ffb.svg"
                    priority
                    width="24"
                    height="24"
                    quality={100}
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100063809140048&mibextid=LQQJ4d"
                  target="_blank"
                >
                  <Image
                    alt="png will occupy here"
                    class="lg:hidden block self-start"
                    src="/ffb.svg"
                    width="24"
                    height="24"
                    priority
                    quality={100}
                  />
                </a>
                <a
                  href="https://twitter.com/salymwc?s=21&t=-e4Q0Ih6HOOkE7S_kJdCjg"
                  target="_blank"
                >
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block  self-center"
                    src="/ttw.svg"
                    priority
                    width="24"
                    height="24"
                    quality={100}
                  />
                </a>
                <a
                  href="https://twitter.com/salymwc?s=21&t=-e4Q0Ih6HOOkE7S_kJdCjg"
                  target="_blank"
                >
                  <Image
                    alt="png will occupy here"
                    class="lg:hidden block self-start"
                    src="/ttw.svg"
                    width="24"
                    height="24"
                    priority
                    quality={100}
                  />
                </a>
              </div>
            </div>

            <div class="lg:pt-12 lg:pb-10 pt-6 pb-8 text-center w-full">
              <p class="H6 hidden lg:block ">
                2023 Copyrights. All rights reserved.
              </p>
              <p class="subH lg:hidden block">
                2023 Copyrights. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
