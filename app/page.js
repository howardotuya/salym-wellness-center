"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import p1 from "../public/p1.png";
import p2 from "../public/p2.png";
import p3 from "../public/p3.png";
import p4 from "../public/p4.png";
import p5 from "../public/p5.png";
import p6 from "../public/p6.png";
import p7 from "../public/p7.png";
import p8 from "../public/p8.png";
import p9 from "../public/p9.png";
import p10 from "../public/p10.png";
import wh1 from "../public/wh1.png";
import wh2 from "../public/wh2.png";
import wh3 from "../public/wh3.png";
import wh4 from "../public/wh4.png";
import c1 from "../public/c1.png";
import c2 from "../public/c2.png";
import c3 from "../public/c3.png";
import c4 from "../public/c4.png";
import c5 from "../public/c5.png";
import c6 from "../public/c6.png";
import logo from "../public/logoLarge.png";
import BlogComponent from "@/component/BlogComponent";
import { client } from "../contentful/client";


export default function Home() {
const popuphandler = () => {
  const popup = document.querySelector(".bg-grn-60");

  if (popup.style.display == "none") {
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }
};

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    document.querySelector(".bg-grn-60").style.display = "none"

    async function getdata() {
      try {
        const response = await client.getEntries({ content_type: "blogPosts" });
      setPosts(response.items);
      } catch (error) {
        console.log(error)
      }
    }
    getdata();
    
    const slideshow = document.getElementById("slideshow");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtnn = document.getElementById("prevBtnn");
    const nextBtnn = document.getElementById("nextBtnn");
    const slideContainer = document.getElementsByClassName("slid")[0];
    const slideWidth = slideContainer.clientWidth; // Width of each slide
    const tslideshow = document.getElementById("tslideshow");
    const tslideContainer = document.getElementsByClassName("tc")[0];
    const tslideWidth = tslideContainer.clientWidth; // Width of each slide
    const prevBtnx = document.getElementById("prevBtnx");
    const nextBtnx = document.getElementById("nextBtnx");

    let tcurrentPosition = 0;
    let currentPosition = 0;

    prevBtn.addEventListener("click", () => {
      currentPosition += slideWidth * 3;
      if (currentPosition > 0) {
        currentPosition = 0;
        prevBtn.classList.remove("buttonM");
        prevBtn.classList.add("buttonO");
      }
      slideshow.style.transform = `translateX(${currentPosition}px)`;
      nextBtn.classList.remove("buttonO");
      nextBtn.classList.add("buttonM");
    });
    nextBtn.addEventListener("click", () => {
      currentPosition -= slideWidth * 3;
      const maxPosition = -(slideWidth * (slideshow.childElementCount - 3));
      if (currentPosition < maxPosition) {
        currentPosition = maxPosition;
        nextBtn.classList.remove("buttonM");
        nextBtn.classList.add("buttonO");
      }
      slideshow.style.transform = `translateX(${currentPosition}px)`;
      prevBtn.classList.remove("buttonO");
      prevBtn.classList.add("buttonM");
    });
    prevBtnn.addEventListener("click", () => {
      currentPosition += slideWidth * 1;
      if (currentPosition > 0) {
        currentPosition = 0;
        prevBtnn.classList.remove("buttonM2");
        prevBtnn.classList.add("buttonO2");
      }
      slideshow.style.transform = `translateX(${currentPosition}px)`;
      nextBtnn.classList.remove("buttonO2");
      nextBtnn.classList.add("buttonM2");
    });
    nextBtnn.addEventListener("click", () => {
      currentPosition -= slideWidth * 1;
      const maxPosition = -(slideWidth * (slideshow.childElementCount - 1));
      if (currentPosition < maxPosition) {
        currentPosition = maxPosition;
        nextBtnn.classList.remove("buttonM2");
        nextBtnn.classList.add("buttonO2");
      }
      slideshow.style.transform = `translateX(${currentPosition}px)`;
      prevBtnn.classList.remove("buttonO2");
      prevBtnn.classList.add("buttonM2");
    });
    prevBtnx.addEventListener("click", () => {
      tcurrentPosition += tslideWidth * 1;
      if (tcurrentPosition > 0) {
        tcurrentPosition = 0;
        prevBtnx.classList.remove("buttonM4");
        prevBtnx.classList.add("buttonO4");
      }
      tslideshow.style.transform = `translateX(${tcurrentPosition}px)`;
      nextBtnx.classList.remove("buttonO4");
      nextBtnx.classList.add("buttonM4");
    });
    nextBtnx.addEventListener("click", () => {
      tcurrentPosition -= tslideWidth * 1;
      const maxPosition = -(tslideWidth * (tslideshow.childElementCount - 1));
      if (tcurrentPosition < maxPosition) {
        tcurrentPosition = maxPosition;
        nextBtnx.classList.remove("buttonM4");
        nextBtnx.classList.add("buttonO4");
      }
      tslideshow.style.transform = `translateX(${tcurrentPosition}px)`;
      prevBtnx.classList.remove("buttonO4");
      prevBtnx.classList.add("buttonM4");
    });
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

  const [fname, setfname] = useState("");
  const [phone, setPhone] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [methodOfContact, setMethodOfContact] = useState("");
  const [like, setLike] = useState("");
  const [interest, setInterest] = useState({
    Clinicals: false,
    Productions: false,
    NewsorBlog: false,
  });
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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

  const subHandler2 = async (e) => {
    e.preventDefault();

    document.getElementById("low-sub").style.display = "none";
    document.getElementById("low-sub2").style.display = "flex";

    try {
      const { data } = await axios.post(
        "https://clean-blue-tutu.cyclic.app/api/mail/subscribe",
        { email }
      );

      document.getElementById("modalss").style.display = "flex";
      document.getElementById("low-sub").style.display = "flex";
      document.getElementById("low-sub2").style.display = "none";
      setEmail("");
    } catch (error) {
      document.getElementById("modales").style.display = "flex";
      document.getElementById("low-sub").style.display = "flex";
      document.getElementById("low-sub2").style.display = "none";
      setEmail("");
    }
  };

  const contactHandler = async (e) => {
    e.preventDefault();

    document.getElementById("low-contact").style.display = "none";
    document.getElementById("low-contact2").style.display = "flex";

    try {
      const { data } = await axios.post(
        "https://clean-blue-tutu.cyclic.app/api/mail/contact",
        {
          fname,
          phone,
          emailAddress,
          companyName,
          methodOfContact,
          like,
          interest,
        }
      );

      document.getElementById("modalsc").style.display = "flex";
      document.getElementById("low-contact").style.display = "flex";
      document.getElementById("low-contact2").style.display = "none";
      setEmail("");
    } catch (error) {
      document.getElementById("modalec").style.display = "flex";
      document.getElementById("low-contact").style.display = "flex";
      document.getElementById("low-contact2").style.display = "none";
      setEmail("");
    }
  };

  return (
    <>
      <div
        id="modalss"
        class="flex z-50 px-6 justify-center items-center w-full h-full"
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
        class="flex z-50 px-6 justify-center items-center w-full h-full"
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
        class="flex z-50 px-6 justify-center items-center w-full h-full"
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
        class="flex z-50 px-6 justify-center items-center w-full h-full"
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

      <div id="sidebar" class="bg-grn-60 flex-col justify-between">
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
          <Link onClick={popuphandler} href="/#" class="H6 ">
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
          <nav class="flex   top-0 left-0 right-0 bg-white z-30 pb-4 items-center flex-row justify-between">
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
              <Link class="H6" href="#clinicals">
                Clinicals
              </Link>
              <Link class="H6" href="#productions">
                Production
              </Link>
              <Link class="H6" href="/blog">
                Blog
              </Link>
              <Link class="H6" href="#contact">
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

        <header>
          <div class="flex lg:flex-row flex-col gap-10 lg:gap-16 justify-between items-center header-content">
            <div class="order-2 lg:order-1 header-left gap-4 lg:gap-8 flex flex-col">
              <span class="Hothers">naturopathic wellness centre</span>
              <h1 class="H1 hidden lg:block">
                Welcome to Salym Wellness Centre – your natural health partner
              </h1>
              <h1 class="H4 lg:hidden block">
                Welcome to Salym Wellness Centre – your natural health partner
              </h1>
              <p class="B4 hidden lg:block black7">
                Prioritize your well-being today. Join our community of
                like-minded individuals and businesses. Subscribe to our
                newsletter and book a consultation now.
              </p>
              <p class="B5 lg:hidden block black7">
                Prioritize your well-being today. Join our community of
                like-minded individuals and businesses. Subscribe to our
                newsletter and book a consultation now.
              </p>
              <form onSubmit={subHandler} class="flex gap-2 lg:gap-4">
                <input
                  class="newsletter outline-none"
                  type="email"
                  placeholder="you@example.com"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <button id="head-sub" type="submit" class="buttonN">
                  Subscribe
                </button>
                <div id="head-sub2" class="buttonNn flex gap-2">
                  Subscribe
                  <img
                    class="w-6 h-6 spinner"
                    src="/spinner.svg"
                    alt="spinner"
                  />
                </div>
              </form>
            </div>
            <div class="order-1 header-right lg:order-2">
              <Image
                alt="png will occupy here"
                src="/header-right.png"
                class="hidden lg:block"
                width="488"
                height="478"
                quality={100}
                priority
              />
              <Image
                alt="png will occupy here"
                src="/header-right.png"
                class="lg:hidden block"
                width="345"
                height="338"
                quality={100}
                priority
              />
            </div>
          </div>
        </header>

        <section id="why" class="lg:pt-48 pt-32 flex flex-col gap-8 lg:gap-16">
          <div class="flex flex-col justify-center gap-4">
            <h4 class="H4 text-center hidden lg:block">
              Why Choose Salym Wellness Centre?
            </h4>
            <h4 class="H5 lg:hidden block">
              Why Choose Salym Wellness Centre?
            </h4>
            <div class="w-full flex lg:justify-center">
              <p class="B4 hidden lg:block black7 max-w-2xl text-center">
                Our safe and effective herbal remedies are distinguished by
                sensory evaluation techniques and the Organoleptic Method for
                quality and potency.
              </p>
              <p class="B5 lg:hidden block black7 max-w-2xl ">
                Our safe and effective herbal remedies are distinguished by
                sensory evaluation techniques and the Organoleptic Method for
                quality and potency.
              </p>
            </div>
          </div>
          <div class="flex flex-col lg:flex-row gap-6 ">
            <div class="lg:px-4 px-6 py-8 grn-10 flex flex-col gap-4  rounded-2xl flex-grow  basis-0">
              <Image
                alt="png will occupy here"
                class="H4 text-center hidden lg:block self-start w-20 h-auto"
                src={wh1}
                priority
                quality={100}
              />
              <Image
                alt="png will occupy here"
                class="H5 lg:hidden block w-14 h-auto"
                src={wh1}
                priority
                quality={100}
              />
              <h5 class="H5 grn-110 hidden lg:block">
                Clinicals and Production
              </h5>
              <h5 class="H6 grn-110 lg:hidden block">
                Clinicals and Production
              </h5>
              <p class="B4 grn-50 hidden lg:block">
                We provide both clinical services and herbal production to
                ensure that we offer comprehensive solutions to our customers.
              </p>
              <p class="B5 grn-50 lg:hidden block">
                We provide both clinical services and herbal production to
                ensure that we offer comprehensive solutions to our customers.
              </p>
            </div>
            <div class="lg:px-4 px-6 py-8 grn-10 flex flex-col gap-4  rounded-2xl flex-grow  basis-0">
              <Image
                alt="png will occupy here"
                class="H4 text-center hidden lg:block self-start w-20 h-auto"
                src={wh2}
                priority
                quality={100}
              />
              <Image
                alt="png will occupy here"
                class="H5 lg:hidden block w-14 h-auto"
                src={wh2}
                priority
                quality={100}
              />
              <h5 class="H5 grn-110 hidden lg:block">Process Documentation</h5>
              <h5 class="H6 grn-110 lg:hidden block">Process Documentation</h5>
              <p class="B4 grn-50 hidden lg:block">
                Our processes are fully documented, ensuring traceability and
                accountability at every stage of production.
              </p>
              <p class="B5 grn-50 lg:hidden block">
                Our processes are fully documented, ensuring traceability and
                accountability at every stage of production.
              </p>
            </div>
            <div class="lg:px-4 px-6 py-8 grn-10 flex flex-col gap-4  rounded-2xl flex-grow  basis-0">
              <Image
                alt="png will occupy here"
                class="H4 text-center hidden lg:block self-start w-20 h-auto"
                src={wh3}
                priority
                quality={100}
              />
              <Image
                alt="png will occupy here"
                class="H5 lg:hidden block w-14 h-auto"
                src={wh3}
                priority
                quality={100}
              />
              <h5 class="H5 grn-110 hidden lg:block">Variety of 1000+ herbs</h5>
              <h5 class="H6 grn-110 lg:hidden block">Variety of 1000+ herbs</h5>
              <p class="B4 grn-50 hidden lg:block">
                Our extensive research has led us to a collection of over 1000
                herbs, which are carefully dehydrated and processed to retain
                their efficacy.
              </p>
              <p class="B5 grn-50 lg:hidden block">
                Our extensive research has led us to a collection of over 1000
                herbs, which are carefully dehydrated and processed to retain
                their efficacy.
              </p>
            </div>
            <div class="lg:px-4 px-6 py-8 grn-10 flex flex-col gap-4  rounded-2xl flex-grow  basis-0">
              <Image
                alt="png will occupy here"
                class="H4 text-center hidden lg:block self-start w-20 h-auto"
                src={wh4}
                priority
                quality={100}
              />
              <Image
                alt="png will occupy here"
                class="H5 lg:hidden block w-14 h-auto"
                src={wh4}
                priority
                quality={100}
              />
              <h5 class="H5 grn-110 hidden lg:block">Collaborators</h5>
              <h5 class="H6 grn-110 lg:hidden block">Collaborators</h5>
              <p class="B4 grn-50 hidden lg:block">
                We have partnered with large farm operators to ensure a steady
                supply of raw materials, and to help support the local economy.
              </p>
              <p class="B5 grn-50 lg:hidden block">
                We have partnered with large farm operators to ensure a steady
                supply of raw materials, and to help support the local economy.
              </p>
            </div>
          </div>
        </section>

        <section
          id="about"
          class="about flex lg:flex-row flex-col gap-10 lg:gap-16 items-center justify-between"
        >
          <div class="order-2 lg:order-1 hidden lg:block lg:w-1/2">
            <Image
              alt="png will occupy here"
              src="/about.png"
              class="hidden lg:block"
              width="528"
              height="436"
              quality={100}
            />
          </div>
          <div class="order-1 lg:order-2 about-cont-right lg:w-1/2 flex gap-6 flex-col lg:gap-8">
            <h4 class="H4 hidden lg:block">About Us</h4>
            <h4 class="H5 lg:hidden block pb-2">About Us</h4>
            <Image
              alt="png will occupy here"
              src="/about.png"
              class="lg:hidden block"
              width="345"
              height="286"
              quality={100}
            />
            <p class="B4 hidden lg:block black7">
              At Salym Wellness Centre, we provide safe and effective herbal
              medical products to promote health and wellness. Our meticulously
              produced natural remedies are made using the Organoleptic Method
              to ensure quality and potency. We offer naturopathic wellness
              solutions, including herbal therapy, physical therapy, counseling,
              and more for individuals, along with immune boosters, herbal tea
              blends, and other products. For businesses and pharmaceuticals, we
              provide access to safe herbal medicine solutions with adequate
              process documentation. Join our community today and discover the
              power of natural remedies. Subscribe to our newsletter for the
              latest updates.
            </p>
            <p class="B5 lg:hidden block black7">
              Discover the power of natural remedies with Salym Wellness Centre.
              We provide safe and effective herbal medical products, including
              naturopathic wellness solutions and immune boosters. For
              businesses and individuals alike, we offer access to safe herbal
              medicine solutions with adequate process documentation. Contact us
              to learn more about our products and services or to book a
              consultation today.
            </p>
            <div>
              <div class="hidden lg:flex">
                <Link
                  href="/about"
                  class="buttonM hidden lg:flex items-start w-auto H6"
                >
                  Read more
                </Link>
              </div>
              <div class="lg:hidden flex">
                <Link
                  href="/about"
                  class="buttonM lg:hidden flex items-start w-auto subH"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section class=" pt-32 lg:pt-48">
          <div class="flex flex-col lg:justify-center gap-4">
            <h4 class="H4 text-center hidden lg:block">
              Our Natural Health Solutions
            </h4>
            <h4 class="H5 lg:hidden block">Our Natural Health Solutions</h4>
            <div class="w-full flex lg:justify-center">
              <p class="B4 hidden lg:block black7 max-w-2xl text-center">
                Our solutions offer customized clinical sessions and herbal
                productions, utilizing a variety of researched herbs to promote
                functional and safe wellness.
              </p>
              <p class="B5 lg:hidden block black7 max-w-2xl">
                Our solutions offer customized clinical sessions and herbal
                productions, utilizing a variety of researched herbs to promote
                functional and safe wellness.
              </p>
            </div>
          </div>

          <div class="">
            <div id="clinicals" class="lg:pt-16 pt-8 flex flex-col gap-6">
              <h4 class="H5 hidden lg:block">Clinicals</h4>
              <h4 class="H5 lg:hidden block">Clinicals</h4>

              <div class="flex flex-wrap gap-8">
                <div class="flex flex-row gap-4 lg:gap-6 py-8 px-6 lg:p-8 grn-10   rounded-2xl basis-u">
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block  self-center w-20 h-auto"
                    src={c1}
                    priority
                    quality={100}
                  />
                  <Image
                    alt="png will occupy here"
                    class="lg:hidden block self-start w-14 h-auto"
                    src={c1}
                    priority
                    quality={100}
                  />
                  <div class="flex flex-col gap-4">
                    <h5 class="H5 grn-110 hidden lg:block">Herbal Therapy</h5>
                    <h6 class="H6 grn-110 lg:hidden block">Herbal Therapy</h6>
                    <p class="B4 grn-50 hidden lg:block">
                      Our herbal therapy solutions utilize over 1000 researched
                      and dehydrated herbs to provide safe and functional
                      wellness options.
                    </p>
                    <p class="B5 grn-50 lg:hidden block">
                      Our herbal therapy solutions utilize over 1000 researched
                      and dehydrated herbs to provide safe and functional
                      wellness options.
                    </p>
                  </div>
                </div>
                <div class="flex flex-row gap-4 lg:gap-6 py-8 px-6 lg:p-8 grn-10   rounded-2xl basis-u">
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block  self-center w-20 h-auto"
                    src={c2}
                    priority
                    quality={100}
                  />
                  <Image
                    alt="png will occupy here"
                    class="lg:hidden block self-start w-14 h-auto"
                    src={c2}
                    priority
                    quality={100}
                  />
                  <div class="flex flex-col gap-4">
                    <h5 class="H5 grn-110 hidden lg:block">Physical Therapy</h5>
                    <h6 class="H6 grn-110 lg:hidden block">Physical Therapy</h6>
                    <p class="B4 grn-50 hidden lg:block">
                      Our physical therapy sessions are tailored to meet
                      individual needs, promoting healing, mobility, and
                      improving quality of life.
                    </p>
                    <p class="B5 grn-50 lg:hidden block">
                      Our physical therapy sessions are tailored to meet
                      individual needs, promoting healing, mobility, and
                      improving quality of life.
                    </p>
                  </div>
                </div>
                <div class="flex flex-row gap-4 lg:gap-6 py-8 px-6 lg:p-8 grn-10   rounded-2xl basis-u">
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block  self-center w-20 h-auto"
                    src={c3}
                    priority
                    quality={100}
                  />
                  <Image
                    alt="png will occupy here"
                    class="lg:hidden block self-start w-14 h-auto"
                    src={c3}
                    priority
                    quality={100}
                  />
                  <div class="flex flex-col gap-4">
                    <h5 class="H5 grn-110 hidden lg:block">Massage</h5>
                    <h6 class="H6 grn-110 lg:hidden block">Massage</h6>
                    <p class="B4 grn-50 hidden lg:block">
                      Our massage services are therapeutic and relaxing, with
                      skilled therapists utilizing various techniques to soothe
                      muscles, reduce stress and enhance wellness.
                    </p>
                    <p class="B5 grn-50 lg:hidden block">
                      Our massage services are therapeutic and relaxing, with
                      skilled therapists utilizing various techniques to soothe
                      muscles, reduce stress and enhance wellness.
                    </p>
                  </div>
                </div>
                <div class="flex flex-row gap-4 lg:gap-6 py-8 px-6 lg:p-8 grn-10   rounded-2xl basis-u">
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block  self-center w-20 h-auto"
                    src={c4}
                    priority
                    quality={100}
                  />
                  <Image
                    alt="png will occupy here"
                    class="lg:hidden block self-start w-14 h-auto"
                    src={c4}
                    priority
                    quality={100}
                  />
                  <div class="flex flex-col gap-4">
                    <h5 class="H5 grn-110 hidden lg:block">Acupressure</h5>
                    <h6 class="H6 grn-110 lg:hidden block">Acupressure</h6>
                    <p class="B4 grn-50 hidden lg:block">
                      Our acupressure sessions involve the application of
                      pressure to specific points on the body to promote
                      healing, reduce pain, and improve overall wellbeing.
                    </p>
                    <p class="B5 grn-50 lg:hidden block">
                      Our acupressure sessions involve the application of
                      pressure to specific points on the body to promote
                      healing, reduce pain, and improve overall wellbeing.
                    </p>
                  </div>
                </div>
                <div class="flex flex-row gap-4 lg:gap-6 py-8 px-6 lg:p-8 grn-10   rounded-2xl basis-u">
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block  self-center w-20 h-auto"
                    src={c5}
                    priority
                    quality={100}
                  />
                  <Image
                    alt="png will occupy here"
                    class="lg:hidden block self-start w-14 h-auto"
                    src={c5}
                    priority
                    quality={100}
                  />
                  <div class="flex flex-col gap-4">
                    <h5 class="H5 grn-110 hidden lg:block">Naturopathy</h5>
                    <h6 class="H6 grn-110 lg:hidden block">Naturopathy</h6>
                    <p class="B4 grn-50 hidden lg:block">
                      Our naturopathy approach seeks to treat the whole person
                      and not just the symptoms, utilizing natural remedies and
                      techniques to restore balance and promote wellness.
                    </p>
                    <p class="B5 grn-50 lg:hidden block">
                      Our naturopathy approach seeks to treat the whole person
                      and not just the symptoms, utilizing natural remedies and
                      techniques to restore balance and promote wellness.
                    </p>
                  </div>
                </div>
                <div class="flex flex-row gap-4 lg:gap-6 py-8 px-6 lg:p-8 grn-10   rounded-2xl basis-u">
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block  self-center w-20 h-auto"
                    src={c6}
                    priority
                    quality={100}
                  />
                  <Image
                    alt="png will occupy here"
                    class="lg:hidden block self-start w-14 h-auto"
                    src={c6}
                    priority
                    quality={100}
                  />

                  <div class="flex flex-col gap-4 w-auto">
                    <h5 class="H5 grn-110 hidden lg:block">Counselling</h5>
                    <h6 class="H6 grn-110 lg:hidden block">Counselling</h6>
                    <p class="B4 grn-50 hidden lg:block">
                      Our counseling services offer emotional support, advice
                      and guidance for individuals struggling with mental health
                      or personal issues.
                    </p>
                    <p class="B5 grn-50 lg:hidden block">
                      Our counseling services offer emotional support, advice
                      and guidance for individuals struggling with mental health
                      or personal issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:pt-12 pt-6 flex lg:justify-center gap-6">
              <Link href="#contact" class="buttonM hidden lg:block H6">
                Book a Consultation
              </Link>
              <Link href="#contact" class="buttonM lg:hidden block subH">
                Book a Consultation
              </Link>
              <Link href="#contact" class="buttonO hidden lg:block H6">
                Learn More
              </Link>
              <Link href="#contact" class="buttonO lg:hidden block subH">
                Learn More
              </Link>
            </div>

            <div
              id="productions"
              class="lg:pt-32 pt-20 flex w-full justify-between"
            >
              <h4 class="H5 hidden lg:block self-end">Production</h4>
              <h4 class="H5 lg:hidden block self-end">Production</h4>
              <div class="lg:hidden flex flex-row items-center justify-center gap-2">
                <button id="prevBtnn" class="buttonO2 gap-2 subH flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button id="nextBtnn" class="buttonM2 gap-2 subH flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div class="hidden lg:flex flex-row gap-4">
                <button id="prevBtn" class="buttonO hidden lg:flex gap-2 H6">
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
                <button id="nextBtn" class="buttonM hidden lg:flex gap-2 H6">
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

            <div id="slideshow-container" class="pt-8">
              <div id="slideshow">
                <div class="slid lg:px-6">
                  <Image
                    class="H4 text-center hidden lg:block self-center w-full h-auto"
                    src={p1}
                    alt="Local Herbs and Leaves"
                    priority
                    quality={100}
                  />
                  <Image
                    class="H4 text-center lg:hidden block self-center"
                    src={p1}
                    alt="Local Herbs and Leaves"
                    priority
                    quality={100}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Local Herbs and Leaves
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">
                    Local Herbs and Leaves
                  </h4>
                </div>
                <div class="slid lg:px-6">
                  <Image
                    class="H4 text-center hidden lg:block self-center w-full h-auto"
                    src={p2}
                    alt="Local Roots and Barks"
                    priority
                    quality={100}
                  />
                  <Image
                    class="H4 text-center lg:hidden block self-center"
                    src={p2}
                    alt="Local Roots and Barks"
                    priority
                    quality={100}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Local Roots and Barks
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">
                    Local Roots and Barks
                  </h4>
                </div>
                <div class="slid lg:px-6">
                  <Image
                    class="H4 text-center hidden lg:block self-center w-full h-auto"
                    src={p3}
                    alt="Seeds, Flowers and Fruits"
                    priority
                    quality={100}
                  />
                  <Image
                    class="H4 text-center lg:hidden block self-center"
                    src={p3}
                    priority
                    alt="Seeds, Flowers and Fruits"
                    quality={100}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Seeds, Flowers and Fruits
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">
                    Seeds, Flowers and Fruits
                  </h4>
                </div>
                <div class="slid lg:px-6">
                  <Image
                    alt="Spices"
                    class="H4 text-center hidden lg:block self-center"
                    src={p4}
                    priority
                    quality={100}
                  />
                  <Image
                    class="H4 text-center lg:hidden block self-center"
                    src={p4}
                    alt="Spices"
                    priority
                    quality={100}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Spices
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">Spices</h4>
                </div>
                <div class="slid lg:px-6">
                  <Image
                    class="H4 text-center hidden lg:block self-center w-full h-auto"
                    src={p5}
                    alt="Foreign Products"
                    priority
                    quality={100}
                  />
                  <Image
                    class="H4 text-center lg:hidden block self-center"
                    src={p5}
                    alt="Foreign Products"
                    priority
                    quality={100}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Foreign Products
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">
                    Foreign Products
                  </h4>
                </div>
                <div class="slid lg:px-6">
                  <Image
                    class="H4 text-center hidden lg:block self-center w-full h-auto"
                    src={p6}
                    alt="Oils and Fluids"
                    priority
                    quality={100}
                  />
                  <Image
                    class="H4 text-center lg:hidden block self-center"
                    src={p6}
                    priority
                    alt="Oils and Fluids"
                    quality={100}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Oils and Fluids
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">
                    Oils and Fluids
                  </h4>
                </div>
                <div class="slid lg:px-6">
                  <Image
                    class="H4 text-center hidden lg:block self-center w-full h-auto"
                    src={p7}
                    alt="Teas"
                    priority
                    quality={100}
                  />
                  <Image
                    class="H4 text-center lg:hidden block self-center"
                    src={p7}
                    alt="Teas"
                    priority
                    quality={100}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Teas
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">Teas</h4>
                </div>
                <div class="slid lg:px-6">
                  <Image
                    class="H4 text-center hidden lg:block self-center w-full h-auto"
                    src={p8}
                    alt="Apparatus"
                    priority
                    quality={100}
                  />
                  <Image
                    class="H4 text-center lg:hidden block self-center"
                    src={p8}
                    priority
                    alt="Apparatus"
                    quality={100}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Apparatus
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">
                    Apparatus
                  </h4>
                </div>
                <div class="slid lg:px-6">
                  <Image
                    class="H4 text-center hidden lg:block self-center w-full h-auto"
                    src={p9}
                    alt="Cosmetics - Creams/Soaps"
                    priority
                    quality={100}
                  />
                  <Image
                    class="H4 text-center lg:hidden block self-center"
                    src={p9}
                    priority
                    quality={100}
                    alt="Cosmetics - Creams/Soaps"
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Cosmetics - Creams/Soaps
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">
                    Cosmetics - Creams/Soaps
                  </h4>
                </div>
                <div class="slid lg:px-6">
                  <Image
                    class="H4 text-center hidden lg:block self-center w-full h-auto"
                    src={p10}
                    alt="Salts, Edibles and Miscellaneous"
                    priority
                    quality={100}
                  />
                  <Image
                    class="H4 text-center lg:hidden mlock self-center"
                    src={p10}
                    alt="Salts, Edibles and Miscellaneous"
                    priority
                    quality={100}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Salts, Edibles and Miscellaneous
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">
                    Salts, Edibles and Miscellaneous
                  </h4>
                </div>
              </div>
            </div>

            <div class="lg:pt-12 pt-6 flex lg:justify-center gap-6">
              <Link href="#contact" class="buttonM hidden lg:block H6">
                Reach Out to US
              </Link>
              <Link href="#contact" class="buttonM lg:hidden block subH">
                Reach Out to US
              </Link>
              <a
                href="/Salym-new-products-and-pricing.pdf"
                target="_blank"
                class="buttonO hidden lg:block H6"
              >
                View Catalogue
              </a>
              <a
                href="/Salym-new-products-and-pricing.pdf"
                target="_blank"
                class="buttonO lg:hidden block subH"
              >
                View Catalogue
              </a>
            </div>
          </div>
        </section>

        {posts ? <BlogComponent posts={posts} /> : <div></div>}

        <section id="newsletter" class=" pt-32 lg:pt-48">
          <div class="outer-m">
            <div class="newws lg:rounded-2xl px-4 py-10 lg:py-16 flex justify-center items-center text-white flex-col gap-6 lg:gap-10">
              <h2 class="H4 text-center hidden lg:block">
                Subscribe to our newsletter
              </h2>
              <h2 class="H5 lg:hidden block">Subscribe to our newsletter</h2>
              <p class="B4 grn-10x hidden lg:block black7 max-w-xl text-center">
                Discover the latest health and wellness tips, exclusive
                discounts, and updates on our products and services by
                subscribing to our newsletter. Join our community of like-minded
                individuals and businesses who prioritize their health and
                well-being. Do not miss out, sign up today and stay informed.
              </p>
              <p class="B5 grn-10x lg:hidden block black7 max-w-xl">
                Discover the latest health and wellness tips, exclusive
                discounts, and updates on our products and services by
                subscribing to our newsletter. Join our community of like-minded
                individuals and businesses who prioritize their health and
                well-being. Do not miss out, sign up today and stay informed.
              </p>
              <form
                onSubmit={subHandler2}
                class="labelcont flex justify-center w-full"
              >
                <input
                  class="newsletterI"
                  type="email"
                  placeholder="you@example.com"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <button id="low-sub" class="newS">
                  Subscribe
                </button>
                <div id="low-sub2" class="buttonNn flex gap-2">
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
        </section>

        <section id="testimonials" class=" pt-32 lg:pt-48">
          <div class="flex flex-col lg:justify-center gap-4">
            <h4 class="H4 text-center hidden lg:block">Testimonials</h4>
            <h4 class="H5 lg:hidden block">Testimonials</h4>
            <div class="w-full flex lg:justify-center">
              <p class="B4 hidden lg:block black7 max-w-2xl text-center">
                Read what our satisfied clients have to say about our
                naturopathic wellness solutions and how they have positively
                impacted their lives.
              </p>
              <p class="B5 lg:hidden block black7 max-w-2xl">
                Read what our satisfied clients have to say about our
                naturopathic wellness solutions and how they have positively
                impacted their lives.
              </p>
            </div>
          </div>

          <div id="tslideshow-container">
            <div id="tslideshow" class="md:pt-16 pt-8 flex flex-row lg:gap-8">
              <div class="tc">
                <div class="flex ttc flex-col gap-8">
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block self-start"
                    src="/t1.svg"
                    priority
                    width="80"
                    height="80"
                    quality={100}
                  />
                  <Image
                    alt="png will occupy here"
                    class="H5 lg:hidden block"
                    src="/t1.svg"
                    width="64"
                    height="64"
                    priority
                    quality={100}
                  />
                  <p class="B4 hidden lg:block black7 max-w-2xl">
                    Salym Wellness Centre has been a game-changer for my
                    well-being. Their immune booster and herbal tea blends have
                    significantly improved my health. I'm grateful for their
                    commitment to providing safe and effective herbal solutions.
                    Highly recommended for a holistic approach to wellness.
                  </p>
                  <p class="B5 lg:hidden block black7 max-w-2xl ">
                    Salym Wellness Centre has been a game-changer for my
                    well-being. Their immune booster and herbal tea blends have
                    significantly improved my health. I'm grateful for their
                    commitment to providing safe and effective herbal solutions.
                    Highly recommended for a holistic approach to wellness.
                  </p>
                  <div class="flex-col gap-2 hidden lg:flex">
                    <p class="h6">Amina Bello</p>
                    <p class="h6 black7">Entrepreneur</p>
                  </div>
                  <div class="flex-col gap-2 lg:hidden flex">
                    <p class="subH">Amina Bello</p>
                    <p class="subH black7">Entrepreneur</p>
                  </div>
                </div>
              </div>
              <div class="tc">
                <div class="flex ttc flex-col gap-8">
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block self-start"
                    src="/quote-up.svg"
                    priority
                    width="24"
                    height="24"
                    quality={100}
                  />
                  <Image
                    alt="png will occupy here"
                    class="H5 lg:hidden block"
                    src="/quote-up.svg"
                    width="24"
                    height="24"
                    priority
                    quality={100}
                  />
                  <p class="B4 hidden lg:block black7 max-w-2xl">
                    As a pharmacist, I always seek high-quality herbal medicine
                    suppliers. Salym Wellness Centre exceeds my expectations
                    with their extensive range of herbal products. The
                    Organoleptic Method they employ ensures safety and efficacy.
                    A reliable partner for my practice.
                  </p>
                  <p class="B5 lg:hidden block black7 max-w-2xl ">
                    As a pharmacist, I always seek high-quality herbal medicine
                    suppliers. Salym Wellness Centre exceeds my expectations
                    with their extensive range of herbal products. The
                    Organoleptic Method they employ ensures safety and efficacy.
                    A reliable partner for my practice.
                  </p>
                  <div class="flex-row gap-4 hidden lg:flex items-center">
                    <Image
                      alt="png will occupy here"
                      src="/t2.svg"
                      priority
                      width="80"
                      height="80"
                      quality={100}
                    />
                    <div class="flex flex-col gap-2">
                      <p class="h6">Chioma Okonkwo</p>
                      <p class="h6 black7">Pharmacist</p>
                    </div>
                  </div>
                  <div class="flex-row gap-2 lg:hidden flex items-center">
                    <Image
                      alt="png will occupy here"
                      src="/t2.svg"
                      width="64"
                      height="64"
                      priority
                      quality={100}
                    />
                    <div class="flex flex-col gap-2">
                      <p class="subH">Chioma Okonkwo</p>
                      <p class="subH black7">Pharmacist</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tc">
                <div class="flex ttc flex-col gap-8">
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block self-start"
                    src="/t3.svg"
                    priority
                    width="80"
                    height="80"
                    quality={100}
                  />
                  <Image
                    alt="png will occupy here"
                    class="H5 lg:hidden block"
                    src="/t3.svg"
                    width="64"
                    height="64"
                    priority
                    quality={100}
                  />
                  <p class="B4 hidden lg:block black7 max-w-2xl">
                    I've integrated Salym Wellness Centre's herbal therapy into
                    my practice, and my clients have experienced remarkable
                    results. Their commitment to using indigenous sources and
                    comprehensive process documentation sets them apart. A
                    trusted brand in the field of naturopathy.
                  </p>
                  <p class="B5 lg:hidden block black7 max-w-2xl ">
                    I've integrated Salym Wellness Centre's herbal therapy into
                    my practice, and my clients have experienced remarkable
                    results. Their commitment to using indigenous sources and
                    comprehensive process documentation sets them apart. A
                    trusted brand in the field of naturopathy.
                  </p>
                  <div>
                    <div class="flex-col gap-2 hidden lg:flex">
                      <p class="h6">Ibrahim Adekunle</p>
                      <p class="h6 black7">Naturopath</p>
                    </div>
                    <div class="flex-col gap-2 lg:hidden flex">
                      <p class="subH">Ibrahim Adekunle</p>
                      <p class="subH black7">Naturopath</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:hidden flex flex-row pt-4 gap-2">
            <button id="prevBtnx" class="buttonO4 gap-2 subH flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button id="nextBtnx" class="buttonM4 gap-2 subH flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </section>

        <section id="contact" class="onwss">
          <div class="flex flex-col lg:justify-center gap-4">
            <h4 class="H4 text-center hidden lg:block">Get in Touch</h4>
            <h4 class="H5 lg:hidden block">Get in Touch</h4>
            <div class="w-full flex lg:justify-center">
              <p class="B4 hidden lg:block black7 max-w-2xl text-center">
                Get in touch to book consultations, ask questions, or learn more
                about our services. We are always happy to hear from you!
              </p>
              <p class="B5 lg:hidden block black7 max-w-2xl">
                Get in touch to book consultations, ask questions, or learn more
                about our services. We are always happy to hear from you!
              </p>
            </div>
          </div>

          <div class="flex consus justify-center items-center w-full pt-8 lg:pt-16">
            <form
              onSubmit={contactHandler}
              class="max-w-xl bg-white caax flex flex-col gap-8 w-full"
            >
              <div class="flex flex-col gap-2 w-full">
                <label class="la1 hidden lg:block H6">
                  Full Name <span class="text-red-600">*</span>
                </label>
                <label class="la1 lg:hidden block subH">
                  Full Name <span class="text-red-600">*</span>
                </label>
                <div class="w-full">
                  <input
                    class="in1 outline-none"
                    type="text"
                    placeholder="John Doe"
                    required
                    onChange={(e) => {
                      setfname(e.target.value);
                    }}
                    value={fname}
                  />
                </div>
              </div>
              <div class="flex flex-col lg:flex-row gap-8">
                <div class="flex flex-col gap-2 w-full">
                  <label class="la1 hidden lg:block H6">
                    Phone Number <span class="text-red-600">*</span>
                  </label>
                  <label class="la1 lg:hidden block subH">
                    Phone Number <span class="text-red-600">*</span>
                  </label>
                  <div class="w-full">
                    <input
                      class="in1 outline-none"
                      type="text"
                      placeholder="+23412345678"
                      required
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      value={phone}
                    />
                  </div>
                </div>
                <div class="flex flex-col gap-2 w-full">
                  <label class="la1 hidden lg:block H6">
                    Email Address <span class="text-red-600">*</span>
                  </label>
                  <label class="la1 lg:hidden block subH">
                    Email Address <span class="text-red-600">*</span>
                  </label>
                  <div class="w-full">
                    <input
                      class="in1 outline-none"
                      type="text"
                      placeholder="you@example.com"
                      required
                      onChange={(e) => {
                        setEmailAddress(e.target.value);
                      }}
                      value={emailAddress}
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-2 w-full">
                <label class="la1 hidden lg:block H6">Company Name</label>
                <label class="la1 lg:hidden block subH">Company Name</label>
                <div class="w-full">
                  <input
                    class="in1 outline-none"
                    type="text"
                    placeholder="John Doe"
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                    }}
                    value={companyName}
                  />
                </div>
              </div>
              <div class="flex flex-col gap-2 w-full">
                <label class="la1 hidden lg:block H6">
                  Preferred Method of Contact{" "}
                  <span class="text-red-600">*</span>
                </label>
                <label class="la1 lg:hidden block subH">
                  Preferred Method of Contact{" "}
                  <span class="text-red-600">*</span>
                </label>
                <div class="w-full">
                  <select
                    name="preferredMethod"
                    id="preferredMethod"
                    class="dropdown-icon in1 outline-none"
                    required
                    onChange={(e) => {
                      setMethodOfContact(e.target.value);
                    }}
                    value={methodOfContact}
                  >
                    <option value="" disabled selected>
                      Select an option
                    </option>
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                    <option value="Text Message">Text Message</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-col gap-4 w-full">
                <label class="la1 hidden lg:block H6">
                  I would like to: <span class="text-red-600">*</span>
                </label>
                <label class="la1 lg:hidden block subH">
                  I would like to: <span class="text-red-600">*</span>
                </label>
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <input
                      class="w-6 h-6 radio"
                      type="radio"
                      id="bookConsultation"
                      name="purpose"
                      required
                      onChange={(e) => {
                        setLike(e.target.value);
                      }}
                      value={like === "Book A Consultation"}
                    />
                    <label class="text-sm lg:text-base" for="bookConsultation">
                      Book a Consultation
                    </label>
                  </div>
                  <div class="flex items-center gap-2">
                    <input
                      class="w-6 h-6 radio"
                      type="radio"
                      id="contactUs"
                      name="purpose"
                      required
                      onChange={(e) => {
                        setLike(e.target.value);
                      }}
                      value={like === "Contact Us"}
                    />
                    <label class="text-sm lg:text-base" for="contactUs">
                      Contact Us
                    </label>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-4 w-full">
                <label class="la1 hidden lg:block H6">
                  I am interested in: <span class="text-red-600">*</span>
                </label>
                <label class="la1 lg:hidden block subH">
                  I am interested in: <span class="text-red-600">*</span>
                </label>
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <input
                      class="w-6 h-6 checkbox"
                      type="checkbox"
                      id="clinicalservices"
                      name="Clinicals"
                      checked={interest.Clinicals}
                      onChange={(e) => {
                        const { name, checked } = e.target;
                        setInterest({ ...interest, [name]: checked });
                      }}
                    />
                    <label class="text-sm lg:text-base" for="clinicalservices">
                      Clinical Services
                    </label>
                  </div>
                  <div class="flex items-center gap-2">
                    <input
                      class="w-6 h-6 checkbox"
                      type="checkbox"
                      id="productions"
                      name="Productions"
                      checked={interest.Productions}
                      onChange={(e) => {
                        const { name, checked } = e.target;
                        setInterest({ ...interest, [name]: checked });
                      }}
                    />
                    <label class="text-sm lg:text-base" for="productions">
                      Productions
                    </label>
                  </div>
                  <div class="flex items-center gap-2">
                    <input
                      class="w-6 h-6 checkbox"
                      type="checkbox"
                      id="newsorblog"
                      name="NewsorBlog"
                      checked={interest.NewsorBlog}
                      onChange={(e) => {
                        const { name, checked } = e.target;
                        setInterest({ ...interest, [name]: checked });
                      }}
                    />
                    <label class="text-sm lg:text-base" for="newsorblog">
                      Newsletter or Blog
                    </label>
                  </div>
                </div>
              </div>
              <div id="low-contact" class="flex pt-2 lg:justify-center ">
                <button class="buttonM hidden lg:block H6">
                  Contact us today
                </button>
                <button class="buttonM lg:hidden block subH">
                  Contact us today
                </button>
              </div>
              <div id="low-contact2" class=" hidden pt-2 lg:justify-center ">
                <div class="buttonMm gap-2 hidden lg:flex  H6">
                  Contact us today
                  <img
                    class="w-6 h-6 spinner"
                    src="/spinner.svg"
                    alt="spinner"
                  />
                </div>
                <div class="buttonMm gap-2 lg:hidden flex subH">
                  Contact us today
                  <img
                    class="w-6 h-6 spinner"
                    src="/spinner.svg"
                    alt="spinner"
                  />
                </div>
              </div>
            </form>
          </div>
        </section>

      </main>
        <footer class="onwsss">
          <div class="footer px-6 text-white">
            <div class="flex flex-col gap-16 pt-10 lg:pt-20">
              <div class="gap-6 flex flex-col">
                <h4 class="H5 hidden lg:block">Our Office</h4>
                <h4 class="H5 lg:hidden block">Our Office</h4>
                <p class="B4 hidden lg:flex gap-4 items-center">
                  <Image
                    alt="png will occupy here"
                    src="/house-2.svg"
                    class=""
                    width="24"
                    height="24"
                    quality={100}
                    priority
                  />
                  1 Qudus Hassan Close, Santos, Idi Mangoro. Lagos. NG
                </p>
                <p class="B5 lg:hidden flex gap-2 items-center">
                  <Image
                    alt="png will occupy here"
                    src="/house-2.svg"
                    class=""
                    width="20"
                    height="20"
                    quality={100}
                    priority
                  />
                  1 Qudus Hassan Close, Santos, Idi Mangoro. Lagos. NG
                </p>
              </div>
              <div class="gap-6 flex flex-col">
                <h4 class="H5 hidden lg:block">Our Contact</h4>
                <h4 class="H5 lg:hidden block">Our Contact</h4>
                <div class="flex flex-col gap-4">
                  <p class="B4 hidden lg:flex gap-4 items-center">
                    <Image
                      alt="png will occupy here"
                      src="/call.svg"
                      class=""
                      width="24"
                      height="24"
                      quality={100}
                      priority
                    />
                    +2348057532485
                  </p>
                  <p class="B5 lg:hidden flex gap-2 items-center">
                    <Image
                      alt="png will occupy here"
                      src="/call.svg"
                      class=""
                      width="20"
                      height="20"
                      quality={100}
                      priority
                    />
                    +2348057532485
                  </p>
                  <p class="B4 hidden lg:flex gap-4 items-center">
                    <Image
                      alt="png will occupy here"
                      src="/sms.svg"
                      class=""
                      width="24"
                      height="24"
                      quality={100}
                      priority
                    />
                    muilisalimot@salymwellness.center
                  </p>
                  <p class="B5 lg:hidden flex gap-2 items-center">
                    <Image
                      alt="png will occupy here"
                      src="/sms.svg"
                      class=""
                      width="20"
                      height="20"
                      quality={100}
                      priority
                    />
                    muilisalimot@salymwellness.center
                  </p>
                  <p class="B4 hidden lg:flex gap-4 items-center">
                    <Image
                      alt="png will occupy here"
                      src="/call.svg"
                      class=""
                      width="24"
                      height="24"
                      quality={100}
                      priority
                    />
                    +2348061782702
                  </p>
                  <p class="B5 lg:hidden flex gap-2 items-center">
                    <Image
                      alt="png will occupy here"
                      src="/call.svg"
                      class=""
                      width="20"
                      height="20"
                      quality={100}
                      priority
                    />
                    +2348061782702
                  </p>
                  <p class="B4 hidden lg:flex gap-4 items-center">
                    <Image
                      alt="png will occupy here"
                      src="/sms.svg"
                      class=""
                      width="24"
                      height="24"
                      quality={100}
                      priority
                    />
                    info@salymwellness.center
                  </p>
                  <p class="B5 lg:hidden flex gap-2 items-center">
                    <Image
                      alt="png will occupy here"
                      src="/sms.svg"
                      class=""
                      width="20"
                      height="20"
                      quality={100}
                      priority
                    />
                    info@salymwellness.center
                  </p>
                </div>
              </div>
            </div>

            <div class="flex lg:flex-row flex-col justify-between lg:items-center pt-16">
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
                  href="/blog"
                  class="hover:text-green-200 H6 hidden lg:block"
                >
                  Blog
                </Link>
                <Link
                  href="/blog"
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
