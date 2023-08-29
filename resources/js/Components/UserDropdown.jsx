import { Link, router } from "@inertiajs/react";
import { Avatar, Dropdown } from "flowbite-react";
import {
  ChevronDown,
  ClipboardList,
  LogOut,
  Settings,
  User,
} from "lucide-react";

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
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
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
      <Dropdown.Item as="span" icon={User}>
        <Link href={route("profile.edit")}>My Profile</Link>
      </Dropdown.Item>
      <Dropdown.Item as="span" icon={ClipboardList}>
        My Order
      </Dropdown.Item>
      <Dropdown.Item as="span" icon={Settings}>
        <Link href={route("profile.edit")}>My Settings</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item as="span" icon={LogOut}>
        <Link href={route("logout")} method="post" as="button">
          Sign out
        </Link>
      </Dropdown.Item>
    </Dropdown>
  );
}
