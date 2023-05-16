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

export default function First() {
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
        </header>

        <div class=" max-w-3xl w-full mx-auto">
          <div class="lg:pt-32 pt-16 flex flex-col item gap-8 lg:gap-10">
            <div class="lg:h-96 object-cover h-56 w-full rounded-2xl overflow-hidden">
              <div class="headImg"></div>
            </div>
            <div class="flex flex-col gap-6">
              <h4 class="H5 hidden lg:block whitespace-nowrap overflow-hidden text-ellipsis">
                The Healing Powers of Methyl Cream
              </h4>
              <h4 class="H5 lg:hidden block whitespace-nowrap overflow-hidden text-ellipsis">
                The Healing Powers of Methyl Cream
              </h4>

              <div class="flex flex-col gap-4 lg:gap-6">
              <div class="flex-row gap-2 lg:hidden flex items-center">
                <div class="flex flex-col gap-2">
                  <p class="subH">By Salym Wellness Center Team</p>
                  <p class="subH black7">Published 2nd May, 2023</p>
                </div>
              </div>
              
              <div class="flex-row gap-4 hidden lg:flex items-center">
                <div class="flex flex-col gap-2">
                  <p class="h6">By Salym Wellness Center Team</p>
                  <p class="subH black7">Published 2nd May, 2023</p>
                </div>
              </div>

              <div class="flex gap-8 lg:justify-start justify-between items-center">
                <span class="grn-10 grn-60 H6 hidden lg:block py-2 px-4 rounded-lg ">
                  Herbal Wellness
                </span>
                <span class=" lg:hidden block grn-10 grn-60 subH py-2 px-4 rounded-lg">
                  Herbal Wellness
                </span>
                <p class="H6 hidden lg:block">3 mins read</p>
                <p class="subH lg:hidden block">3 mins read</p>
              </div>
            </div>
            </div>
          </div>

          <div class=" flex flex-col gap-8 lg:gap-12 pt-12 lg:pt-16">
            <div class="gap-4 flex flex-col">
              <p class="B4 hidden lg:block">
                Methyl cream, a natural remedy derived from medicinal plants,
                has gained popularity for its remarkable healing properties.
                This blog post explores the benefits and uses of methyl cream in
                promoting overall well-being and addressing various health
                concerns. Discover how this herbal preparation can enhance your
                journey towards optimal health and vitality.
              </p>
              <p class="B5 lg:hidden block">
                Methyl cream, a natural remedy derived from medicinal plants,
                has gained popularity for its remarkable healing properties.
                This blog post explores the benefits and uses of methyl cream in
                promoting overall well-being and addressing various health
                concerns. Discover how this herbal preparation can enhance your
                journey towards optimal health and vitality.
              </p>
            </div>
            <div class="gap-4 flex flex-col">
              <h4 class="H4 hidden lg:block">What is Methyl Cream?</h4>
              <h4 class="H6 lg:hidden block">What is Methyl Cream?</h4>
              <p class="B4 hidden lg:block">
                Methyl cream is a topical herbal preparation formulated with a
                blend of plant extracts known for their therapeutic properties.
                It is commonly used in natural medicine to alleviate discomfort,
                promote healing, and support the body's natural healing
                processes.
              </p>
              <p class="B5 lg:hidden block">
                Methyl cream is a topical herbal preparation formulated with a
                blend of plant extracts known for their therapeutic properties.
                It is commonly used in natural medicine to alleviate discomfort,
                promote healing, and support the body's natural healing
                processes.
              </p>
            </div>
            <div class="gap-4 flex flex-col">
              <h4 class="H4 hidden lg:block">
                Relieving Muscle and Joint Discomfort
              </h4>
              <h4 class="H6 lg:hidden block">
                Relieving Muscle and Joint Discomfort
              </h4>
              <p class="B4 hidden lg:block">
                One of the notable benefits of methyl cream is its ability to
                provide relief from muscle and joint discomfort. The natural
                ingredients in methyl cream work synergistically to soothe sore
                muscles, reduce inflammation, and improve mobility. Regular
                application of methyl cream on affected areas can help alleviate
                pain and support faster recovery.
              </p>
              <p class="B5 lg:hidden block">
                One of the notable benefits of methyl cream is its ability to
                provide relief from muscle and joint discomfort. The natural
                ingredients in methyl cream work synergistically to soothe sore
                muscles, reduce inflammation, and improve mobility. Regular
                application of methyl cream on affected areas can help alleviate
                pain and support faster recovery.
              </p>
            </div>
            <div class="gap-4 flex flex-col">
              <h4 class="H4 hidden lg:block">Enhancing Skin Health</h4>
              <h4 class="H6 lg:hidden block">Enhancing Skin Health</h4>
              <p class="B4 hidden lg:block">
                In addition to its muscle and joint benefits, methyl cream also
                offers remarkable advantages for skin health. Its nourishing
                properties help moisturize the skin, promote a healthy
                complexion, and address various skin concerns. From dryness and
                irritation to minor cuts and bruises, methyl cream can be a
                valuable addition to your skincare routine.
              </p>
              <p class="B5 lg:hidden block">
                In addition to its muscle and joint benefits, methyl cream also
                offers remarkable advantages for skin health. Its nourishing
                properties help moisturize the skin, promote a healthy
                complexion, and address various skin concerns. From dryness and
                irritation to minor cuts and bruises, methyl cream can be a
                valuable addition to your skincare routine.
              </p>
            </div>
            <div class="gap-4 flex flex-col">
              <h4 class="H4 hidden lg:block">
                Supporting Respiratory Wellness
              </h4>
              <h4 class="H6 lg:hidden block">
                Supporting Respiratory Wellness
              </h4>
              <p class="B4 hidden lg:block">
                Methyl cream has been found to provide respiratory support and
                relief from common respiratory discomfort. When applied
                topically or inhaled, the herbal components in methyl cream can
                help soothe the airways, ease congestion, and promote a healthy
                respiratory system.
              </p>
              <p class="B5 lg:hidden block">
                Methyl cream has been found to provide respiratory support and
                relief from common respiratory discomfort. When applied
                topically or inhaled, the herbal components in methyl cream can
                help soothe the airways, ease congestion, and promote a healthy
                respiratory system.
              </p>
            </div>
            <div class="gap-4 flex flex-col">
              <h4 class="H4 hidden lg:block">Promoting Overall Well-being</h4>
              <h4 class="H6 lg:hidden block">Promoting Overall Well-being</h4>
              <p class="B4 hidden lg:block">
                Beyond its targeted benefits, methyl cream can contribute to
                overall well-being. Its natural ingredients have antioxidant and
                anti-inflammatory properties, which support the body's immune
                system and help maintain a balanced state of health. Regular use
                of methyl cream can complement a holistic approach to wellness.
              </p>
              <p class="B5 lg:hidden block">
                Beyond its targeted benefits, methyl cream can contribute to
                overall well-being. Its natural ingredients have antioxidant and
                anti-inflammatory properties, which support the body's immune
                system and help maintain a balanced state of health. Regular use
                of methyl cream can complement a holistic approach to wellness.
              </p>
            </div>
            <div class="gap-4 flex flex-col">
              <h4 class="H4 hidden lg:block">Conclusion</h4>
              <h4 class="H6 lg:hidden block">Conclusion</h4>
              <p class="B4 hidden lg:block">
                Harnessing the healing powers of methyl cream can be a valuable
                addition to your wellness journey. Whether you seek relief from
                muscle and joint discomfort, improved skin health, or support
                for respiratory wellness, methyl cream offers a natural and
                effective solution. Incorporate this herbal remedy into your
                self-care routine and experience the transformative benefits it
                has to offer.
              </p>
              <p class="B5 lg:hidden block">
                Harnessing the healing powers of methyl cream can be a valuable
                addition to your wellness journey. Whether you seek relief from
                muscle and joint discomfort, improved skin health, or support
                for respiratory wellness, methyl cream offers a natural and
                effective solution. Incorporate this herbal remedy into your
                self-care routine and experience the transformative benefits it
                has to offer.
              </p>
            </div>
          </div>
        </div>

        <footer class="lg:pt-24 pt-20 m-0">
          <div class="footer px-6 text-white">
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
