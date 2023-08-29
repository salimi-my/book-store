import { Link } from "@inertiajs/react";
import { LogIn, Search } from "lucide-react";
import { Button, Flowbite } from "flowbite-react";
import { Navbar, TextInput } from "flowbite-react";

import UserDropdown from "@/Components/UserDropdown";

const searchInput = {
  textInput: {
    field: {
      base: "relative w-full md:w-[500px]",
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
          src="/bookstore.png"
        />
        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
          Book Store
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle barIcon={Search} className="mr-2 rounded-full" />
        {user && <UserDropdown user={user} />}
        {!user && (
          <Button pill size="sm">
            <Link href={route("login")} className="flex items-center">
              Sign in
              <LogIn className="ml-2 h-5 w-5" />
            </Link>
          </Button>
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
