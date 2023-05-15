"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const popuphandler = () => {
  const popup = document.querySelector(".bg-grn-60");

  if (popup.style.display == "none") {
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }
};

export default function About() {
  return (
    <>
      <div class="bg-grn-60 flex flex-col justify-between">
        <div class="flex justify-end pt-6">
          <Image
            alt="png will occupy here"
            onClick={popuphandler}
            unoptimized={true}
            class="cancel"
            src="/close-circle.svg"
            width="48"
            height="48"
            quality={100}
          />
        </div>
        <div class="flex gap-8 flex-col">
          <div class="H6 ">Home</div>
          <div class="H6 ">About Us</div>
          <div class="H6 ">Clinicals</div>
          <div class="H6 ">Production</div>
          <div class="H6 ">Blog</div>
          <div class="H6 ">Contact US</div>
          <button class="buttonC H6">Book a Consultation</button>
        </div>
        <div class="flex flex-col pb-8 gap-6 justify-center items-center">
          <div class="flex gap-6">
            <div>
              <Image
                alt="png will occupy here"
                unoptimized={true}
                class="cancel"
                src="/IG.svg"
                width="24"
                height="24"
                quality={100}
              />
            </div>
            <div>
              <Image
                alt="png will occupy here"
                unoptimized={true}
                class="cancel"
                src="/fb.svg"
                width="24"
                height="24"
                quality={100}
              />
            </div>
            <div>
              <Image
                alt="png will occupy here"
                unoptimized={true}
                class="cancel"
                src="/twit.svg"
                width="24"
                height="24"
                quality={100}
              />
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
            <div>
              <Image
                alt="png will occupy here"
                unoptimized={true}
                class="hidden lg:block"
                src="/logoLarge.png"
                width="46"
                height="64"
                quality={100}
              />
              <Image
                alt="png will occupy here"
                unoptimized={true}
                class="lg:hidden block"
                src="/logoLarge.png"
                width="34"
                height="48"
                quality={100}
              />
            </div>
            <div class="navM hidden lg:flex">
              <Link class="H6" href="#">
                About
              </Link>
              <Link class="H6" href="#">
                Clinicals
              </Link>
              <Link class="H6" href="#">
                Production
              </Link>
              <Link class="H6" href="#">
                Blog
              </Link>
              <Link class="H6" href="#">
                Contact
              </Link>
            </div>
            <button class="buttonM H6 hidden lg:flex">
              Book a Consultation
            </button>
            <Image
              alt="png will occupy here"
              onClick={popuphandler}
              unoptimized={true}
              class="lg:hidden block"
              src="/menu.svg"
              width="44"
              height="44"
              quality={100}
            />
          </nav>

          <div class=" header-content flex justify-center w-full">
            <div class="gap-4 lg:gap-8 flex flex-col lg:justify-center lg:items-center max-w-4xl">
              <span class="Hothers">About Us</span>
              <h1 class="H1 hidden lg:block">
                Hi there, We are Salym Wellness Centre
              </h1>
              <h1 class="H4 lg:hidden block">
                Hi there, We are Salym Wellness Centre
              </h1>
              <p class="B4 hidden lg:block black7 max-w-2xl lg:text-center">
                We offer personalized and holistic natural wellness solutions.
                Our commitment to quality and professionalism ensures the best
                care for individuals and businesses.
              </p>
              <p class="B5 lg:hidden block black7 max-w-2xl lg:text-center">
                We offer personalized and holistic natural wellness solutions.
                Our commitment to quality and professionalism ensures the best
                care for individuals and businesses.
              </p>
            </div>
          </div>
        </header>

        <section class="pt-10 lg:pt-32 flex lg:flex-row flex-col gap-10 lg:gap-16 items-center justify-between">
          <div class="order-1 lg:w-1/2">
            <Image
              alt="png will occupy here"
              src="/aboutland.png"
              class="hidden lg:block"
              width="488"
              height="478"
              quality={100}
              unoptimized={true}
            />
            <Image
              alt="png will occupy here"
              src="/aboutland.png"
              class="lg:hidden block"
              width="345"
              height="338"
              quality={100}
              unoptimized={true}
            />
          </div>
          <div class="order-2 about-cont-right lg:w-1/2 flex gap-4 flex-col lg:gap-8">
            <h4 class="H4 hidden lg:block">Our Company</h4>
            <h4 class="H5 lg:hidden block">Our Company</h4>
            <p class="B4 hidden lg:block black7">
              Our vision is to become the most recognized and widely used
              producer of herbal medical products in Africa. Salym Wellness
              Centre is committed to bringing a resonating balance between
              health, nature, environment, with a retrospective look into
              indigenous sources in the application of healthcare. We are
              dedicated to producing high-quality products that promote natural
              healing, and we believe that the use of organic herbs and natural
              ingredients can provide effective and safe health solutions.
            </p>
            <p class="B5 lg:hidden block black7">
              Our vision is to become the most recognized and widely used
              producer of herbal medical products in Africa. Salym Wellness
              Centre is committed to bringing a resonating balance between
              health, nature, environment, with a retrospective look into
              indigenous sources in the application of healthcare. We are
              dedicated to producing high-quality products that promote natural
              healing, and we believe that the use of organic herbs and natural
              ingredients can provide effective and safe health solutions.
            </p>
            <div>
              <button class="buttonM hidden lg:block H6">
                Connect with Us
              </button>
              <button class="buttonM lg:hidden block subH">
                Connect with Us
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
