const Header = () => {
  return (
    <section className="min-h-[720px] bg-very-pale-cyan pt-12 lg:pt-6">
      <img
        src="./bg-hero-desktop.svg"
        alt="bg hero desktop"
        className="absolute top-0"
      />
      <div className="relative z-10 flex justify-between items-center px-[90px] lg:px-4 w-screen">
        <img
          src="./logo.svg"
          alt="logo"
          className=" lg:w-[105px] object-cover"
        />
        <button className="text-very-dark-cyan bg-white shadow-xl h-12 w-[200px] rounded-full font-bold hover:opacity-70 transition-opacity lg:h-6 lg:w-[96px] lg:text-xs">
          Try It Free
        </button>
      </div>
      <div className="relative z-10 flex px-[90px] items-center gap-20 text-very-dark-cyan mt-[70px] lg:flex-col lg:px-[38px] lg:text-center reveal">
        <div className="max-w-[508px]">
          <h1 className="font-bold text-[40px] lg:text-2xl">
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-[16.7299px] my-8 lg:text-[15px]">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="max-w-[280px] h-14 bg-pink text-very-pale-cyan rounded-full hover:opacity-70 transition-opacity font-bold lg:w-[240px] lg:h-[40px] lg:text-xs">
            Get Started For Free
          </button>
        </div>
        <img
          src="./illustration-mockups.svg"
          alt="illustration mockups"
          className="max-w-[680px] max-h-[482px] object-cover overflow-x-hidden lg:w-full"
        />
      </div>
    </section>
  );
};

export default Header;
