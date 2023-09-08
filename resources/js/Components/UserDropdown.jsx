import { Link } from "@inertiajs/react";
import { Avatar, Dropdown } from "flowbite-react";
import { User, LogOut, MapPin, ChevronDown, ClipboardList } from "lucide-react";

export default function UserDropdown({ user }) {
  return (
    <Dropdown
      arrowIcon={false}
      inline
      className="!min-w-[200px]"
      label={
        <div className="flex items-center text-sm font-medium p-1 text-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-cyan-500 dark:hover:text-cyan-400 md:mr-0 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white">
          <div className="flex-1">
            <Avatar
              rounded
              size="sm"
              alt="User settings"
              img={`${user.avatar ? user.src : "/avatar.svg"}`}
              className="space-x-0 w-8 mr-2"
            />
          </div>
          <span className="w-0 lg:w-full lg:max-w-[90px] truncate lg:mr-1 text-left">
            {user.name}
          </span>
          <div className="w-4 h-4">
            <ChevronDown className="w-4 h-4" size={16} />
          </div>
        </div>
      }
    >
      <Dropdown.Header>
        <span className="block text-sm font-medium">{user.name}</span>
        <span className="block truncate text-sm">{user.email}</span>
      </Dropdown.Header>
      <Link href={route("profile.edit")}>
        <Dropdown.Item as="span" icon={User}>
          My Profile
        </Dropdown.Item>
      </Link>
      <Dropdown.Item as="span" icon={ClipboardList}>
        My Orders
      </Dropdown.Item>
      <Link href={route("profile.edit")}>
        <Dropdown.Item as="span" icon={MapPin}>
          My Addresses
        </Dropdown.Item>
      </Link>
      <Dropdown.Divider />
      <Link href={route("logout")} method="post" as="button" className="w-full">
        <Dropdown.Item as="span" icon={LogOut}>
          Sign out
        </Dropdown.Item>
      </Link>
    </Dropdown>
  );
}
