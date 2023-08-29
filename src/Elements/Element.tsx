interface ElementProps {
  h2: string;
  p: string;
  isRight?: boolean;
  img: string;
}

const Element = ({ h2, p, isRight, img }: ElementProps) => {
  return (
    <div className="w-full h-[440px] bg-white shadow-lg rounded-xl">
      {isRight ? (
        <div className="pl-[120px] pr-7 flex items-center w-full h-full justify-between">
          <img src={`./${img}`} alt={img} className="w-1/3" />{" "}
          <div className="w-[480px]">
            <h2 className="font-bold text-3xl text-very-dark-cyan mb-3">
              {h2}
            </h2>
            <p className="text-grayish-blue text-[18px]">{p}</p>
          </div>
        </div>
      ) : (
        <div className="pl-[120px] pr-7 flex items-center w-full h-full justify-between">
          <div className="w-[480px]">
            <h2 className="font-bold text-3xl text-very-dark-cyan mb-3">
              {h2}
            </h2>
            <p className="text-grayish-blue text-[18px]">{p}</p>
          </div>
          <img src={`./${img}`} alt={img} className="w-1/3" />{" "}
        </div>
      )}
    </div>
  );
};

export default Element;
