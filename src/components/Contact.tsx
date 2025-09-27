
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col justify-center h-[30vh] sm:h-[50vh] px-[10rem] max-xl:px-[5%] gap-4">
      <h2 className="title text-center text-[36px] sm:text-5xl ">Contact</h2>
      <div className="contact-info-upper-container flex justify-around flex-wrap gap-4 border border-gray-400 rounded-2xl bg-gray-50 p-4">
        <div className="contact-info-container flex items-center gap-2">
          <MdMail />
          <p className="sm:text-lg text-[14px]">roqeebadeyinka@gmail.com</p>
        </div>
        <div className="contact-info-container flex items-center gap-2">
          <FaPhone />
          <p className="text-[14px] sm:text-lg">+234 906 067 8621</p>
        </div>
      </div>
    </section>
  );
}
