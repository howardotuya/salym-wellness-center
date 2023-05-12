'use client';
import { useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
 
export const metadata = {
  title: 'Home Maybe',
  description: 'Welcome to Next.js',
};

const popuphandler = () => {
  const popup = document.querySelector('.bg-grn-60');

  if(popup.style.display == 'none') {
    popup.style.display = 'flex';
} else {
  popup.style.display = 'none';
}}

export default function Home() {

useEffect(() => {
  const slideshow = document.getElementById("slideshow");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtnn = document.getElementById("prevBtnn");
  const nextBtnn = document.getElementById("nextBtnn");
  const slideContainer = document.getElementsByClassName("slid")[0];
  const slideWidth = slideContainer.clientWidth; // Width of each slide
  const mslideshow = document.getElementById("mslideshow");
  const mslideContainer = document.getElementsByClassName("slidx")[0];
  const mslideWidth = mslideContainer.clientWidth; // Width of each slide
  const prevBtnnn = document.getElementById("prevBtnnn");
  const nextBtnnn = document.getElementById("nextBtnnn");

  let currentPosition = 0;
  let mcurrentPosition = 0;

  prevBtn.addEventListener("click", () => {
    currentPosition += slideWidth * 3;
    if (currentPosition > 0) {
      currentPosition = 0;
      prevBtn.classList.remove('buttonM');
      prevBtn.classList.add('buttonO');
    }
    slideshow.style.transform = `translateX(${currentPosition}px)`;
    nextBtn.classList.remove('buttonO');
    nextBtn.classList.add('buttonM');
  });
  nextBtn.addEventListener("click", () => {
    currentPosition -= slideWidth * 3;
    const maxPosition = -(slideWidth * (slideshow.childElementCount - 3));
    if (currentPosition < maxPosition) {
      currentPosition = maxPosition;
      nextBtn.classList.remove('buttonM');
      nextBtn.classList.add('buttonO');
    }
    slideshow.style.transform = `translateX(${currentPosition}px)`;
    prevBtn.classList.remove('buttonO');
    prevBtn.classList.add('buttonM');
  });
  prevBtnn.addEventListener("click", () => {
    currentPosition += slideWidth * 1;
    if (currentPosition > 0) {
      currentPosition = 0;
      prevBtnn.classList.remove('buttonM2');
      prevBtnn.classList.add('buttonO2');
    }
    slideshow.style.transform = `translateX(${currentPosition}px)`;
    nextBtnn.classList.remove('buttonO2');
    nextBtnn.classList.add('buttonM2');
  });

  nextBtnn.addEventListener("click", () => {
    currentPosition -= slideWidth * 1;
    const maxPosition = -(slideWidth * (slideshow.childElementCount - 1));
    if (currentPosition < maxPosition) {
      currentPosition = maxPosition;
      nextBtnn.classList.remove('buttonM2');
      nextBtnn.classList.add('buttonO2');
    }
    slideshow.style.transform = `translateX(${currentPosition}px)`;
    prevBtnn.classList.remove('buttonO2');
    prevBtnn.classList.add('buttonM2');
  });

  prevBtnnn.addEventListener("click", () => {
    mcurrentPosition += mslideWidth * 3;
    if (mcurrentPosition > 0) {
      mcurrentPosition = 0;
      prevBtnnn.classList.remove('buttonM3');
      prevBtnnn.classList.add('buttonO3');
    }
    mslideshow.style.transform = `translateX(${mcurrentPosition}px)`;
    nextBtnnn.classList.remove('buttonO3');
    nextBtnnn.classList.add('buttonM3');
  });

  nextBtnnn.addEventListener("click", () => {
    mcurrentPosition -= mslideWidth * 3;
    const maxPosition = -(mslideWidth * (mslideshow.childElementCount - 3));
    if (mcurrentPosition < maxPosition) {
      mcurrentPosition = maxPosition;
      nextBtnnn.classList.remove('buttonM3');
      nextBtnnn.classList.add('buttonO3');
    }
    mslideshow.style.transform = `translateX(${mcurrentPosition}px)`;
    prevBtnnn.classList.remove('buttonO3');
    prevBtnnn.classList.add('buttonM3');
  });
}, []);

  return (
    <>
    <div class="bg-grn-60 flex flex-col justify-between">
      <div class="flex justify-end pt-6">
          <Image onClick={popuphandler} unoptimized={true} class="cancel" src='/close-circle.svg' width="48" height="48" quality={100} />
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
          <div><Image unoptimized={true} class="cancel" src='/IG.svg' width="24" height="24" quality={100} /></div>
          <div><Image unoptimized={true} class="cancel" src='/fb.svg' width="24" height="24" quality={100} /></div>
          <div><Image unoptimized={true} class="cancel" src='/twit.svg' width="24" height="24" quality={100} /></div>
        </div>
        <div><p class="subH">© 2023 Salym Wellness Centre. All Rights Reserved.</p></div>
      </div>
    </div>

    <main class="body-margin">
      <header>
        <nav class="flex items-center flex-row justify-between">
          <div>
            <Image unoptimized={true} class="hidden md:block" src='/logoLarge.png' width="46" height="64" quality={100} />
            <Image unoptimized={true} class="md:hidden block" src='/logoLarge.png' width="34" height="48" quality={100} />
          </div>
          <div class="navM hidden md:flex">
            <Link class="H6" href="#">About</Link>
            <Link class="H6" href="#">Clinicals</Link>
            <Link class="H6" href="#">Production</Link>
            <Link class="H6" href="#">Blog</Link>
            <Link class="H6" href="#">Contact</Link>
          </div>
        <button class="buttonM H6 hidden md:flex">Book a Consultation</button>
        <Image onClick={popuphandler} unoptimized={true} class="md:hidden block" src='/menu.svg' width="44" height="44" quality={100} />
        </nav>

        <div class="flex md:flex-row flex-col gap-10 md:gap-0 justify-between items-center header-content">
          <div class="order-2 md:order-1 header-left gap-4 md:gap-8 flex flex-col">
            <span class="Hothers">naturopathic wellness centre</span>
            <h1 class="H1 hidden md:block">Welcome to Salym Wellness Centre – your natural health partner</h1>
            <h1 class="H4 md:hidden block">Welcome to Salym Wellness Centre – your natural health partner</h1>
            <p class="B3 hidden md:block black7">Prioritize your well-being today. Join our community of like-minded individuals and businesses. Subscribe to our newsletter and book a consultation now.</p>
            <p class="B5 md:hidden block black7">Prioritize your well-being today. Join our community of like-minded individuals and businesses. Subscribe to our newsletter and book a consultation now.</p>
            <div class="flex gap-2 md:gap-4">
              <input class="newsletter outline-none" type="text" placeholder="you@example.com" />
              <button class="buttonN">Subscribe</button>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <Image src='/header-right.png' class="hidden md:block" width="488" height="478" quality={100} unoptimized={true} priority />
            <Image src='/header-right.png' class="md:hidden block" width="345" height="338" quality={100} unoptimized={true} priority />
            </div>
        </div>
      </header>

      <section class="lg:pt-48 pt-32 flex flex-col gap-8 md:gap-16">
        <div class="flex flex-col justify-center gap-4">
          <h4 class="H4 text-center hidden md:block">Why Choose Salym Wellness Centre?</h4>
          <h4 class="H5 md:hidden block">Why Choose Salym Wellness Centre?</h4>
          <div class="w-full flex md:justify-center">
          <p class="B3 hidden md:block black7 max-w-2xl text-center">Our safe and effective herbal remedies are distinguished by sensory evaluation techniques and the Organoleptic Method for quality and potency.</p>
          <p class="B5 md:hidden block black7 max-w-2xl ">Our safe and effective herbal remedies are distinguished by sensory evaluation techniques and the Organoleptic Method for quality and potency.</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-6 ">
          <div class="md:px-4 px-6 py-8 grn-10 flex flex-col gap-4 rounded-lg flex-grow  basis-0">
            <Image class="H4 text-center hidden md:block self-start" src='/wh1.svg' priority width="80" height="80" quality={100} unoptimized={true} />
            <Image class="H5 md:hidden block" src='/whh1.png' width="56" height="56" priority quality={100} unoptimized={true} />
            <h5 class="H5 grn-110 hidden md:block">Clinicals and Production</h5>
            <h5 class="H6 grn-110 md:hidden block">Clinicals and Production</h5>
            <p class="B4 grn-50 hidden md:block">We provide both clinical services and herbal production to ensure that we offer comprehensive solutions to our customers.</p>
            <p class="B5 grn-50 md:hidden block">We provide both clinical services and herbal production to ensure that we offer comprehensive solutions to our customers.</p>
          </div>
          <div class="md:px-4 px-6 py-8 grn-10 flex flex-col gap-4 rounded-lg flex-grow  basis-0">
            <Image class="H4 text-center hidden md:block self-start" src='/wh2.svg' priority width="80" height="80" quality={100} unoptimized={true} />
            <Image class="H5 md:hidden block" src='/whh2.png' width="56" height="56" priority quality={100} unoptimized={true} />
            <h5 class="H5 grn-110 hidden md:block">Process Documentation</h5>
            <h5 class="H6 grn-110 md:hidden block">Process Documentation</h5>
            <p class="B4 grn-50 hidden md:block">Our processes are fully documented, ensuring traceability and accountability at every stage of production.</p>
            <p class="B5 grn-50 md:hidden block">Our processes are fully documented, ensuring traceability and accountability at every stage of production.</p>
          </div>
          <div class="md:px-4 px-6 py-8 grn-10 flex flex-col gap-4 rounded-lg flex-grow  basis-0">
            <Image class="H4 text-center hidden md:block self-start" src='/wh3.svg' priority width="80" height="80" quality={100} unoptimized={true} />
            <Image class="H5 md:hidden block" src='/whh3.png' width="56" height="56" priority quality={100} unoptimized={true} />
            <h5 class="H5 grn-110 hidden md:block">Variety of 1000+ herbs</h5>
            <h5 class="H6 grn-110 md:hidden block">Variety of 1000+ herbs</h5>
            <p class="B4 grn-50 hidden md:block">Our extensive research has led us to a collection of over 1000 herbs, which are carefully dehydrated and processed to retain their efficacy.</p>
            <p class="B5 grn-50 md:hidden block">Our extensive research has led us to a collection of over 1000 herbs, which are carefully dehydrated and processed to retain their efficacy.</p>
          </div>
          <div class="md:px-4 px-6 py-8 grn-10 flex flex-col gap-4 rounded-lg flex-grow  basis-0">
            <Image class="H4 text-center hidden md:block self-start" src='/wh4.svg' priority width="80" height="80" quality={100} unoptimized={true} />
            <Image class=" md:hidden block" src='/whh4.png' width="56" height="56" priority quality={100} unoptimized={true} />
            <h5 class="H5 grn-110 hidden md:block">Collaborators</h5>
            <h5 class="H6 grn-110 md:hidden block">Collaborators</h5>
            <p class="B4 grn-50 hidden md:block">We have partnered with large farm operators to ensure a steady supply of raw materials, and to help support the local economy.</p>
            <p class="B5 grn-50 md:hidden block">We have partnered with large farm operators to ensure a steady supply of raw materials, and to help support the local economy.</p>
          </div>
        </div>
      </section>

        <section class="about flex md:flex-row flex-col gap-10 md:gap-0 items-center justify-between">
          <div class="order-2 md:order-1">
            <Image src='/about.png' class="hidden md:block" width="528" height="436" quality={100} unoptimized={true}  />
            </div>
          <div class="order-1 md:order-2 about-cont-right flex gap-6 flex-col md:gap-8">
            <h4 class="H4 hidden md:block">About Us</h4>
            <h4 class="H5 md:hidden block pb-2">About Us</h4>
            <Image src='/about.png' class="md:hidden block" width="345" height="286" quality={100} unoptimized={true}  />
            <p class="B4 hidden md:block black7">At Salym Wellness Centre, we provide safe and effective herbal medical products to promote health and wellness. Our meticulously produced natural remedies are made using the Organoleptic Method to ensure quality and potency. We offer naturopathic wellness solutions, including herbal therapy, physical therapy, counseling, and more for individuals, along with immune boosters, herbal tea blends, and other products. For businesses and pharmaceuticals, we provide access to safe herbal medicine solutions with adequate process documentation. Join our community today and discover the power of natural remedies. Subscribe to our newsletter for the latest updates.</p>
            <p class="B5 md:hidden block black7">Discover the power of natural remedies with Salym Wellness Centre. We provide safe and effective herbal medical products, including naturopathic wellness solutions and immune boosters. For businesses and individuals alike, we offer access to safe herbal medicine solutions with adequate process documentation. Contact us to learn more about our products and services or to book a consultation today.</p>
            <div>
              <button class="buttonM hidden md:block H6">Connect with Us</button>
              <button class="buttonM md:hidden block subH">Connect with Us</button></div>
          </div>
        </section>

        <section class="onws">
          <div class="flex flex-col md:justify-center gap-4">
            <h4 class="H4 text-center hidden md:block">Our Natural Health Solutions</h4>
            <h4 class="H5 md:hidden block">Our Natural Health Solutions</h4>
            <div class="w-full flex md:justify-center">
            <p class="B3 hidden md:block black7 max-w-2xl text-center">Our solutions offer customized clinical sessions and herbal productions, utilizing a variety of researched herbs to promote functional and safe wellness.</p>
            <p class="B5 md:hidden block black7 max-w-2xl ">Our solutions offer customized clinical sessions and herbal productions, utilizing a variety of researched herbs to promote functional and safe wellness.</p>
            </div>
          </div>

          <div class="">
            <div class='md:pt-16 pt-8 flex flex-col gap-6'>
              <h4 class="H4 hidden md:block">Clinicals</h4>
              <h4 class="H5 md:hidden block">Clinicals</h4>

              <div class="flex flex-wrap gap-8">
                <div class="flex flex-row gap-4 md:gap-6 py-8 px-6 md:p-8 grn-10 rounded-2xl basis-u">
                  <Image class="H4 text-center hidden md:block  self-center" src='/c1.svg' priority width="80" height="80" quality={100} unoptimized={true} />
                  <Image class="md:hidden block self-start" src='/cc1.png' width="48" height="48" priority quality={100} unoptimized={true} />
                  <div class="flex flex-col gap-4">
                    <h5 class="H5 grn-110 hidden md:block">Herbal Therapy</h5>
                    <h6 class="H6 grn-110 md:hidden block">Herbal Therapy</h6>
                    <p class="B4 grn-50 hidden md:block">Our herbal therapy solutions utilize over 1000 researched and dehydrated herbs to provide safe and functional wellness options.</p>
                    <p class="B5 grn-50 md:hidden block">Our herbal therapy solutions utilize over 1000 researched and dehydrated herbs to provide safe and functional wellness options.</p>           
                  </div>
                </div>
                <div class="flex flex-row gap-4 md:gap-6 py-8 px-6 md:p-8 grn-10 rounded-2xl basis-u">
                  <Image class="H4 text-center hidden md:block  self-center" src='/c2.svg' priority width="80" height="80" quality={100} unoptimized={true} />
                  <Image class="md:hidden block self-start" src='/cc2.png' width="48" height="48" priority quality={100} unoptimized={true} />
                  <div class="flex flex-col gap-4">
                    <h5 class="H5 grn-110 hidden md:block">Physical Therapy</h5>
                    <h6 class="H6 grn-110 md:hidden block">Physical Therapy</h6>
                    <p class="B4 grn-50 hidden md:block">Our physical therapy sessions are tailored to meet individual needs, promoting healing, mobility, and improving quality of life.</p>
                    <p class="B5 grn-50 md:hidden block">Our physical therapy sessions are tailored to meet individual needs, promoting healing, mobility, and improving quality of life.</p>           
                  </div>
                </div>
                <div class="flex flex-row gap-4 md:gap-6 py-8 px-6 md:p-8 grn-10 rounded-2xl basis-u">
                  <Image class="H4 text-center hidden md:block  self-center" src='/c3.svg' priority width="80" height="80" quality={100} unoptimized={true} />
                  <Image class="md:hidden block self-start" src='/cc3.png' width="48" height="48" priority quality={100} unoptimized={true} />
                  <div class="flex flex-col gap-4">
                    <h5 class="H5 grn-110 hidden md:block">Massage</h5>
                    <h6 class="H6 grn-110 md:hidden block">Massage</h6>
                    <p class="B4 grn-50 hidden md:block">Our massage services are therapeutic and relaxing, with skilled therapists utilizing various techniques to soothe muscles, reduce stress and enhance wellness.</p>
                    <p class="B5 grn-50 md:hidden block">Our massage services are therapeutic and relaxing, with skilled therapists utilizing various techniques to soothe muscles, reduce stress and enhance wellness.</p>           
                  </div>
                </div>
                <div class="flex flex-row gap-4 md:gap-6 py-8 px-6 md:p-8 grn-10 rounded-2xl basis-u">
                  <Image class="H4 text-center hidden md:block  self-center" src='/c4.svg' priority width="80" height="80" quality={100} unoptimized={true} />
                  <Image class="md:hidden block self-start" src='/cc4.png' width="48" height="48" priority quality={100} unoptimized={true} />
                  <div class="flex flex-col gap-4">
                    <h5 class="H5 grn-110 hidden md:block">Acupressure</h5>
                    <h6 class="H6 grn-110 md:hidden block">Acupressure</h6>
                    <p class="B4 grn-50 hidden md:block">Our acupressure sessions involve the application of pressure to specific points on the body to promote healing, reduce pain, and improve overall wellbeing.</p>
                    <p class="B5 grn-50 md:hidden block">Our acupressure sessions involve the application of pressure to specific points on the body to promote healing, reduce pain, and improve overall wellbeing.</p>           
                  </div>
                </div>
                <div class="flex flex-row gap-4 md:gap-6 py-8 px-6 md:p-8 grn-10 rounded-2xl basis-u">
                  <Image class="H4 text-center hidden md:block  self-center" src='/c5.svg' priority width="80" height="80" quality={100} unoptimized={true} />
                  <Image class="md:hidden block self-start" src='/cc5.png' width="48" height="48" priority quality={100} unoptimized={true} />
                  <div class="flex flex-col gap-4">
                    <h5 class="H5 grn-110 hidden md:block">Naturopathy</h5>
                    <h6 class="H6 grn-110 md:hidden block">Naturopathy</h6>
                    <p class="B4 grn-50 hidden md:block">Our naturopathy approach seeks to treat the whole person and not just the symptoms, utilizing natural remedies and techniques to restore balance and promote wellness.</p>
                    <p class="B5 grn-50 md:hidden block">Our naturopathy approach seeks to treat the whole person and not just the symptoms, utilizing natural remedies and techniques to restore balance and promote wellness.</p>           
                  </div>
                </div>
                <div class="flex flex-row gap-4 md:gap-6 py-8 px-6 md:p-8 grn-10 rounded-2xl basis-u">
                  <Image class="H4 text-center hidden md:block  self-center" src='/c6.svg' priority width="80" height="80" quality={100} unoptimized={true} />
                  <Image class="md:hidden block self-start" src='/cc6.png' width="48" height="48" priority quality={100} unoptimized={true} />
                  
                    <div class="flex flex-col gap-4 w-auto">
                    <h5 class="H5 grn-110 hidden md:block">Counselling</h5>
                    <h6 class="H6 grn-110 md:hidden block">Counselling</h6>
                    <p class="B4 grn-50 hidden md:block">Our counseling services offer emotional support, advice and  guidance for individuals struggling with mental health or personal issues.</p>
                    <p class="B5 grn-50 md:hidden block">Our counseling services offer emotional support, advice and  guidance for individuals struggling with mental health or personal issues.</p>           
                  </div>
                  
                </div>
              </div>
            </div> 
            
            <div class="md:pt-12 pt-6 flex md:justify-center gap-6">
              <button class="buttonM hidden md:block H6">Book a Consultation</button>
              <button class="buttonM md:hidden block subH">Book a Consultation</button>
              <button class="buttonO hidden md:block H6">Learn More</button>
              <button class="buttonO md:hidden block subH">Learn More</button>
            </div>
            
            <div class="md:pt-24 pt-20 flex w-full justify-between">
              <h4 class="H4 hidden md:block self-end">Production</h4>
              <h4 class="H5 md:hidden block self-end">Production</h4>
              <div class="md:hidden flex flex-row items-center justify-center gap-2">
                  <button id="prevBtnn" class="buttonO2 gap-2 subH flex">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
                  </svg>
                  </button>
                  <button id="nextBtnn" class="buttonM2 gap-2 subH flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                      <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                    </svg>
                  </button>
              </div>
              <div class="hidden md:flex flex-row gap-4">
                <button id="prevBtn" class="buttonO hidden md:flex gap-2 H6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Prev
                </button>
                <button id="nextBtn" class="buttonM hidden md:flex gap-2 H6">
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  </button>
              </div>
            </div>

            <div id="slideshow-container" class="pt-8">
              <div id="slideshow">
                  <div class="slid md:px-6">
                    <img class="H4 text-center hidden md:block self-center" src='/p1.png' priority quality={100} unoptimized={true} />
                    <img class="H4 text-center md:hidden block self-center" src='/p1.png' priority quality={100} unoptimized={true} />
                    <h4 class="H5 hidden md:block self-end text-center pt-4">Local Herbs and Leaves</h4>
                    <h4 class="subH md:hidden block text-center pt-2">Local Herbs and Leaves</h4>
                  </div>
                  <div class="slid md:px-6">
                    <img class="H4 text-center hidden md:block self-center" src='/p2.png' priority quality={100} unoptimized={true} />
                    <img class="H4 text-center md:hidden block self-center" src='/p2.png' priority quality={100} unoptimized={true} />
                    <h4 class="H5 hidden md:block self-end text-center pt-4">Local Roots and Barks</h4>
                    <h4 class="subH md:hidden block text-center pt-2">Local Roots and Barks</h4>
                  </div>
                  <div class="slid md:px-6">
                    <img class="H4 text-center hidden md:block self-center" src='/p3.png' priority quality={100} unoptimized={true} />
                    <img class="H4 text-center md:hidden block self-center" src='/p3.png' priority quality={100} unoptimized={true} />
                    <h4 class="H5 hidden md:block self-end text-center pt-4">Seeds, Flowers and Fruits</h4>
                    <h4 class="subH md:hidden block text-center pt-2">Seeds, Flowers and Fruits</h4>
                  </div>        
                  <div class="slid md:px-6">
                    <img class="H4 text-center hidden md:block self-center" src='/p4.png' priority quality={100} unoptimized={true} />
                    <img class="H4 text-center md:hidden block self-center" src='/p4.png' priority quality={100} unoptimized={true} />
                    <h4 class="H5 hidden md:block self-end text-center pt-4">Spices</h4>
                    <h4 class="subH md:hidden block text-center pt-2">Spices</h4>
                  </div>
                  <div class="slid md:px-6">
                    <img class="H4 text-center hidden md:block self-center" src='/p5.png' priority quality={100} unoptimized={true} />
                    <img class="H4 text-center md:hidden block self-center" src='/p5.png' priority quality={100} unoptimized={true} />
                    <h4 class="H5 hidden md:block self-end text-center pt-4">Foreign Products</h4>
                    <h4 class="subH md:hidden block text-center pt-2">Foreign Products</h4>
                  </div>
                  <div class="slid md:px-6">
                    <img class="H4 text-center hidden md:block self-center" src='/p6.png' priority quality={100} unoptimized={true} />
                    <img class="H4 text-center md:hidden block self-center" src='/p6.png' priority quality={100} unoptimized={true} />
                    <h4 class="H5 hidden md:block self-end text-center pt-4">Oils and Fluids</h4>
                    <h4 class="subH md:hidden block text-center pt-2">Oils and Fluids</h4>
                  </div>               
                  <div class="slid md:px-6">
                    <img class="H4 text-center hidden md:block self-center" src='/p7.png' priority quality={100} unoptimized={true} />
                    <img class="H4 text-center md:hidden block self-center" src='/p7.png' priority quality={100} unoptimized={true} />
                    <h4 class="H5 hidden md:block self-end text-center pt-4">Teas</h4>
                    <h4 class="subH md:hidden block text-center pt-2">Teas</h4>
                  </div>
                  <div class="slid md:px-6">
                    <img class="H4 text-center hidden md:block self-center" src='/p8.png' priority quality={100} unoptimized={true} />
                    <img class="H4 text-center md:hidden block self-center" src='/p8.png' priority quality={100} unoptimized={true} />
                    <h4 class="H5 hidden md:block self-end text-center pt-4">Apparatus</h4>
                    <h4 class="subH md:hidden block text-center pt-2">Apparatus</h4>
                  </div>
                  <div class="slid md:px-6">
                    <img class="H4 text-center hidden md:block self-center" src='/p9.png' priority quality={100} unoptimized={true} />
                    <img class="H4 text-center md:hidden block self-center" src='/p9.png' priority quality={100} unoptimized={true} />
                    <h4 class="H5 hidden md:block self-end text-center pt-4">Cosmetics - Creams/Soaps</h4>
                    <h4 class="subH md:hidden block text-center pt-2">Cosmetics - Creams/Soaps</h4>
                  </div>                
                  <div class="slid md:px-6">
                    <img class="H4 text-center hidden md:block self-center" src='/p10.png' priority quality={100} unoptimized={true} />
                    <img class="H4 text-center md:hidden mlock self-center" src='/p10.png' priority quality={100} unoptimized={true} />
                    <h4 class="H5 hidden md:block self-end text-center pt-4">Salts, Edibles and Miscellaneous</h4>
                    <h4 class="subH md:hidden block text-center pt-2">Salts, Edibles and Miscellaneous</h4>
                  </div>
                </div>
            </div>
            
            <div class="md:pt-12 pt-6 flex md:justify-center gap-6">
              <button class="buttonM hidden md:block H6">Reach Out to US</button>
              <button class="buttonM md:hidden block subH">Reach Out to US</button>
              <button class="buttonO hidden md:block H6">View Catalogue</button>
              <button class="buttonO md:hidden block subH">View Catalogue</button>
            </div>
          </div>
        </section>

        <section class="onws">
          <div class="flex justify-between items-end">
            <div class="flex flex-col gap-4">
              <h4 class="H4 hidden md:block">Recent Blog Posts</h4>
              <h4 class="H5 md:hidden block">Recent Blog Posts</h4>
              <div class="w-full flex">
                <p class="B3 hidden md:block black7 max-w-xl">Stay up to date with our recent blog posts, featuring insightful articles on health, wellness, and natural remedies for your daily life.</p>
                <p class="B5 md:hidden block black7 max-w-xl ">Stay up to date with our recent blog posts, featuring insightful articles on health, wellness, and natural remedies for your daily life.</p>
              </div>
            </div>
              <div class="hidden md:flex flex-row gap-4">
                <button id="prevBtnnn" class="buttonO3 hidden md:flex gap-2 H6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Prev
                </button>
                <button id="nextBtnnn" class="buttonM3 hidden md:flex gap-2 H6">
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  </button>
              </div>
          </div> 

          <div id="slideshow-container" class="pt-8 md:pt-16">
              <div id="mslideshow">
                  <div class="slidx md:px-6">
                    <div class="bic flex gap-4 md:gap-6 flex-col p-4 md:py-8 md:px-6">
                      <img class="H4 text-center hidden md:block self-center" src='/blogimg.png' priority quality={100} unoptimized={true} />
                      <img class="H4 text-center md:hidden block self-center" src='/blogimg.png' priority quality={100} unoptimized={true} />
                      <h4 class="H5 hidden md:block">The Healing Powers of Methyl C...</h4>
                      <h4 class="H6 md:hidden block">The Healing Powers of Methyl C...</h4>
                      <p class="B4 hidden md:block black7 max-w-2xl">Our solutions offer customized clinical sessions and herbal productions, utilizing a variety of researched herbs to promote functional and safe wellness.</p>
                      <p class="B5 md:hidden block black7 max-w-2xl ">Our solutions offer customized clinical sessions and herbal productions, utilizing a variety of researched herbs to promote functional and safe wellness.</p>
                      <div class="flex justify-between items-center">
                        <span class="grn-10 grn-60 H6 hidden md:block py-2 px-4 rounded-full ">Herbal Wellness</span>
                        <span class=" md:hidden block grn-10 grn-60 subH py-2 px-4 rounded-full">Herbal Wellness</span>
                        <p class="H6 hidden md:block"> 3 mins read</p>
                        <p class="subH md:hidden block"> 3 mins read</p>
                      </div>
                    </div>
                  </div>
                  <div class="slidx md:px-6">
                    <div class="bic flex gap-4 md:gap-6 flex-col p-4 md:py-8 md:px-6">
                      <img class="H4 text-center hidden md:block self-center" src='/blogimg.png' priority quality={100} unoptimized={true} />
                      <img class="H4 text-center md:hidden block self-center" src='/blogimg.png' priority quality={100} unoptimized={true} />
                      <h4 class="H5 hidden md:block">The Healing Powers of Methyl C...</h4>
                      <h4 class="H6 md:hidden block">The Healing Powers of Methyl C...</h4>
                      <p class="B4 hidden md:block black7 max-w-2xl">Our solutions offer customized clinical sessions and herbal productions, utilizing a variety of researched herbs to promote functional and safe wellness.</p>
                      <p class="B5 md:hidden block black7 max-w-2xl ">Our solutions offer customized clinical sessions and herbal productions, utilizing a variety of researched herbs to promote functional and safe wellness.</p>
                      <div class="flex justify-between items-center">
                        <span class="grn-10 grn-60 H6 hidden md:block py-2 px-4 rounded-full ">Herbal Wellness</span>
                        <span class=" md:hidden block grn-10 grn-60 subH py-2 px-4 rounded-full">Herbal Wellness</span>
                        <p class="H6 hidden md:block"> 3 mins read</p>
                        <p class="subH md:hidden block"> 3 mins read</p>
                      </div>
                    </div>
                  </div>
                  <div class="slidx md:px-6">
                    <div class="bic flex gap-4 md:gap-6 flex-col p-4 md:py-8 md:px-6">
                      <img class="H4 text-center hidden md:block self-center" src='/blogimg.png' priority quality={100} unoptimized={true} />
                      <img class="H4 text-center md:hidden block self-center" src='/blogimg.png' priority quality={100} unoptimized={true} />
                      <h4 class="H5 hidden md:block">The Healing Powers of Methyl C...</h4>
                      <h4 class="H6 md:hidden block">The Healing Powers of Methyl C...</h4>
                      <p class="B4 hidden md:block black7 max-w-2xl">Our solutions offer customized clinical sessions and herbal productions, utilizing a variety of researched herbs to promote functional and safe wellness.</p>
                      <p class="B5 md:hidden block black7 max-w-2xl ">Our solutions offer customized clinical sessions and herbal productions, utilizing a variety of researched herbs to promote functional and safe wellness.</p>
                      <div class="flex justify-between items-center">
                        <span class="grn-10 grn-60 H6 hidden md:block py-2 px-4 rounded-full ">Herbal Wellness</span>
                        <span class=" md:hidden block grn-10 grn-60 subH py-2 px-4 rounded-full">Herbal Wellness</span>
                        <p class="H6 hidden md:block"> 3 mins read</p>
                        <p class="subH md:hidden block"> 3 mins read</p>
                      </div>
                    </div>
                  </div>
                  <div class="slidx md:px-6">
                    <div class="bic flex gap-4 md:gap-6 flex-col p-4 md:py-8 md:px-6">
                      <img class="H4 text-center hidden md:block self-center" src='/blogimg.png' priority quality={100} unoptimized={true} />
                      <img class="H4 text-center md:hidden block self-center" src='/blogimg.png' priority quality={100} unoptimized={true} />
                      <h4 class="H5 hidden md:block">The Healing Powers of Methyl C...</h4>
                      <h4 class="H6 md:hidden block">The Healing Powers of Methyl C...</h4>
                      <p class="B4 hidden md:block black7 max-w-2xl">Our solutions offer customized clinical sessions and herbal productions, utilizing a variety of researched herbs to promote functional and safe wellness.</p>
                      <p class="B5 md:hidden block black7 max-w-2xl ">Our solutions offer customized clinical sessions and herbal productions, utilizing a variety of researched herbs to promote functional and safe wellness.</p>
                      <div class="flex justify-between items-center">
                        <span class="grn-10 grn-60 H6 hidden md:block py-2 px-4 rounded-full ">Herbal Wellness</span>
                        <span class=" md:hidden block grn-10 grn-60 subH py-2 px-4 rounded-full">Herbal Wellness</span>
                        <p class="H6 hidden md:block"> 3 mins read</p>
                        <p class="subH md:hidden block"> 3 mins read</p>
                      </div>
                    </div>
                  </div>
            </div>
          </div>

          
          <div class="md:pt-12 pt-6 flex md:justify-center gap-6">
              <button class="buttonM hidden md:block H6">Explore the Blog</button>
              <button class="buttonM md:hidden block subH">Explore the Blog</button>
            </div>
        </section>


    </main>
    </>
  )
}
