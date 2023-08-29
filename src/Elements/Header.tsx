const Header = () => {
  return (
    <section className="h-[720px] bg-very-pale-cyan pt-12">
      <img
        src="./bg-hero-desktop.svg"
        alt="bg hero desktop"
        className="absolute top-0"
      />
      <div className="relative z-10 flex justify-between items-center px-[90px] overflow-x-hidden">
        <img src="./logo.svg" alt="logo" />
        <button className="text-very-dark-cyan bg-white shadow-xl h-12 w-[200px] rounded-full font-bold hover:opacity-70 transition-opacity">
          Try It Free
        </button>
      </div>
      <div className="relative z-10 flex px-[90px] items-center gap-20 text-very-dark-cyan mt-[70px]">
        <div className="max-w-[508px]">
          <h1 className="font-bold text-[40px]">
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-[16.7299px] my-8">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="max-w-[280px] h-14 bg-pink text-very-pale-cyan rounded-full hover:opacity-70 transition-opacity font-bold">
            Get Started For Free
          </button>
        </div>
        <img
          src="./illustration-mockups.svg"
          alt="illustration mockups"
          className="max-w-[680px] max-h-[482px] object-cover overflow-x-hidden"
        />
      </div>
    </section>
  );
};

export default Header;
