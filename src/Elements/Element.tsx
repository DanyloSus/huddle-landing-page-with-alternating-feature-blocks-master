interface ElementProps {
  h2: string;
  p: string;
  isRight?: boolean;
  img: string;
}

const Element = ({ h2, p, isRight, img }: ElementProps) => {
  return (
    <div className="w-full h-[440px] lg:h-auto bg-white shadow-lg rounded-xl overflow-x-hidden lg:text-center reveal">
      {isRight ? (
        <div className="pl-[120px] pr-7 flex items-center w-full h-full justify-between lg:py-14 lg:px-10 lg:flex-col lg:gap-10">
          <img src={`./${img}`} alt={img} className="w-1/3 lg:w-full" />{" "}
          <div className="w-[480px] lg:w-full">
            <h2 className="font-bold text-3xl text-very-dark-cyan mb-3 lg:text-xl">
              {h2}
            </h2>
            <p className="text-grayish-blue text-[18px] lg:text-[13px]">{p}</p>
          </div>
        </div>
      ) : (
        <div className="pl-[120px] pr-7 flex items-center w-full h-full justify-between lg:py-14 lg:px-10 lg:flex-col-reverse lg:gap-10">
          <div className="w-[480px] lg:w-full">
            <h2 className="font-bold text-3xl text-very-dark-cyan mb-3 lg:text-xl">
              {h2}
            </h2>
            <p className="text-grayish-blue text-[18px] lg:text-[13px]">{p}</p>
          </div>
          <img src={`./${img}`} alt={img} className="w-1/3 lg:w-full" />{" "}
        </div>
      )}
    </div>
  );
};

export default Element;
