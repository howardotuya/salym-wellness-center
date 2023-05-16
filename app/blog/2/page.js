"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import LinesEllipsis from "react-lines-ellipsis";

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
        <Link href="/" class="flex justify-end pt-6">
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
        </Link>
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
            <Link href="/">
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
              unoptimized={true}
              class="lg:hidden block"
              src="/menu.svg"
              width="44"
              height="44"
              quality={100}
            />
          </nav>
        </header>

        <div class=" max-w-3xl w-full mx-auto">
          <div class="lg:pt-32 pt-16 flex flex-col item gap-8 lg:gap-10">
            <div class="lg:h-96 h-56 w-full rounded-2xl overflow-hidden">
              <div class="headImg2"></div>
            </div>
            <div class="flex flex-col gap-6">
              <h4 class="H5 hidden lg:block whitespace-nowrap overflow-hidden text-ellipsis">
                The Power of Herbal Therapy for Stress Management
              </h4>
              <h4 class="H5 lg:hidden block whitespace-nowrap overflow-hidden text-ellipsis">
                The Power of Herbal Therapy for Stress Management
              </h4>

              <div class="flex flex-col gap-4 lg:gap-6">
                <div class="flex-row gap-4 hidden lg:flex items-center">
                  <div class="flex flex-col gap-2">
                    <p class="h6">By Salym Wellness Center Team</p>
                    <p class="subH black7">Published 5th May, 2023</p>
                  </div>
                </div>
                <div class="flex-row gap-2 lg:hidden flex items-center">
                  <div class="flex flex-col gap-2">
                    <p class="subH">By Salym Wellness Center Team</p>
                    <p class="subH black7">Published 5th May, 2023</p>
                  </div>
                </div>

                <div class="flex justify-between items-center">
                  <span class="grn-10 grn-60 H6 hidden lg:block py-2 px-4 rounded-lg ">
                    Herbal Therapy
                  </span>
                  <span class=" lg:hidden block grn-10 grn-60 subH py-2 px-4 rounded-lg">
                    Herbal Therapy
                  </span>
                  <p class="H6 hidden lg:block"> 5 mins read</p>
                  <p class="subH lg:hidden block"> 5 mins read</p>
                </div>
              </div>
            </div>
          </div>

          <div class=" flex flex-col gap-8 lg:gap-12 pt-12 lg:pt-16">
            <div class="gap-4 flex flex-col">
              <p class="B4 hidden lg:block">
                Stress has become an unavoidable part of our modern lives,
                impacting our physical and mental well-being. While there are
                various approaches to managing stress, herbal therapy has
                emerged as a powerful and natural solution. In this blog post,
                we will explore the incredible potential of herbal therapy in
                stress management and how it can help restore balance and
                harmony to our lives.
              </p>
              <p class="B5 lg:hidden block">
                Stress has become an unavoidable part of our modern lives,
                impacting our physical and mental well-being. While there are
                various approaches to managing stress, herbal therapy has
                emerged as a powerful and natural solution. In this blog post,
                we will explore the incredible potential of herbal therapy in
                stress management and how it can help restore balance and
                harmony to our lives.
              </p>
            </div>
            <div class="gap-4 flex flex-col">
              <h4 class="H4 hidden lg:block">Understanding Herbal Therapy:</h4>
              <h4 class="H6 lg:hidden block">Understanding Herbal Therapy:</h4>
              <p class="B4 hidden lg:block">
                Herbal therapy, also known as herbal medicine or phytotherapy,
                involves using plant-based remedies to support the body's
                natural healing processes. With a rich history dating back
                centuries, herbal therapy offers a holistic approach to wellness
                by leveraging the therapeutic properties of herbs and
                botanicals.
              </p>
              <p class="B5 lg:hidden block">
                Herbal therapy, also known as herbal medicine or phytotherapy,
                involves using plant-based remedies to support the body's
                natural healing processes. With a rich history dating back
                centuries, herbal therapy offers a holistic approach to wellness
                by leveraging the therapeutic properties of herbs and
                botanicals.
              </p>
            </div>
            <div class="gap-4 flex flex-col">
              <h4 class="H4 hidden lg:block">
                The Science Behind Herbal Therapy:
              </h4>
              <h4 class="H6 lg:hidden block">
                The Science Behind Herbal Therapy:
              </h4>
              <p class="B4 hidden lg:block">
                Scientific research has shed light on the efficacy of herbal
                therapy in stress management. Certain herbs, such as
                ashwagandha, chamomile, and holy basil, have adaptogenic
                properties that help the body adapt and respond to stress more
                effectively. These herbs can promote relaxation, reduce anxiety,
                and enhance overall well-being.
              </p>
              <p class="B5 lg:hidden block">
                Scientific research has shed light on the efficacy of herbal
                therapy in stress management. Certain herbs, such as
                ashwagandha, chamomile, and holy basil, have adaptogenic
                properties that help the body adapt and respond to stress more
                effectively. These herbs can promote relaxation, reduce anxiety,
                and enhance overall well-being.
              </p>
            </div>
            <div class="gap-4 flex flex-col">
              <h4 class="H4 hidden lg:block">Herbs for Stress Management:</h4>
              <h4 class="H6 lg:hidden block">Herbs for Stress Management:</h4>
              <p class="B4 hidden lg:block">
                <div>
                  1. Ashwagandha: This ancient herb has been used for centuries
                  in Ayurvedic medicine to combat stress and anxiety.
                  Ashwagandha helps regulate the body's stress response by
                  reducing cortisol levels and promoting a sense of calm.{" "}
                </div>
                <div>
                  2. Chamomile: Known for its soothing properties, chamomile is
                  a popular herb for relaxation and stress relief. It can help
                  ease tension, promote better sleep, and alleviate anxiety
                  symptoms.
                </div>
                <div>
                  {" "}
                  3. Holy Basil: Revered as a sacred herb in many cultures, holy
                  basil has adaptogenic properties that support the body's
                  stress response. It can help reduce stress-related symptoms,
                  boost resilience, and enhance mental clarity.
                </div>
              </p>
              <p class="B5 lg:hidden block">
                <div>
                  1. Ashwagandha: This ancient herb has been used for centuries
                  in Ayurvedic medicine to combat stress and anxiety.
                  Ashwagandha helps regulate the body's stress response by
                  reducing cortisol levels and promoting a sense of calm.{" "}
                </div>
                <div>
                  2. Chamomile: Known for its soothing properties, chamomile is
                  a popular herb for relaxation and stress relief. It can help
                  ease tension, promote better sleep, and alleviate anxiety
                  symptoms.
                </div>
                <div>
                  {" "}
                  3. Holy Basil: Revered as a sacred herb in many cultures, holy
                  basil has adaptogenic properties that support the body's
                  stress response. It can help reduce stress-related symptoms,
                  boost resilience, and enhance mental clarity.
                </div>
              </p>
            </div>
            <div class="gap-4 flex flex-col">
              <h4 class="H4 hidden lg:block">
                Incorporating Herbal Therapy into Your Routine:
              </h4>
              <h4 class="H6 lg:hidden block">
                Incorporating Herbal Therapy into Your Routine:
              </h4>
              <p class="B4 hidden lg:block">
                If you're considering incorporating herbal therapy into your
                stress management routine, it's important to consult with a
                qualified herbalist or healthcare professional. They can guide
                you in selecting the right herbs and dosage for your specific
                needs. Additionally, integrating relaxation techniques like
                meditation, yoga, and deep breathing exercises can complement
                the effects of herbal therapy.
              </p>
              <p class="B5 lg:hidden block">
                If you're considering incorporating herbal therapy into your
                stress management routine, it's important to consult with a
                qualified herbalist or healthcare professional. They can guide
                you in selecting the right herbs and dosage for your specific
                needs. Additionally, integrating relaxation techniques like
                meditation, yoga, and deep breathing exercises can complement
                the effects of herbal therapy.
              </p>
            </div>
            <div class="gap-4 flex flex-col">
              <h4 class="H4 hidden lg:block">Conclusion</h4>
              <h4 class="H6 lg:hidden block">Conclusion</h4>
              <p class="B4 hidden lg:block">
                In a world filled with constant stressors, herbal therapy offers
                a natural and effective way to find relief and restore balance.
                By harnessing the power of herbs, we can nurture our well-being,
                improve resilience, and cultivate a calmer state of mind.
                Embrace the wisdom of nature and explore the potential of herbal
                therapy for stress management. Take a step towards holistic
                wellness and reclaim your inner harmony.
              </p>
              <p class="B5 lg:hidden block">
                In a world filled with constant stressors, herbal therapy offers
                a natural and effective way to find relief and restore balance.
                By harnessing the power of herbs, we can nurture our well-being,
                improve resilience, and cultivate a calmer state of mind.
                Embrace the wisdom of nature and explore the potential of herbal
                therapy for stress management. Take a step towards holistic
                wellness and reclaim your inner harmony.
              </p>
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
