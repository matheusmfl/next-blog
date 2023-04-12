import { BuildingOffice2Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center- justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="">
          <BuildingOffice2Icon className="rounded-full object-cover h-12 w-12" />
        </Link>
      </div>

      <div></div>
    </header>
  );
}
