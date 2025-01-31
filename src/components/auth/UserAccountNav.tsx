"use client"

import {
  LayoutDashboard,
  LogOut,
  ShoppingBag,
  User as UserIcon,
} from "lucide-react";
import { type User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";

import UserAvatar from "@/components/auth/UserAvatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

interface UserAccountNavProps {
  user: Pick<User, "name" | "image" | "email">;
}

const UserAccountNav: React.FC<UserAccountNavProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <UserAvatar
          className="h-8 w-8 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
          user={{
            name: user.name || null,
            image: user.image || null,
          }}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-72 md:w-96"
        align="end"
      >
        <div className="flex items-center gap-3 p-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600">
          <UserAvatar
            className="h-10 w-10 rounded-full border border-gray-300"
            user={{
              name: user.name || null,
              image: user.image || null,
            }}
          />
          <div className="flex flex-col">
            {user.name && <p className="text-sm font-medium text-white">{user.name}</p>}
            {user.email && (
              <p className="text-xs text-white truncate" title={user.email}>
                {user.email}
              </p>
            )}
          </div>
        </div>

        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
          <Link
  href=""
  className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-400 cursor-not-allowed pointer-events-none"
>
  <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
  <span className="text-sm text-gray-400">Account</span>
</Link>


          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href="/dashboard/orders"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
            >
              <LayoutDashboard className="h-5 w-5 text-gray-600" aria-hidden="true" />
              <span className="text-sm text-gray-700">My Dashboard</span>
            </Link>
          </DropdownMenuItem>
       
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuItem
          onClick={() => signOut()}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-red-600 hover:bg-red-100"
        >
          <LogOut className="h-5 w-5" aria-hidden="true" />
          <span className="text-sm">Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
