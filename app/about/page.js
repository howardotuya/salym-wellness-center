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
  useEffect(() => {
    var closeButtons = document.getElementsByClassName("colse");
    for (var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener("click", function () {
        document.getElementById("modales").style.display = "none";
        document.getElementById("modalss").style.display = "none";
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

  const contactHandler = async (e) => {
    e.preventDefault();

    document.getElementById("low-contact").style.display = "none";
    document.getElementById("low-contact2").style.display = "flex";

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/mail/contact",
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

      document.getElementById("modalss").style.display = "flex";
      document.getElementById("low-contact").style.display = "flex";
      document.getElementById("low-contact2").style.display = "none";
      setEmail("");
    } catch (error) {
      document.getElementById("modales").style.display = "flex";
      document.getElementById("low-contact").style.display = "flex";
      document.getElementById("low-contact2").style.display = "none";
      setEmail("");
    }
  };
  return (
    <>
      <div
        id="modalss"
        class="flex px-6 justify-center items-center w-full h-full"
      >
        <div class="max-w-xl success w-full items-center rounded-2xl bg-white flex flex-col px-4 lg:px-6 py-10 gap-4 lg:gap-6">
          <div>
            <Image
              alt="png will occupy here"
              class="H4 text-center hidden lg:block self-start"
              src="/success.svg"
              priority
              width="96"
              height="96"
              quality={100}
              unoptimized={true}
            />
            <Image
              alt="png will occupy here"
              class="H5 lg:hidden block"
              src="/success.svg"
              width="64"
              height="64"
              priority
              quality={100}
              unoptimized={true}
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
        <div class="max-w-xl danger w-full items-center rounded-2xl bg-white flex flex-col px-6 py-10 gap-6">
          <div>
            <Image
              alt="png will occupy here"
              class="H4 text-center hidden lg:block self-start"
              src="/danger.svg"
              priority
              width="96"
              height="96"
              quality={100}
              unoptimized={true}
            />
            <Image
              alt="png will occupy here"
              class="H5 lg:hidden block"
              src="/danger.svg"
              width="64"
              height="64"
              priority
              quality={100}
              unoptimized={true}
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
              Sorry, we couldn't process your subscription. Please try again.
            </p>
            <p class="B5 grn-50 lg:hidden block">
              Sorry, we couldn't process your subscription. Please try again.
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
        <div class="max-w-xl success w-full items-center rounded-2xl bg-white flex flex-col px-4 lg:px-6 py-10 gap-4 lg:gap-6">
          <div>
            <Image
              alt="png will occupy here"
              class="H4 text-center hidden lg:block self-start"
              src="/success.svg"
              priority
              width="96"
              height="96"
              quality={100}
              unoptimized={true}
            />
            <Image
              alt="png will occupy here"
              class="H5 lg:hidden block"
              src="/success.svg"
              width="64"
              height="64"
              priority
              quality={100}
              unoptimized={true}
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
        id="modales"
        class="flex px-6 justify-center items-center w-full h-full"
      >
        <div class="max-w-xl danger w-full items-center rounded-2xl bg-white flex flex-col px-6 py-10 gap-6">
          <div>
            <Image
              alt="png will occupy here"
              class="H4 text-center hidden lg:block self-start"
              src="/danger.svg"
              priority
              width="96"
              height="96"
              quality={100}
              unoptimized={true}
            />
            <Image
              alt="png will occupy here"
              class="H5 lg:hidden block"
              src="/danger.svg"
              width="64"
              height="64"
              priority
              quality={100}
              unoptimized={true}
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

        <section class="missionvision pt-24 lg:pt-32">
          <div class="flex flex-col lg:flex-row gap-6 ">
            <div class="px-4 lg:px-6 py-8 grn-10 flex flex-col gap-4 lg:gap-6 rounded-lg flex-grow  basis-0">
              <Image
                alt="png will occupy here"
                class="H4 text-center hidden lg:block self-start"
                src="/viss.png"
                priority
                width="80"
                height="80"
                quality={100}
                unoptimized={true}
              />
              <Image
                alt="png will occupy here"
                class=" lg:hidden block"
                src="/viss.png"
                width="56"
                height="56"
                priority
                quality={100}
                unoptimized={true}
              />
              <h5 class="H5 grn-110 hidden lg:block">Our Mission</h5>
              <h5 class="H6 grn-110 lg:hidden block">Our Mission</h5>
              <p class="B4 grn-50 hidden lg:block">
                To promote a harmonious balance between health, nature, and the
                environment by providing natural wellness solutions that draw on
                indigenous sources. We believe in the power of nature to heal
                and enhance our lives, and we are committed to providing
                exceptional care and support through our range of services. Join
                us in our journey to discover the benefits of natural wellness
                solutions and achieve a healthier, more fulfilling life.
              </p>
              <p class="B5 grn-50 lg:hidden block">
                To promote a harmonious balance between health, nature, and the
                environment by providing natural wellness solutions that draw on
                indigenous sources. We believe in the power of nature to heal
                and enhance our lives, and we are committed to providing
                exceptional care and support through our range of services. Join
                us in our journey to discover the benefits of natural wellness
                solutions and achieve a healthier, more fulfilling life.
              </p>
            </div>
            <div class="px-4 lg:px-6 py-8 grn-10 flex flex-col gap-4 lg:gap-6 rounded-lg flex-grow  basis-0">
              <Image
                alt="png will occupy here"
                class="H4 text-center hidden lg:block self-start"
                src="/mins.png"
                priority
                width="80"
                height="80"
                quality={100}
                unoptimized={true}
              />
              <Image
                alt="png will occupy here"
                class="H5 lg:hidden block"
                src="/mins.png"
                width="56"
                height="56"
                priority
                quality={100}
                unoptimized={true}
              />
              <h5 class="H5 grn-110 hidden lg:block">Our Vision</h5>
              <h5 class="H6 grn-110 lg:hidden block">Our Vision</h5>
              <p class="B4 grn-50 hidden lg:block">
                To become the leading producer of natural herbal medical
                products in Africa. We strive to empower our customers with the
                best of nature's healing power, and provide safe and effective
                solutions for their health needs. With a focus on indigenous
                sources and a commitment to the environment, It is our main aim
                to bring a balanced approach to healthcare and make natural
                wellness accessible to every human being.
              </p>
              <p class="B5 grn-50 lg:hidden block">
                To become the leading producer of natural herbal medical
                products in Africa. We strive to empower our customers with the
                best of nature's healing power, and provide safe and effective
                solutions for their health needs. With a focus on indigenous
                sources and a commitment to the environment, It is our main aim
                to bring a balanced approach to healthcare and make natural
                wellness accessible to every human being.
              </p>
            </div>
          </div>
        </section>

        <section class="whychoose pt-24 lg:pt-48 flex flex-col gap-8 lg:gap-16">
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
            <div class="lg:px-4 px-6 py-8 grn-10 flex flex-col gap-4 rounded-lg flex-grow  basis-0 self-start lg:mt-16">
              <Image
                alt="png will occupy here"
                class="H4 text-center hidden lg:block self-start"
                src="/aw1.png"
                priority
                width="80"
                height="80"
                quality={100}
                unoptimized={true}
              />
              <Image
                alt="png will occupy here"
                class="H5 lg:hidden block"
                src="/aw1.png"
                width="56"
                height="56"
                priority
                quality={100}
                unoptimized={true}
              />
              <h5 class="H5 grn-110 hidden lg:block">+ 4 years</h5>
              <h5 class="H6 grn-110 lg:hidden block">+ 4 years</h5>
              <p class="B4 grn-50 hidden lg:block">
                We have been helping individuals and Businesses for over 4 years
                delivering quality natural wellness solutions
              </p>
              <p class="B5 grn-50 lg:hidden block">
                We have been helping individuals and Businesses for over 4 years
                delivering quality natural wellness solutions
              </p>
            </div>
            <div class="lg:px-4 px-6 py-8 grn-10 flex flex-col gap-4 rounded-lg flex-grow  basis-0 self-start">
              <Image
                alt="png will occupy here"
                class="H4 text-center hidden lg:block self-start"
                src="/aw2.png"
                priority
                width="80"
                height="80"
                quality={100}
                unoptimized={true}
              />
              <Image
                alt="png will occupy here"
                class="H5 lg:hidden block"
                src="/aw2.png"
                width="56"
                height="56"
                priority
                quality={100}
                unoptimized={true}
              />
              <h5 class="H5 grn-110 hidden lg:block">+ 70 Customers</h5>
              <h5 class="H6 grn-110 lg:hidden block">+ 70 Customers</h5>
              <p class="B4 grn-50 hidden lg:block">
                Serving over 70 satisfied customers with our personalized care
                in naturopathic wellness
              </p>
              <p class="B5 grn-50 lg:hidden block">
                Serving over 70 satisfied customers with our personalized care
                in naturopathic wellness
              </p>
            </div>
            <div class="lg:px-4 px-6 py-8 grn-10 flex flex-col gap-4 rounded-lg flex-grow  basis-0 self-start">
              <Image
                alt="png will occupy here"
                class="H4 text-center hidden lg:block self-start"
                src="/aw3.png"
                priority
                width="80"
                height="80"
                quality={100}
                unoptimized={true}
              />
              <Image
                alt="png will occupy here"
                class="H5 lg:hidden block"
                src="/aw3.png"
                width="56"
                height="56"
                priority
                quality={100}
                unoptimized={true}
              />
              <h5 class="H5 grn-110 hidden lg:block">+100 Million Generated</h5>
              <h5 class="H6 grn-110 lg:hidden block">+100 Million Generated</h5>
              <p class="B4 grn-50 hidden lg:block">
                Generated over 100 million in revenue through our natural
                wellness products and services
              </p>
              <p class="B5 grn-50 lg:hidden block">
                Generated over 100 million in revenue through our natural
                wellness products and services
              </p>
            </div>
            <div class="lg:px-4 px-6 py-8 grn-10 flex flex-col gap-4 rounded-lg flex-grow  basis-0 self-start lg:mt-16">
              <Image
                alt="png will occupy here"
                class="H4 text-center hidden lg:block self-start"
                src="/aw4.png"
                priority
                width="80"
                height="80"
                quality={100}
                unoptimized={true}
              />
              <Image
                alt="png will occupy here"
                class=" lg:hidden block"
                src="/aw4.png"
                width="56"
                height="56"
                priority
                quality={100}
                unoptimized={true}
              />
              <h5 class="H5 grn-110 hidden lg:block">7 Employees</h5>
              <h5 class="H6 grn-110 lg:hidden block">7 Employees</h5>
              <p class="B4 grn-50 hidden lg:block">
                Our team of 7 dedicated professionals committed to providing
                exceptional care and support
              </p>
              <p class="B5 grn-50 lg:hidden block">
                Our team of 7 dedicated professionals committed to providing
                exceptional care and support
              </p>
            </div>
          </div>
        </section>

        <section class="taraudience pt-24 lg:pt-48 flex flex-col gap-8 lg:gap-16">
          <div class="flex flex-col justify-center gap-4">
            <h4 class="H4 text-center hidden lg:block">Our Target Audience</h4>
            <h4 class="H5 lg:hidden block">Our Target Audience</h4>
            <div class="w-full flex lg:justify-center">
              <p class="B4 hidden lg:block black7 max-w-2xl text-center">
                Our target audience includes individuals and businesses who seek
                safe and functional herbal medicine solutions, promoting health
                and wellbeing.
              </p>
              <p class="B5 lg:hidden block black7 max-w-2xl ">
                Our target audience includes individuals and businesses who seek
                safe and functional herbal medicine solutions, promoting health
                and wellbeing.
              </p>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row gap-6 ">
            <div class="px-4 lg:px-6 py-8 grn-10 flex flex-col gap-4 lg:gap-6 rounded-lg flex-grow  basis-0">
              <Image
                alt="png will occupy here"
                class="H4 text-center hidden lg:block self-start"
                src="/indiv.png"
                priority
                width="80"
                height="80"
                quality={100}
                unoptimized={true}
              />
              <Image
                alt="png will occupy here"
                class=" lg:hidden block"
                src="/indiv.png"
                width="56"
                height="56"
                priority
                quality={100}
                unoptimized={true}
              />
              <h5 class="H5 grn-110 hidden lg:block">Individuals</h5>
              <h5 class="H6 grn-110 lg:hidden block">Individuals</h5>
              <p class="B4 grn-50 hidden lg:block">
                For the health-conscious individuals, Salym Wellness Centre
                offers naturopathic wellness solutions that are safe and
                effective. Whether you are managing a health condition or just
                interested in healthier options, our herbal therapies, physical
                therapy, and counseling services can help you achieve your
                health goals.
              </p>
              <p class="B5 grn-50 lg:hidden block">
                For the health-conscious individuals, Salym Wellness Centre
                offers naturopathic wellness solutions that are safe and
                effective. Whether you are managing a health condition or just
                interested in healthier options, our herbal therapies, physical
                therapy, and counseling services can help you achieve your
                health goals.
              </p>
            </div>
            <div class="px-4 lg:px-6 py-8 grn-10 flex flex-col gap-4 lg:gap-6 rounded-lg flex-grow  basis-0">
              <Image
                alt="png will occupy here"
                class="H4 text-center hidden lg:block self-start"
                src="/bussin.png"
                priority
                width="80"
                height="80"
                quality={100}
                unoptimized={true}
              />
              <Image
                alt="png will occupy here"
                class="H5 lg:hidden block"
                src="/bussin.png"
                width="56"
                height="56"
                priority
                quality={100}
                unoptimized={true}
              />
              <h5 class="H5 grn-110 hidden lg:block">Businesses</h5>
              <h5 class="H6 grn-110 lg:hidden block">Businesses</h5>
              <p class="B4 grn-50 hidden lg:block">
                Salym Wellness Centre supplies premium herbal products produced
                via the organoleptic method to pharmaceuticals and medical
                practitioners. Our thorough research and documentation ensure
                safe and dependable solutions, making us a reliable healthcare
                partner.
              </p>
              <p class="B5 grn-50 lg:hidden block">
                Salym Wellness Centre supplies premium herbal products produced
                via the organoleptic method to pharmaceuticals and medical
                practitioners. Our thorough research and documentation ensure
                safe and dependable solutions, making us a reliable healthcare
                partner.
              </p>
            </div>
          </div>
        </section>

        <section class="team pt-24 lg:pt-48 flex flex-col gap-8 lg:gap-16  ">
          <div class="flex justify-between items-end">
            <div class="flex flex-col gap-4">
              <h4 class="H4 hidden lg:block">Team</h4>
              <h4 class="H5 lg:hidden block">Team</h4>
              <div class="w-full flex">
                <p class="B4 hidden lg:block black7 max-w-xl">
                  Meet our licensed professionals committed to delivering
                  exceptional natural wellness solutions.
                </p>
                <p class="B5 lg:hidden block black7 max-w-xl ">
                  Meet our licensed professionals committed to delivering
                  exceptional natural wellness solutions.
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-8">
            <div class="rrr flex flex-col text-center gap-2">
              <img
                class="H4 rounded-2xl text-center block self-center"
                src="/f3.png"
              />
              <h4 class="H5 hidden lg:block pt-2">Dr. Muili Salimot</h4>
              <h4 class="H6 lg:hidden block">Dr. Muili Salimot</h4>
              <p class="B4 hidden lg:block black7">Founder & CEO</p>
              <p class="B5 lg:hidden block black7">Founder & CEO</p>
            </div>
            <div class="rrr flex flex-col text-center gap-2">
              <img
                class="H4 rounded-2xl text-center block self-center"
                src="/f1.png"
              />
              <h4 class="H5 hidden lg:block pt-2">Muili Kazeem</h4>
              <h4 class="H6 lg:hidden block">Muili Kazeem</h4>
              <p class="B4 hidden lg:block black7">Head of Operations</p>
              <p class="B5 lg:hidden block black7">Head of Operations</p>
            </div>
            <div class="rrr flex flex-col text-center gap-2">
              <img
                class="H4 rounded-2xl text-center block self-center"
                src="/f2.png"
              />
              <h4 class="H5 hidden lg:block pt-2">Musbaudeen Rianat</h4>
              <h4 class="H6 lg:hidden block">Musbaudeen Rianat</h4>
              <p class="B4 hidden lg:block black7">Production Manager</p>
              <p class="B5 lg:hidden block black7">Production Manager</p>
            </div>
            <div class="rrr flex flex-col text-center gap-2">
              <img
                class="H4 rounded-2xl text-center block self-center"
                src="/f6.png"
              />
              <h4 class="H5 hidden lg:block pt-2">Olatunji Christina</h4>
              <h4 class="H6 lg:hidden block">Olatunji Christina</h4>
              <p class="B4 hidden lg:block black7">Medical Therapist</p>
              <p class="B5 lg:hidden block black7">Medical Therapist</p>
            </div>
            <div class="rrr flex flex-col text-center gap-2">
              <img
                class="H4 rounded-2xl text-center block self-center"
                src="/f5.png"
              />
              <h4 class="H5 hidden lg:block pt-2">Omar Ifeoluwa</h4>
              <h4 class="H6 lg:hidden block">Omar Ifeoluwa</h4>
              <p class="B4 hidden lg:block black7">Head of Admin</p>
              <p class="B5 lg:hidden block black7">Head of Admin</p>
            </div>
          </div>
        </section>

        <section class="pt-24 lg:pt-48">
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
            <div class="lg:pt-16 pt-8 flex flex-col gap-6">
              <h4 class="H4 hidden lg:block">Clinicals</h4>
              <h4 class="H5 lg:hidden block">Clinicals</h4>

              <div class="flex flex-wrap gap-8">
                <div class="flex flex-row gap-4 lg:gap-6 py-8 px-6 lg:p-8 grn-10 rounded-2xl basis-u">
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block  self-center"
                    src="/c1.svg"
                    priority
                    width="80"
                    height="80"
                    quality={100}
                    unoptimized={true}
                  />
                  <Image
                    alt="png will occupy here"
                    class="lg:hidden block self-start"
                    src="/cc1.png"
                    width="48"
                    height="48"
                    priority
                    quality={100}
                    unoptimized={true}
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
                <div class="flex flex-row gap-4 lg:gap-6 py-8 px-6 lg:p-8 grn-10 rounded-2xl basis-u">
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block  self-center"
                    src="/c2.svg"
                    priority
                    width="80"
                    height="80"
                    quality={100}
                    unoptimized={true}
                  />
                  <Image
                    alt="png will occupy here"
                    class="lg:hidden block self-start"
                    src="/cc2.png"
                    width="48"
                    height="48"
                    priority
                    quality={100}
                    unoptimized={true}
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
                <div class="flex flex-row gap-4 lg:gap-6 py-8 px-6 lg:p-8 grn-10 rounded-2xl basis-u">
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block  self-center"
                    src="/c3.svg"
                    priority
                    width="80"
                    height="80"
                    quality={100}
                    unoptimized={true}
                  />
                  <Image
                    alt="png will occupy here"
                    class="lg:hidden block self-start"
                    src="/cc3.png"
                    width="48"
                    height="48"
                    priority
                    quality={100}
                    unoptimized={true}
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
                <div class="flex flex-row gap-4 lg:gap-6 py-8 px-6 lg:p-8 grn-10 rounded-2xl basis-u">
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block  self-center"
                    src="/c4.svg"
                    priority
                    width="80"
                    height="80"
                    quality={100}
                    unoptimized={true}
                  />
                  <Image
                    alt="png will occupy here"
                    class="lg:hidden block self-start"
                    src="/cc4.png"
                    width="48"
                    height="48"
                    priority
                    quality={100}
                    unoptimized={true}
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
                <div class="flex flex-row gap-4 lg:gap-6 py-8 px-6 lg:p-8 grn-10 rounded-2xl basis-u">
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block  self-center"
                    src="/c5.svg"
                    priority
                    width="80"
                    height="80"
                    quality={100}
                    unoptimized={true}
                  />
                  <Image
                    alt="png will occupy here"
                    class="lg:hidden block self-start"
                    src="/cc5.png"
                    width="48"
                    height="48"
                    priority
                    quality={100}
                    unoptimized={true}
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
                <div class="flex flex-row gap-4 lg:gap-6 py-8 px-6 lg:p-8 grn-10 rounded-2xl basis-u">
                  <Image
                    alt="png will occupy here"
                    class="H4 text-center hidden lg:block  self-center"
                    src="/c6.svg"
                    priority
                    width="80"
                    height="80"
                    quality={100}
                    unoptimized={true}
                  />
                  <Image
                    alt="png will occupy here"
                    class="lg:hidden block self-start"
                    src="/cc6.png"
                    width="48"
                    height="48"
                    priority
                    quality={100}
                    unoptimized={true}
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
              <button class="buttonM hidden lg:block H6">
                Book a Consultation
              </button>
              <button class="buttonM lg:hidden block subH">
                Book a Consultation
              </button>
              <button class="buttonO hidden lg:block H6">Learn More</button>
              <button class="buttonO lg:hidden block subH">Learn More</button>
            </div>

            <div class="lg:pt-24 pt-20 flex w-full justify-between">
              <h4 class="H4 hidden lg:block self-end">Production</h4>
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
                  <img
                    class="H4 text-center hidden lg:block self-center"
                    src="/p1.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <img
                    class="H4 text-center lg:hidden block self-center"
                    src="/p1.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Local Herbs and Leaves
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">
                    Local Herbs and Leaves
                  </h4>
                </div>
                <div class="slid lg:px-6">
                  <img
                    class="H4 text-center hidden lg:block self-center"
                    src="/p2.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <img
                    class="H4 text-center lg:hidden block self-center"
                    src="/p2.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Local Roots and Barks
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">
                    Local Roots and Barks
                  </h4>
                </div>
                <div class="slid lg:px-6">
                  <img
                    class="H4 text-center hidden lg:block self-center"
                    src="/p3.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <img
                    class="H4 text-center lg:hidden block self-center"
                    src="/p3.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Seeds, Flowers and Fruits
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">
                    Seeds, Flowers and Fruits
                  </h4>
                </div>
                <div class="slid lg:px-6">
                  <img
                    class="H4 text-center hidden lg:block self-center"
                    src="/p4.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <img
                    class="H4 text-center lg:hidden block self-center"
                    src="/p4.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Spices
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">Spices</h4>
                </div>
                <div class="slid lg:px-6">
                  <img
                    class="H4 text-center hidden lg:block self-center"
                    src="/p5.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <img
                    class="H4 text-center lg:hidden block self-center"
                    src="/p5.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Foreign Products
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">
                    Foreign Products
                  </h4>
                </div>
                <div class="slid lg:px-6">
                  <img
                    class="H4 text-center hidden lg:block self-center"
                    src="/p6.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <img
                    class="H4 text-center lg:hidden block self-center"
                    src="/p6.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Oils and Fluids
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">
                    Oils and Fluids
                  </h4>
                </div>
                <div class="slid lg:px-6">
                  <img
                    class="H4 text-center hidden lg:block self-center"
                    src="/p7.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <img
                    class="H4 text-center lg:hidden block self-center"
                    src="/p7.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Teas
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">Teas</h4>
                </div>
                <div class="slid lg:px-6">
                  <img
                    class="H4 text-center hidden lg:block self-center"
                    src="/p8.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <img
                    class="H4 text-center lg:hidden block self-center"
                    src="/p8.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Apparatus
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">
                    Apparatus
                  </h4>
                </div>
                <div class="slid lg:px-6">
                  <img
                    class="H4 text-center hidden lg:block self-center"
                    src="/p9.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <img
                    class="H4 text-center lg:hidden block self-center"
                    src="/p9.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <h4 class="H5 hidden lg:block self-end text-center pt-4">
                    Cosmetics - Creams/Soaps
                  </h4>
                  <h4 class="subH lg:hidden block text-center pt-2">
                    Cosmetics - Creams/Soaps
                  </h4>
                </div>
                <div class="slid lg:px-6">
                  <img
                    class="H4 text-center hidden lg:block self-center"
                    src="/p10.png"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <img
                    class="H4 text-center lg:hidden mlock self-center"
                    src="/p10.png"
                    priority
                    quality={100}
                    unoptimized={true}
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
              <button class="buttonM hidden lg:block H6">
                Reach Out to US
              </button>
              <button class="buttonM lg:hidden block subH">
                Reach Out to US
              </button>
              <button class="buttonO hidden lg:block H6">View Catalogue</button>
              <button class="buttonO lg:hidden block subH">
                View Catalogue
              </button>
            </div>
          </div>
        </section>

        <section class="onws">
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
                    unoptimized={true}
                  />
                  <Image
                    alt="png will occupy here"
                    class="H5 lg:hidden block"
                    src="/t1.svg"
                    width="64"
                    height="64"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <p class="B4 hidden lg:block black7 max-w-2xl">
                    At Salym Wellness Centre, we provide safe and effective
                    herbal medical products to promote health and wellness. Our
                    meticulously produced natural remedies are made using the
                    Organoleptic Method to ensure quality and potency.
                  </p>
                  <p class="B5 lg:hidden block black7 max-w-2xl ">
                    At Salym Wellness Centre, we provide safe and effective
                    herbal medical products to promote health and wellness. Our
                    meticulously produced natural remedies are made using the
                    Organoleptic Method to ensure quality and potency.
                  </p>
                  <div class="flex-col gap-2 hidden lg:flex">
                    <p class="h6">Otuya Howard</p>
                    <p class="h6 black7">Software Engineering</p>
                  </div>
                  <div class="flex-col gap-2 lg:hidden flex">
                    <p class="subH">Otuya Howard</p>
                    <p class="subH black7">Software Engineering</p>
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
                    unoptimized={true}
                  />
                  <Image
                    alt="png will occupy here"
                    class="H5 lg:hidden block"
                    src="/quote-up.svg"
                    width="24"
                    height="24"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <p class="B4 hidden lg:block black7 max-w-2xl">
                    At Salym Wellness Centre, we provide safe and effective
                    herbal medical products to promote health and wellness. Our
                    meticulously produced natural remedies are made using the
                    Organoleptic Method to ensure quality and potency.
                  </p>
                  <p class="B5 lg:hidden block black7 max-w-2xl ">
                    At Salym Wellness Centre, we provide safe and effective
                    herbal medical products to promote health and wellness. Our
                    meticulously produced natural remedies are made using the
                    Organoleptic Method to ensure quality and potency.
                  </p>
                  <div class="flex-row gap-4 hidden lg:flex items-center">
                    <Image
                      alt="png will occupy here"
                      src="/t2.svg"
                      priority
                      width="80"
                      height="80"
                      quality={100}
                      unoptimized={true}
                    />
                    <div class="flex flex-col gap-2">
                      <p class="h6">Otuya Howard</p>
                      <p class="h6 black7">Software Engineering</p>
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
                      unoptimized={true}
                    />
                    <div class="flex flex-col gap-2">
                      <p class="subH">Otuya Howard</p>
                      <p class="subH black7">Software Engineering</p>
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
                    unoptimized={true}
                  />
                  <Image
                    alt="png will occupy here"
                    class="H5 lg:hidden block"
                    src="/t3.svg"
                    width="64"
                    height="64"
                    priority
                    quality={100}
                    unoptimized={true}
                  />
                  <p class="B4 hidden lg:block black7 max-w-2xl">
                    At Salym Wellness Centre, we provide safe and effective
                    herbal medical products to promote health and wellness. Our
                    meticulously produced natural remedies are made using the
                    Organoleptic Method to ensure quality and potency.
                  </p>
                  <p class="B5 lg:hidden block black7 max-w-2xl ">
                    At Salym Wellness Centre, we provide safe and effective
                    herbal medical products to promote health and wellness. Our
                    meticulously produced natural remedies are made using the
                    Organoleptic Method to ensure quality and potency.
                  </p>
                  <div>
                    <div class="flex-col gap-2 hidden lg:flex">
                      <p class="h6">Otuya Howard</p>
                      <p class="h6 black7">Software Engineering</p>
                    </div>
                    <div class="flex-col gap-2 lg:hidden flex">
                      <p class="subH">Otuya Howard</p>
                      <p class="subH black7">Software Engineering</p>
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

        <section class="onwss">
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

        <footer class="onwsss">
          <div class="footer px-6 text-white">
            <div class="flex lg:flex-row flex-col gap-8 justify-center pt-10 lg:pt-20">
              <div class="py-8 w-full px-6 flex flex-col gap-6 bg-grx">
                <div>
                  <h4 class="H5 hidden lg:block">Head Office</h4>
                  <h4 class="H6 lg:hidden block">Head Office</h4>
                </div>
                <div class="flex flex-col gap-4">
                  <div class="flex gap-4">
                    <Image
                      alt="png will occupy here"
                      src="/house-2.svg"
                      class=""
                      width="24"
                      height="24"
                      quality={100}
                      unoptimized={true}
                      priority
                    />
                    <p class="B4 hidden lg:block">
                      17, Olalekan Olaniyan Street, Off Karimu Laka St, Egbeda,
                      Lagos.
                    </p>
                    <p class="B5 lg:hidden block">
                      17, Olalekan Olaniyan Street, Off Karimu Laka St, Egbeda,
                      Lagos.
                    </p>
                  </div>
                  <div class="flex gap-4">
                    <Image
                      alt="png will occupy here"
                      src="/call.svg"
                      class=""
                      width="24"
                      height="24"
                      quality={100}
                      unoptimized={true}
                      priority
                    />
                    <p class="B4 hidden lg:block">+23412345678</p>
                    <p class="B5 lg:hidden block">+23412345678</p>
                  </div>
                  <div class="flex gap-4">
                    <Image
                      alt="png will occupy here"
                      src="/sms.svg"
                      class=""
                      width="24"
                      height="24"
                      quality={100}
                      unoptimized={true}
                      priority
                    />
                    <p class="B4 hidden lg:block">info@salymwellness.center</p>
                    <p class="B5 lg:hidden block">info@salymwellness.center</p>
                  </div>
                </div>
              </div>
              <div class="py-8 w-full px-6 flex flex-col gap-6 bg-grx">
                <div>
                  <h4 class="H5 hidden lg:block">Branch Office</h4>
                  <h4 class="H6 lg:hidden block">Branch Office</h4>
                </div>
                <div class="flex flex-col gap-4">
                  <div class="flex gap-4">
                    <Image
                      alt="png will occupy here"
                      src="/house-2.svg"
                      class=""
                      width="24"
                      height="24"
                      quality={100}
                      unoptimized={true}
                      priority
                    />
                    <p class="B4 hidden lg:block">
                      17, Olalekan Olaniyan Street, Off Karimu Laka St, Egbeda,
                      Lagos.
                    </p>
                    <p class="B5 lg:hidden block">
                      17, Olalekan Olaniyan Street, Off Karimu Laka St, Egbeda,
                      Lagos.
                    </p>
                  </div>
                  <div class="flex gap-4">
                    <Image
                      alt="png will occupy here"
                      src="/call.svg"
                      class=""
                      width="24"
                      height="24"
                      quality={100}
                      unoptimized={true}
                      priority
                    />
                    <p class="B4 hidden lg:block">+23412345678</p>
                    <p class="B5 lg:hidden block">+23412345678</p>
                  </div>
                  <div class="flex gap-4">
                    <Image
                      alt="png will occupy here"
                      src="/sms.svg"
                      class=""
                      width="24"
                      height="24"
                      quality={100}
                      unoptimized={true}
                      priority
                    />
                    <p class="B4 hidden lg:block">info@salymwellness.center</p>
                    <p class="B5 lg:hidden block">info@salymwellness.center</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex lg:flex-row flex-col justify-between lg:items-center pt-12 lg:pt-16">
              <div class="flex lg:flex-row pb-12 lg:pb-0 flex-col gap-10">
                <p class="H6 hidden lg:block ">Home</p>
                <p class="subH lg:hidden block">Home</p>
                <p class="H6 hidden lg:block">About</p>
                <p class="subH lg:hidden block">About</p>
                <p class="H6 hidden lg:block">Clinicals</p>
                <p class="subH lg:hidden block">Clinicals</p>
                <p class="H6 hidden lg:block ">Productions</p>
                <p class="subH lg:hidden block">Productions</p>
                <p class="H6 hidden lg:block">Blog</p>
                <p class="subH lg:hidden block">Blog</p>
                <p class="H6 hidden lg:block">Contact</p>
                <p class="subH lg:hidden block">Contact</p>
              </div>

              <div class="flex justify-center gap-4">
                <Image
                  alt="png will occupy here"
                  class="H4 text-center hidden lg:block  self-center"
                  src="/ig.svg"
                  priority
                  width="24"
                  height="24"
                  quality={100}
                  unoptimized={true}
                />
                <Image
                  alt="png will occupy here"
                  class="lg:hidden block self-start"
                  src="/iig.svg"
                  width="24"
                  height="24"
                  priority
                  quality={100}
                  unoptimized={true}
                />
                <Image
                  alt="png will occupy here"
                  class="H4 text-center hidden lg:block  self-center"
                  src="/ffb.svg"
                  priority
                  width="24"
                  height="24"
                  quality={100}
                  unoptimized={true}
                />
                <Image
                  alt="png will occupy here"
                  class="lg:hidden block self-start"
                  src="/ffb.svg"
                  width="24"
                  height="24"
                  priority
                  quality={100}
                  unoptimized={true}
                />
                <Image
                  alt="png will occupy here"
                  class="H4 text-center hidden lg:block  self-center"
                  src="/ttw.svg"
                  priority
                  width="24"
                  height="24"
                  quality={100}
                  unoptimized={true}
                />
                <Image
                  alt="png will occupy here"
                  class="lg:hidden block self-start"
                  src="/ttw.svg"
                  width="24"
                  height="24"
                  priority
                  quality={100}
                  unoptimized={true}
                />
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
