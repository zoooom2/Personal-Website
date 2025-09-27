

export default function About() {
  return (
    <section id="about" className="relative min-h-fit px-[10rem] max-sm:px-0 max-xl:px-[5%] max-sm:h-[40vh] flex flex-col justify-center gap-[30px]">
      <h2 className="title text-[36px] sm:text-5xl text-center">About Me</h2>
      <div className="flex flex-wrap gap-2 sm:gap-8 my-8">
        <div className="flex-1 text-center sm:p-6 border border-gray-400 rounded-2xl bg-white flex flex-col justify-center gap-3 py-6">
          <h3 className="text-[18px] sm:text-xl font-semibold">Experience</h3>
          <p className="max-sm:text-[12px]">3+ Years in Software Development</p>
        </div>
        <div className="flex-1 text-center sm:p-6 border border-gray-400 rounded-2xl bg-white flex flex-col justify-center gap-3 py-6">
          <h3 className="text-xl font-semibold">Education</h3>
          <p className="max-sm:text-[12px]">B.Eng. Electrical & Electronics Engineering</p>
        </div>
      </div>
    </section>
  );
}
