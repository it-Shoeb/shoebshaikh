import Image from "next/image";
import Link from "next/link";

import {
  discord,
  github,
  gmail,
  instagram,
  linkedin,
  whatsapp,
} from "@/lib/icons";

const SocialLinks = () => {
  return (
    <>
      <div className="social-links absolute -right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 px-3 py-4 bg-[#ededed99] rounded-tl-xl rounded-bl-xl">
        <Link href={""}>
          <Image
            className="grayscale-100 hover:grayscale-0 transition-all duration-300"
            src={discord}
            alt="Discord"
            width={24}
            height={24}
            title="Discord"
          />
        </Link>
        <Link href={""}>
          <Image
            className="grayscale-100 hover:grayscale-0 transition-all duration-300"
            src={github}
            alt="GitHub"
            width={24}
            height={24}
            title="Github"
          />
        </Link>
        <Link href={""}>
          <Image
            className="grayscale-100 hover:grayscale-0 transition-all duration-300"
            src={gmail}
            alt="Gmail"
            width={24}
            height={24}
            title="Gmail"
          />
        </Link>
        <Link href={""}>
          <Image
            className="grayscale-100 hover:grayscale-0 transition-all duration-300"
            src={instagram}
            alt="Instagram"
            width={24}
            height={24}
            title="Instagram"
          />
        </Link>
        <Link href={""}>
          <Image
            className="grayscale-100 hover:grayscale-0 transition-all duration-300"
            src={linkedin}
            alt="LinkedIn"
            width={24}
            height={24}
            title="LinkedIn"
          />
        </Link>
        <Link href={""}>
          <Image
            className="grayscale-100 hover:grayscale-0 transition-all duration-300"
            src={whatsapp}
            alt="WhatsApp"
            width={24}
            height={24}
            title="Whatsapp"
          />
        </Link>
      </div>
    </>
  );
};

export default SocialLinks;
