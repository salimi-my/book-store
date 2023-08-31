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
        <div className="flex flex-col items-center justify-center">
          <p className="font-normal text-gray-600 dark:text-gray-400">
            Book Store © {year}. Created by{" "}
            <a
              href="https://www.salimi.my"
              target="_blank"
              className="hover:underline"
            >
              Salimi
            </a>
            . All Rights Reserved
          </p>
          <div className="flex mt-4 gap-4 sm:justify-center">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="fa-brands fa-facebook fa-lg"></i>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="fa-brands fa-instagram fa-lg"></i>
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="fa-brands fa-twitter fa-lg"></i>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <i className="fa-brands fa-github fa-lg"></i>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
