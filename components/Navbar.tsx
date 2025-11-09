import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* <nav className="flex justify-between sm:w-1/2 w-[80%] fixed bottom-4 left-1/2  transform -translate-x-1/2 bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a]  sm:p-4 p-2 rounded-full"> */}
      <nav className="flex justify-between sm:w-1/2 w-[80%] fixed bottom-4 left-1/2  transform -translate-x-1/2 bg-[#ededed99] text-[#171717] to-[#0f172a]  sm:p-4 p-2 rounded-full">
        <div className="">
          <Link href={""} className="">
            logo
          </Link>
        </div>
        
        <ul className="flex gap-4">
          <li>
            <Link href={"#about"}>About</Link>
          </li>
          <li>
            <Link href={"Works"}>Works</Link>
          </li>
          <li>
            <Link href={"Services"}>Services</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
