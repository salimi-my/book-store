import { Link } from "@inertiajs/react";
import { LogIn, Search } from "lucide-react";
import { Navbar, TextInput } from "flowbite-react";
import { Button, Flowbite } from "flowbite-react";

import UserDropdown from "@/Components/UserDropdown";
import DarkModeToggle from "@/Components/DarkModeToggle";

const searchInput = {
  textInput: {
    field: {
      base: "relative w-full md:w-[350px] lg:w-[500px]",
      input: {
        withAddon: {
          off: "rounded-full",
        },
      },
    },
  },
};

export default function MainNavbar({ user }) {
  return (
    <Navbar border className="sticky top-0 z-20">
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
      <div className="flex md:order-2">
        <DarkModeToggle />
        <Navbar.Toggle
          barIcon={Search}
          className="mr-1 rounded-full w-11 justify-center"
        />
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
        <Flowbite theme={{ theme: searchInput }}>
          <TextInput
            icon={Search}
            placeholder="Search for Title, Author, Keyword or ISBN"
            required
            type="text"
          />
        </Flowbite>
      </Navbar.Collapse>
    </Navbar>
  );
}
