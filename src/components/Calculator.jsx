import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Calculator = () => {
  const [number, setNumber] = useState("");

  const handleClick = (e) => {
    console.log(e.target.value);
    setNumber(number.concat(e.target.value));
  };

  const handleClear = () => {
    setNumber("");
  };

  const handleSlice = () => {
    setNumber(number.slice(0, -1));
  };

  const handleAnswer = () => {
    try {
      setNumber(eval(number).toString());
    } catch (error) {
      setNumber("Invalid");
    }
  };

  return (
    <div>
      <section>
        <div className="bg-slate-800 w-96 h-full mx-auto my-24 rounded-lg overflow-hidden  pb-24">
          <div className="text-gray-200 w-full font-bold text-3xl h-16 flex justify-between mt-2">
            <div className="ml-5">
              <GiHamburgerMenu />
            </div>
            <p className="mr-5">CALCULATOR - RS</p>
          </div>

          {/* screen */}
          <div className="w-full h-20">
            <input
              type="text"
              placeholder="0"
              value={number}
              className="w-full h-full text-white bg-zinc-900 text-4xl text-right pr-5"
            />
          </div>

          {/* keypad */}
          <div className="grid grid-cols-4 gap-3 mt-10 mx-3">
            <button
              onClick={handleClear}
              className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow"
            >
              AC
            </button>
            <button
              onClick={handleSlice}
              className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow"
            >
              C
            </button>
            <button
              value="/"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow"
            >
              /
            </button>
            <button
              value="+"
              onClick={handleClick}
              className="text-white w-20 h-44 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow row-span-2"
            >
              +
            </button>
            <button
              value="9"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow"
            >
              9
            </button>
            <button
              value="8"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow"
            >
              8
            </button>
            <button
              value="7"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow"
            >
              7
            </button>
            <button
              value="6"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow"
            >
              6
            </button>
            <button
              value="5"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow"
            >
              5
            </button>
            <button
              value="4"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow"
            >
              4
            </button>
            <button
              value="-"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow"
            >
              -
            </button>
            <button
              value="3"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow"
            >
              3
            </button>
            <button
              value="2"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow"
            >
              2
            </button>
            <button
              value="1"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow"
            >
              1
            </button>
            <button
              value="*"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow"
            >
              *
            </button>
            <button
              value="."
              onClick={handleClick}
              className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow"
            >
              .
            </button>
            <button
              value="0"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-4xl flex justify-center items-center shadow"
            >
              0
            </button>
            <button
              onClick={handleAnswer}
              className="text-gray w-44 h-20 bg-white rounded-lg font-bold text-4xl flex justify-center items-center shadow col-span-2"
            >
              =
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
