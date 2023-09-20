import { Link } from "@inertiajs/react";
import { LogIn, Search } from "lucide-react";
import { Navbar, Button } from "flowbite-react";

import SearchBar from "@/Components/SearchBar";
import CartToggle from "@/Components/CartToggle";
import UserDropdown from "@/Components/UserDropdown";
import DarkModeToggle from "@/Components/DarkModeToggle";

export default function MainNavbar({ user, carts, filters }) {
  return (
    <div className="sticky top-0 z-20">
      <Navbar className="border-b">
        <Navbar.Brand as={Link} href="/">
          <img
            alt="Book Store Logo"
            className="mr-3 h-6 sm:h-9"
            src="/book-store.png"
          />
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
            Book Store
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 items-center">
          <Navbar.Toggle
            barIcon={Search}
            className="rounded-full w-9 h-9 justify-center p-1.5"
          />
          <DarkModeToggle />
          <CartToggle carts={carts} />
          {user && <UserDropdown user={user} />}
          {!user && (
            <Link href={route("login")} className="flex items-center">
              <Button pill size="sm">
                Sign in
                <LogIn className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
        <Navbar.Collapse>
          <SearchBar filters={filters} />
        </Navbar.Collapse>
      </Navbar>
      <div className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-2 sm:px-4">
        <div className="mx-auto flex flex-wrap items-center justify-between container py-2 font-semibold text-sm">
          <Link
            href={route("book.index")}
            className="text-gray-900 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-500"
          >
            All Books
          </Link>
          <div className="border-r-[1.5px] border-gray-200 dark:border-gray-700 h-4"></div>
          <Link
            href={route("book.index", { type: "fiction" })}
            className="text-gray-900 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-500"
          >
            Fiction
          </Link>
          <div className="border-r-[1.5px] border-gray-200 dark:border-gray-700 h-4"></div>
          <Link
            href={route("book.index", { type: "non-fiction" })}
            className="text-gray-900 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-500"
          >
            Non-Fiction
          </Link>
          <div className="hidden md:block border-r-[1.5px] border-gray-200 dark:border-gray-700 h-4"></div>
          <Link
            href={route("book.index", { category: "Fantasy" })}
            className="hidden md:block text-gray-900 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-500"
          >
            Fantasy
          </Link>
          <div className="hidden md:block border-r-[1.5px] border-gray-200 dark:border-gray-700 h-4"></div>
          <Link
            href={route("book.index", { category: "Romance" })}
            className="hidden md:block text-gray-900 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-500"
          >
            Romance
          </Link>
        </div>
      </div>
    </div>
  );
}
