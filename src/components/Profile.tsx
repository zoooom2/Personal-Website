
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Profile() {
  return (
    <section
      id="profile"
      className="flex flex-col xl:flex-row justify-center items-center gap-10 sm:px-[10rem] xl:h-[75vh] max-sm:h-[90vh] md:pb-[30px]"
    >
      <div className="flex aspect-square w-[300px] sm:w-[400px] mx-auto max-xl:justify-center">
        <img src="/linkedIn Profile.jpg" alt="profile" className="object-cover rounded-full aspect-square" /> 
      </div>
      <div className="text-center self-center font-poppins flex flex-col gap-3 justify-center">
        <p className="font-semibold text:[16px] sm:text-[24px]">Hello, I'm</p>
        <h1 className="text-[36px] sm:text-5xl font-bold">Roqeeb Adeyinka</h1>
        <p className="sm:text-2xl text-[16px] mb-4">Software Engineer</p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="font-semibold border border-gray-700 rounded-full px-4 py-3 hover:bg-black hover:text-white transition-all duration-300 max-sm:text-[12px]"
          >
            Contact
          </a>
          <a
            href="/Roqeeb_Adeyinka_Tech_CV.docx"
            className="font-semibold border border-gray-700 rounded-full px-4 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300 max-sm:text-[12px]"
          >
            Resume
          </a>
        </div>
        <div id="socials-container" className="flex justify-center mt-4 gap-4">
          <a href="https://github.com/zoooom2" target="_blank" rel="noopener">
            <FaGithub size={32}/>
          </a>
          <a href="https://linkedin.com/in/roqeeb-adeyinka" target="_blank" rel="noopener">
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
