"use client";
import { useEffect, useState } from "react";
import { client } from "../../contentful/client"
import PostCard from "./postData.js";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import logo from "../../public/logoLarge.png";

const popuphandler = () => {
  const popup = document.querySelector(".bg-grn-60");

  if (popup.style.display == "none") {
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }
};

export default function MainBlog() {
  let [res, setRes] = useState(null);
  let [email, setEmail] = useState("");

  useEffect(() => {
    async function setdata() {
      try {
        const dresponse = await client.getEntries({ content_type: "blogPosts" });
        setRes(dresponse.items);
      } catch (error) {
        console.log(error)
      }
    }
    setdata();

    var closeButtons = document.getElementsByClassName("colse");
    for (var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener("click", function () {
        document.getElementById("modales").style.display = "none";
        document.getElementById("modalss").style.display = "none";
        document.getElementById("modalec").style.display = "none";
        document.getElementById("modalsc").style.display = "none";
      });
    }

  }, []);


  const subHandler = async (e) => {
    e.preventDefault();

    document.getElementById("head-sub").style.display = "none";
    document.getElementById("head-sub2").style.display = "flex";

    try {
      const { data } = await axios.post(
        "https://clean-blue-tutu.cyclic.app/api/mail/subscribe",
        { email }
      );

      document.getElementById("modalss").style.display = "flex";
      document.getElementById("head-sub").style.display = "flex";
      document.getElementById("head-sub2").style.display = "none";
      setEmail("");
    } catch (error) {
      document.getElementById("modales").style.display = "flex";
      document.getElementById("head-sub").style.display = "flex";
      document.getElementById("head-sub2").style.display = "none";
      setEmail("");
    }
  };

  return (
    <>
      <div
        id="modalss"
        class="flex px-6 justify-center items-center w-full h-full"
      >
        <div class="max-w-xl success w-full items-center   rounded-2xl bg-white flex flex-col px-4 lg:px-6 py-10 gap-4 lg:gap-6">
          <div>
            <Image
              alt="png will occupy here"
              class="H4 text-center hidden lg:block self-start"
              src="/success.svg"
              priority
              width="96"
              height="96"
              quality={100}
            />
            <Image
              alt="png will occupy here"
              class="H5 lg:hidden block"
              src="/success.svg"
              width="64"
              height="64"
              priority
              quality={100}
            />
          </div>
          <div>
            <h4></h4>
            <h5 class="H5 grn-110 hidden lg:block">Subscription Confirmed!</h5>
            <h5 class="H6 grn-110 lg:hidden block">Subscription Confirmed!</h5>
          </div>
          <div>
            <p class="B4 grn-50 hidden lg:block">
              Stay tuned for our latest updates and offers.
            </p>
            <p class="B5 grn-50 lg:hidden block">
              Stay tuned for our latest updates and offers.
            </p>
          </div>
          <div class="flex gap-4">
            <button class="H5 colse buttonx grn-110 hidden lg:block">
              Close
            </button>
            <button class="H5 colse buttonxg grn-110 hidden lg:block">
              Continue
            </button>
            <button class="H6 colse buttonx grn-110 lg:hidden block">
              Close
            </button>
            <button class="H6 colse buttonxg grn-110 lg:hidden block">
              Continue
            </button>
          </div>
        </div>
      </div>
      <div
        id="modales"
        class="flex px-6 justify-center items-center w-full h-full"
      >
        <div class="max-w-xl danger w-full items-center   rounded-2xl bg-white flex flex-col px-6 py-10 gap-6">
          <div>
            <Image
              alt="png will occupy here"
              class="H4 text-center hidden lg:block self-start"
              src="/danger.svg"
              priority
              width="96"
              height="96"
              quality={100}
            />
            <Image
              alt="png will occupy here"
              class="H5 lg:hidden block"
              src="/danger.svg"
              width="64"
              height="64"
              priority
              quality={100}
            />
          </div>
          <div>
            <h4></h4>
            <h5 class="H5 rde-110 hidden lg:block">
              Oops! something went wrong.
            </h5>
            <h5 class="H6 rde-110 lg:hidden block">
              Oops! something went wrong.
            </h5>
          </div>
          <div>
            <p class="B4 grn-50 hidden lg:block">
              Sorry, we couldn&apos;t process your subscription. Please try
              again.
            </p>
            <p class="B5 grn-50 lg:hidden block">
              Sorry, we couldn&apos;t process your subscription. Please try
              again.
            </p>
          </div>
          <div class="flex gap-4">
            <button class="H5 colse buttonrx rde-110 hidden lg:block">
              Close
            </button>
            <button class="H5 colse buttonrxg rde-110 hidden lg:block">
              Try Again
            </button>
            <button class="H6 colse buttonrx rde-110 lg:hidden block">
              Close
            </button>
            <button class="H6 colse buttonrxg rde-110 lg:hidden block">
              Try Again
            </button>
          </div>
        </div>
      </div>
      <div
        id="modalsc"
        class="flex px-6 justify-center items-center w-full h-full"
      >
        <div class="max-w-xl success w-full items-center   rounded-2xl bg-white flex flex-col px-4 lg:px-6 py-10 gap-4 lg:gap-6">
          <div>
            <Image
              alt="png will occupy here"
              class="H4 text-center hidden lg:block self-start"
              src="/success.svg"
              priority
              width="96"
              height="96"
              quality={100}
            />
            <Image
              alt="png will occupy here"
              class="H5 lg:hidden block"
              src="/success.svg"
              width="64"
              height="64"
              priority
              quality={100}
            />
          </div>
          <div>
            <h4></h4>
            <h5 class="H5 grn-110 hidden lg:block">Message Sent!</h5>
            <h5 class="H6 grn-110 lg:hidden block">Message Sent!</h5>
          </div>
          <div>
            <p class="B4 grn-50 hidden lg:block">
              Thank you for reaching out. We will get back to you shortly.
            </p>
            <p class="B5 grn-50 lg:hidden block">
              Thank you for reaching out. We will get back to you shortly.
            </p>
          </div>
          <div class="flex gap-4">
            <button class="H5 colse buttonx grn-110 hidden lg:block">
              Close
            </button>
            <button class="H5 colse buttonxg grn-110 hidden lg:block">
              Continue
            </button>
            <button class="H6 colse buttonx grn-110 lg:hidden block">
              Close
            </button>
            <button class="H6 colse buttonxg grn-110 lg:hidden block">
              Continue
            </button>
          </div>
        </div>
      </div>
      <div
        id="modalec"
        class="flex px-6 justify-center items-center w-full h-full"
      >
        <div class="max-w-xl danger w-full items-center   rounded-2xl bg-white flex flex-col px-6 py-10 gap-6">
          <div>
            <Image
              alt="png will occupy here"
              class="H4 text-center hidden lg:block self-start"
              src="/danger.svg"
              priority
              width="96"
              height="96"
              quality={100}
            />
            <Image
              alt="png will occupy here"
              class="H5 lg:hidden block"
              src="/danger.svg"
              width="64"
              height="64"
              priority
              quality={100}
            />
          </div>
          <div>
            <h4></h4>
            <h5 class="H5 rde-110 hidden lg:block">Oops! message not sent.</h5>
            <h5 class="H6 rde-110 lg:hidden block">Oops! message not sent.</h5>
          </div>
          <div>
            <p class="B4 grn-50 hidden lg:block">
              Sorry, please try again or reach out to us directly.
            </p>
            <p class="B5 grn-50 lg:hidden block">
              Sorry, please try again or reach out to us directly.
            </p>
          </div>
          <div class="flex gap-4">
            <button class="H5 colse buttonrx rde-110 hidden lg:block">
              Close
            </button>
            <button class="H5 colse buttonrxg rde-110 hidden lg:block">
              Try Again
            </button>
            <button class="H6 colse buttonrx rde-110 lg:hidden block">
              Close
            </button>
            <button class="H6 colse buttonrxg rde-110 lg:hidden block">
              Try Again
            </button>
          </div>
        </div>
      </div>

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

          <div class=" header-content flex justify-center w-full">
            <div class="gap-4 lg:gap-8 flex flex-col lg:justify-center lg:items-center max-w-4xl">
              <h1 class="H2 hidden lg:block">The Salym Wellness Center Blog</h1>
              <h1 class="H4 lg:hidden block">The Salym Wellness Center Blog</h1>
              <p class="B4 hidden lg:block black7 max-w-2xl lg:text-center">
                Explore our blog for informative and engaging content on
                holistic health, wellness, and natural remedies, designed to
                enhance your overall wellbeing.
              </p>
              <p class="B5 lg:hidden block black7 max-w-2xl lg:text-center">
                Explore our blog for informative and engaging content on
                holistic health, wellness, and natural remedies, designed to
                enhance your overall wellbeing.
              </p>
              <form onSubmit={subHandler} class="flex gap-2 lg:gap-4">
                <input
                  class="newsletterx outline-none"
                  type="email"
                  placeholder="you@example.com"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <button id="head-sub" type="submit" class="buttonM">
                  Subscribe
                </button>
                <div id="head-sub2" class="buttonNnx flex gap-2">
                  Subscribe
                  <img
                    class="w-6 h-6 spinner"
                    src="/spinner.svg"
                    alt="spinner"
                  />
                </div>
              </form>
            </div>
          </div>
        </header>

        <section id="blog" class="lg:pt-32 pt-20">
          <div class="flex justify-between items-end">
            <div class="flex flex-col gap-4">
              <h4 class="H4 hidden lg:block">Latest articles</h4>
              <h4 class="H5 lg:hidden block">Latest articles</h4>
            </div>
          </div>

          <div class="pt-6 lg:pt-10 flex flex-wrap w-full gap-8">
           { res ? (res.map((post, i) => (
              <PostCard key={post.fields.title} post={post} />
            ))) : <div>Loading...</div> }
          </div>
        </section>

      </main>
        <footer class="lg:pt-32 pt-20 m-0">
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
    </>
  );
}