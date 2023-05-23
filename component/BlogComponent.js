"use client"
import { useEffect } from "react";
import HBPostData from "./homeblog";
import Link from "next/link";
  
export default function BlogComponent({ posts }) {
    
    useEffect(() => {
  
        const mslideshow = document.getElementById("mslideshow");
        const mslideContainer = document.getElementsByClassName("slidx")[0];
        const mslideWidth = mslideContainer.clientWidth; // Width of each slide
        const prevBtnnn = document.getElementById("prevBtnnn");
        const nextBtnnn = document.getElementById("nextBtnnn");
  
        let mcurrentPosition = 0;
  
        prevBtnnn.addEventListener("click", () => {
          mcurrentPosition += mslideWidth * 3;
          if (mcurrentPosition > 0) {
            mcurrentPosition = 0;
            prevBtnnn.classList.remove("buttonM3");
            prevBtnnn.classList.add("buttonO3");
          }
          mslideshow.style.transform = `translateX(${mcurrentPosition}px)`;
          nextBtnnn.classList.remove("buttonO3");
          nextBtnnn.classList.add("buttonM3");
        });
        nextBtnnn.addEventListener("click", () => {
          mcurrentPosition -= mslideWidth * 3;
          const maxPosition = -(mslideWidth * (mslideshow.childElementCount - 3));
          if (mcurrentPosition < maxPosition) {
            mcurrentPosition = maxPosition;
            nextBtnnn.classList.remove("buttonM3");
            nextBtnnn.classList.add("buttonO3");
          }
          mslideshow.style.transform = `translateX(${mcurrentPosition}px)`;
          prevBtnnn.classList.remove("buttonO3");
          prevBtnnn.classList.add("buttonM3");
        })
  
    }, [])

  return (
    <section id="blog" class="onws">
      <div class="flex justify-between items-end">
        <div class="flex flex-col gap-4">
          <h4 class="H4 hidden lg:block">Recent Blog Posts</h4>
          <h4 class="H5 lg:hidden block">Recent Blog Posts</h4>
          <div class="w-full flex">
            <p class="B4 hidden lg:block black7 max-w-xl">
              Stay up to date with our recent blog posts, featuring insightful
              articles on health, wellness, and natural remedies for your daily
              life.
            </p>
            <p class="B5 lg:hidden block black7 max-w-xl">
              Stay up to date with our recent blog posts, featuring insightful
              articles on health, wellness, and natural remedies for your daily
              life.
            </p>
          </div>
        </div>
        <div class="hidden lg:flex flex-row gap-4">
          <button id="prevBtnnn" class="buttonO3 hidden lg:flex gap-2 H6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Prev
          </button>
          <button id="nextBtnnn" class="buttonM3 hidden lg:flex gap-2 H6">
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <div id="slideshow-container" class="pt-8 lg:pt-16">
        <div id="mslideshow">
          {posts.map((post) => (
            <HBPostData key={post.fields.title} post={post} />
          ))}
        </div>
      </div>

      <div class="lg:pt-12 pt-6 flex lg:justify-center gap-6">
        <Link href="/blog" class="buttonM hidden lg:block H6">
          Explore the Blog
        </Link>
        <Link href="/blog" class="buttonM lg:hidden block subH">
          Explore the Blog
        </Link>
      </div>
    </section>
  );
}
 