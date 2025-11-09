import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="">
        <h1>Web Development and Design Studio from the Future</h1>
      </main>
      <section className="about">
        <h1>About Section</h1>
      </section>
      <section className="project">
        <h1>Projects Section</h1>
      </section>
      <footer className="relative w-full">
        <SocialLinks />
      </footer>
    </>
  );
}
