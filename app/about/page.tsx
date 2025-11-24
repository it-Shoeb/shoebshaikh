import Image from "next/image";
import { unbounded } from "@/lib/fonts";
import { profilePhoto } from "@/lib/image";
import Link from "next/link";

const about = () => {
  return (
    <div>
      <div className="sm:flex items-end h-[calc(100vh-120px)] p-4 gap-4 overflow-hidden">
        <div className="about-lhs flex-3">
          <p className="sm:text-8xl text-4xl">hi there, i'm</p>
          <h1 className={`${unbounded.className} sm:text-[8rem] text-[4rem]`}>
            Shoeb Shaikh
          </h1>
        </div>
        <div className="about-rhs flex-1 h-full flex items-end justify-center">
          <Image
            className="object-cover h-full 2-full"
            src={profilePhoto}
            alt="profile photo"
          />
        </div>
      </div>

      <div className="resume flex flex-col gap-2 items-center justify-center w-full p-6">
        <h1 className={`${unbounded.className} text-[3rem]`}>The Resume</h1>
        <h1 className="sm:text-[2rem] text-2xl p-4 sm:w-1/2 sm:text-center text-justify">
          I have been learnig for the past 5 years with Javascript. I’ve been
          writing/refactoring code and connecting restful apis using React and
          Vuejs for a couple of years but I also worked with different stacks in
          the past.
        </h1>
        <Link
          className="px-8 py-2 border rounded-full animate-bounce"
          target="_blank"
          href={"shoeb_shaikh.pdf"}
        >
          Resume
        </Link>
      </div>

      <div className="soft-skills p-4 flex flex-col ">
        <h1 className="sm:text-4xl text-2xl mb-12">Soft Skills</h1>
        <ul className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          <li>Software skills</li>
          <li>JavaScript</li>
          <li>Angular JS</li>
          <li>React</li>
          <li>VueJS</li>
          <li>Vue3</li>
          <li>Vuex</li>
          <li>Pinia</li>
          <li>NuxtJS</li>
          <li>Serverless</li>
          <li>HTML5</li>
          <li>Git/SVN/CVS V.C. Software</li>
          <li>Agile Methodologies</li>
          <li>Design Systems</li>
          <li>CSS3/Less/Sass</li>
          <li>Grid/Flex</li>
          <li>Yarn/Grunt/Gulp/Webpack</li>
          <li>NodeJS</li>
          <li>MongoDB</li>
          <li>Java</li>
          <li>Oracle/SQL Server</li>
        </ul>
      </div>
    </div>
  );
};

export default about;
