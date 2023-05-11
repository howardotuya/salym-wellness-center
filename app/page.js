'use client';


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
}

}

export default function Home() {
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
            <Image class="H4 text-center hidden md:block" src='/wh1.png' width="96" height="96" quality={100} unoptimized={true} />
            <Image class="H5 md:hidden block" src='/wh1.png' width="48" height="48" quality={100} unoptimized={true} />
            <h5 class="H5 grn-110 hidden md:block">Clinicals and Production</h5>
            <h5 class="H6 grn-110 md:hidden block">Clinicals and Production</h5>
            <p class="B4 grn-50 hidden md:block">We provide both clinical services and herbal production to ensure that we offer comprehensive solutions to our customers.</p>
            <p class="B5 grn-50 md:hidden block">We provide both clinical services and herbal production to ensure that we offer comprehensive solutions to our customers.</p>
          </div>
          <div class="md:px-4 px-6 py-8 grn-10 flex flex-col gap-4 rounded-lg flex-grow  basis-0">
            <Image class="H4 text-center hidden md:block" src='/wh2.png' width="96" height="96" quality={100} unoptimized={true} />
            <Image class="H5 md:hidden block" src='/wh2.png' width="48" height="48" quality={100} unoptimized={true} />
            <h5 class="H5 grn-110 hidden md:block">Process Documentation</h5>
            <h5 class="H6 grn-110 md:hidden block">Process Documentation</h5>
            <p class="B4 grn-50 hidden md:block">Our processes are fully documented, ensuring traceability and accountability at every stage of production.</p>
            <p class="B5 grn-50 md:hidden block">Our processes are fully documented, ensuring traceability and accountability at every stage of production.</p>
          </div>
          <div class="md:px-4 px-6 py-8 grn-10 flex flex-col gap-4 rounded-lg flex-grow  basis-0">
            <Image class="H4 text-center hidden md:block" src='/wh3.png' width="96" height="96" quality={100} unoptimized={true} />
            <Image class="H5 md:hidden block" src='/wh3.png' width="48" height="48" quality={100} unoptimized={true} />
            <h5 class="H5 grn-110 hidden md:block">Variety of 1000+ herbs</h5>
            <h5 class="H6 grn-110 md:hidden block">Variety of 1000+ herbs</h5>
            <p class="B4 grn-50 hidden md:block">Our extensive research has led us to a collection of over 1000 herbs, which are carefully dehydrated and processed to retain their efficacy.</p>
            <p class="B5 grn-50 md:hidden block">Our extensive research has led us to a collection of over 1000 herbs, which are carefully dehydrated and processed to retain their efficacy.</p>
          </div>
          <div class="md:px-4 px-6 py-8 grn-10 flex flex-col gap-4 rounded-lg flex-grow  basis-0">
            <Image class="H4 text-center hidden md:block" src='/wh4.png' width="96" height="96" quality={100} unoptimized={true} />
            <Image class="H5 md:hidden block" src='/wh4.png' width="48" height="48" quality={100} unoptimized={true} />
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
            <Image src='/about.png' class="md:hidden block" width="345" height="286" quality={100} unoptimized={true}  /></div>
          <div class="order-1 md:order-2 about-cont-right flex gap-6 flex-col md:gap-8">
            <h4 class="H4 hidden md:block">About Us</h4>
            <h4 class="H5 md:hidden block">About Us</h4>
            <p class="B4 hidden md:block black7">At Salym Wellness Centre, we provide safe and effective herbal medical products to promote health and wellness. Our meticulously produced natural remedies are made using the Organoleptic Method to ensure quality and potency. We offer naturopathic wellness solutions, including herbal therapy, physical therapy, counseling, and more for individuals, along with immune boosters, herbal tea blends, and other products. For businesses and pharmaceuticals, we provide access to safe herbal medicine solutions with adequate process documentation. Join our community today and discover the power of natural remedies. Subscribe to our newsletter for the latest updates.</p>
            <p class="B5 md:hidden block black7">At Salym Wellness Centre, we provide safe and effective herbal medical products to promote health and wellness. Our meticulously produced natural remedies are made using the Organoleptic Method to ensure quality and potency. We offer naturopathic wellness solutions, including herbal therapy, physical therapy, counseling, and more for individuals, along with immune boosters, herbal tea blends, and other products. For businesses and pharmaceuticals, we provide access to safe herbal medicine solutions with adequate process documentation. Join our community today and discover the power of natural remedies. Subscribe to our newsletter for the latest updates.</p>
            <div>
              <button class="buttonM hidden md:block H6">Connect with Us</button>
              <button class="buttonM md:hidden block subH">Connect with Us</button></div>
          </div>
        </section>
    </main>
    </>
  )
}
