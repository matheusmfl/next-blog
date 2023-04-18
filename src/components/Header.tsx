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

        <h1>Blog Matheus Fonteles</h1>
      </div>

      <div>
        <Link href='/' className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full">
          Confira agora meu portfólio!
        </Link>
      </div>
    </header>
  );
}
