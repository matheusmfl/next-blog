import Image from "next/image";
import { BuildingOffice2Icon } from "@heroicons/react/24/solid";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      {/* <Image
        src="https://links.papareact.com/1m8"
        width={50}
        height={50}
        alt="logo"
        className="rounded-full object-cover"
      /> */}
      <BuildingOffice2Icon className="rounded-full object-cover h-12 w-12 
      " />



      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
