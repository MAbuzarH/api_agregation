"use client";

// import { Fragment } from 'react';
import { usePathname } from "next/navigation";

// import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Tcacking", href: "/tracking" },
  { name: "Simple", href: "/tracking-old" },
  { name: "Billing", href: "/billing" },
  { name: "Api", href: "/api" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="bg-gray-100 pb-2">
      <div className="flex items-center  gap-10  pt-10 pb-5 w-[90%] m-auto  border-b-2   ">
        {navigation.map((nav) => (
          <Link
            href={`/account/${nav.href}`}
            className={` border-b-2 text-lg h-full `}
          >
            {nav.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
