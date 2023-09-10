import PaymentOption from "@/Components/PaymentOption";
import {
  Facebook,
  Github,
  Instagram,
  ShieldCheck,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-700">
      <div className="mx-auto w-full container py-16 px-4 sm:px-6">
        <div className="md:flex md:justify-between">
          <div className="grid gap-12 lg:grid-cols-6 lg:gap-8 xl:gap-24">
            <div className="col-span-2">
              <a href="#" className="flex mb-5">
                <img
                  src="/book-store.png"
                  className="h-8 mr-3"
                  alt="Book Store Logo"
                />
                <span className="self-center text-xl font-bold whitespace-nowrap text-cyan-700 dark:text-white">
                  Book Store
                </span>
              </a>
              <p className="max-w-lg mb-3 text-gray-600 dark:text-gray-400">
                Embark on literary journeys with our online bookstore. Discover
                diverse titles and authors across genres. Your next adventure
                awaits within the pages. Explore today!
              </p>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
                Books
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    href="#"
                    className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  >
                    All Books
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  >
                    Buy Books
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  >
                    Search Books
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
                Help and support
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    href="#"
                    rel="noreferrer nofollow"
                    className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  >
                    About us
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    rel="noreferrer nofollow"
                    className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
                Follow us
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    href="#"
                    className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    rel="noreferrer nofollow"
                    className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  >
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    rel="noreferrer nofollow"
                    className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
                Legal
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    href="#"
                    className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-600 lg:my-8" />
        <div className="grid md:grid-cols-3 gap-6 md:gap-3">
          <div className="flex flex-col items-start justify-start">
            <p className="text-gray-600 dark:text-gray-400 font-semibold">
              Connect with us
            </p>
            <div className="flex mt-3 gap-4 sm:justify-center">
              <a
                href="https://www.facebook.com/mysalimi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-cyan-900 dark:hover:text-white"
              >
                <Facebook />
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="https://www.instagram.com/salimi.my/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-cyan-900 dark:hover:text-white"
              >
                <Instagram />
                <span className="sr-only">Instagram page</span>
              </a>
              <a
                href="https://twitter.com/mysalimi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-cyan-900 dark:hover:text-white"
              >
                <Twitter />
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="https://github.com/salimi-my"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-cyan-900 dark:hover:text-white"
              >
                <Github />
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
          <PaymentOption />
          <div className="flex items-center gap-1">
            <ShieldCheck className="text-cyan-600" size={65} />
            <div className="flex flex-col">
              <p className="text-cyan-500 font-bold uppercase leading-none">
                Safe checkout
              </p>
              <p className="text-cyan-700 font-bold uppercase leading-none text-[1.17rem]">
                guaranteed
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-600 lg:my-8" />
        <p className="font-normal text-gray-600 dark:text-gray-400 text-start">
          Book Store © {year}. Created by{" "}
          <a
            href="https://www.salimi.my"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-cyan-700 dark:hover:text-cyan-500"
          >
            Salimi
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
