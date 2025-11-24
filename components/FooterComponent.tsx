import { unbounded } from "@/lib/fonts";
import Link from "next/link";
import { logo } from "@/lib/icons";
import Image from "next/image";

const FooterComponent = () => {
  return (
    <footer className="relative w-full flex gap-4 flex-col">
      <div className="contact sm:flex items-center justify-between gap-8">
        <div className="contact-lhs p-4 w-full">
          <h1
            className={`${unbounded.className} sm:text-xl md:2xl lg:text-[2rem]`}
          >
            Got a problem to solve?
          </h1>
          <p>
            Get your space suit ready and tell us your ideas to develop your
            dream web solution.
          </p>
        </div>

        <form action="" className="contact-rhs p-4 flex flex-col gap-8 w-full">
          <input
            className="focus:outline-none border-b py-2"
            type="text"
            name=""
            placeholder="Enter Your Name"
            id=""
          />
          <input
            className="focus:outline-none border-b py-2"
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email Address"
          />

          <textarea
            name=""
            id=""
            className="focus:outline-none border-b py-2"
            placeholder="what you want"
          ></textarea>
          <input
            className="focus:outline-none border py-2 rounded-full transition-all hover:-translate-y-1 duration-300 ease-linear cursor-pointer"
            type="submit"
            value="Let's Connect"
          />
        </form>
      </div>

      <hr />

      <div className="flex flex-col justify-between items-center gap-4 pb-20 p-4">
        <div className="logo flex flex-col sm:flex-row justify-between items-center gap-4 p-4 w-1/2 sm:w-full">
          <div className="logo">
            {/* <img src={logo} alt="" /> */}
            <Image src={logo} alt="" width={50} height={50} />
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-36 gap-4  sm:text-sm md:text-xl xl:2xl">
            <ul className="nav-links flex flex-col gap-2">
              <li>
                <Link href={""}>Home</Link>
              </li>
              <li>
                <Link href={""}>About</Link>
              </li>
              <li>
                <Link href={""}>Work</Link>
              </li>
              <li>
                <Link href={""}>Services</Link>
              </li>
            </ul>

            <ul className="social-links flex flex-col gap-2">
              <li>
                <Link href={"https://github.com/it-Shoeb"}>Github</Link>
              </li>
              <li>
                <Link href={"https://www.linkedin.com/in/shoebshaikh-its/"}>
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  href={"https://discord.com/channels/@me/1277828475410972756"}
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link href={"mailto:shaikhshoebmy@gmail.com"}>Email</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="termandconsdition">
          Shoeb Shaikh 2025 | @ All Right Reserved
        </p>
      </div>

      {/* <SocialLinks /> */}
    </footer>
  );
};

export default FooterComponent;
