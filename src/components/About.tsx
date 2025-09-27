

export default function About() {
  return (
    <section id="about" className="relative min-h-fit px-[10rem] max-sm:px-0 max-xl:px-[5%] max-sm:h-[50vh] flex flex-col justify-center gap-[30px]">
      <h2 className="title text-5xl text-center">About Me</h2>
      <div className="flex flex-wrap gap-2 sm:gap-8 my-8">
        <div className="details-container flex-1 text-center p-6 border border-gray-400 rounded-2xl bg-white">
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <p>3+ Years in Software Development</p>
        </div>
        <div className="details-container flex-1 text-center p-6 border border-gray-400 rounded-2xl bg-white">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p>B.Eng. Electrical & Electronics Engineering</p>
        </div>
      </div>
    </section>
  );
}
