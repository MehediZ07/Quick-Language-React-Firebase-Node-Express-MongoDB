import { useEffect, useState } from "react";

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 1 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 4 : currentSlide - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2500);
    return () => clearInterval(intervalId);
  }, [currentSlide]);
  return (
    <div className="carousel w-full h-[30rem] text-black text-lg">
      {/* Slide 1 */}
      <div
        className={`carousel-item relative w-full ${
          currentSlide === 1 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://i.ibb.co.com/wBt8cCX/istock-000021332103small.jpg"
          className="w-full opacity-60 object-cover h-[30rem]"
          alt="Slide 1"
        />
        <div className="absolute w-full top-1/2 flex items-center  transform justify-center">
          <div className=" max-w-lg text-center -mt-20  flex flex-col items-center mx-auto">
            <h1 className="mb-5 text-5xl font-bold">Language Horizons</h1>
            <p className="mb-5 italic font-medium">
              Embark on a journey of cultural discovery and self-growth by
              learning languages that open up new perspectives and endless
              possibilities.
            </p>
          </div>
        </div>
        <div className="absolute  flex gap-2 left-1/2 -translate-x-1/2 transform justify-center bottom-5 ">
          <button
            onClick={prevSlide}
            className="px-4 w-10 h-10 rounded-full  bg-transparent hover:bg-black/20 hover:border border-black solid"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="px-4 w-10 h-10 rounded-full  bg-transparent hover:bg-black/20 hover:border border-black solid"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Slide 2 */}
      <div
        className={`carousel-item relative w-full ${
          currentSlide === 2 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://i.ibb.co.com/vqN8Yps/languages.jpg"
          className="w-full opacity-60 object-cover h-[30rem]"
          alt="Slide 2"
        />
        <div className="absolute w-full top-1/2 flex items-center  transform justify-center">
          <div className="max-w-lg -mt-24 text-center flex flex-col items-center mx-auto">
            <h1 className="mb-5 text-5xl font-bold">Fluent Futures</h1>
            <p className="mb-5 italic font-medium">
              Empower yourself with the ability to communicate effortlessly
              across borders, creating new pathways for personal, professional,
              and academic success.
            </p>
          </div>
        </div>
        <div className="absolute  flex gap-2 left-1/2 -translate-x-1/2 transform justify-center bottom-5 ">
          <button
            onClick={prevSlide}
            className="px-4 w-10 h-10 rounded-full  bg-transparent hover:bg-black/20 hover:border border-black solid"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="px-4 w-10 h-10 rounded-full  bg-transparent hover:bg-black/20 hover:border border-black solid"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Slide 3 */}
      <div
        className={`carousel-item relative w-full ${
          currentSlide === 3 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://i.ibb.co.com/4VQmGbS/language-think.webp"
          className="w-full opacity-60 object-cover h-[30rem]"
          alt="Slide 3"
        />
        <div className="absolute w-full top-1/2 flex items-center  transform justify-center">
          <div className="max-w-lg -mt-20 text-center flex flex-col items-center mx-auto">
            <h1 className="mb-5 text-5xl font-bold">Speak the World</h1>
            <p className="mb-5 italic font-medium">
              Unlock the doors to global communication with our immersive
              language courses, designed to help you connect with people,
              cultures, and opportunities worldwide.
            </p>
          </div>
        </div>
        <div className="absolute  flex gap-2 left-1/2 -translate-x-1/2 transform justify-center bottom-5 ">
          <button
            onClick={prevSlide}
            className="px-4 w-10 h-10 rounded-full  bg-transparent hover:bg-black/20 hover:border border-black solid"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="px-4 w-10 h-10 rounded-full  bg-transparent hover:bg-black/20 hover:border border-black solid"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Slide 4 */}
      <div
        className={`carousel-item relative w-full ${
          currentSlide === 4 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://i.ibb.co.com/BVkfhcD/Blog-how-to-set-your-language-in-COOL-01.png"
          className="w-full opacity-60 object-cover h-[30rem]"
          alt="Slide 4"
        />
        <div className="absolute w-full top-1/2 flex items-center  transform justify-center">
          <div className="max-w-lg -mt-24 text-center flex flex-col items-center mx-auto">
            <h1 className="mb-5 text-5xl font-bold "> Voices of the Globe</h1>
            <p className="mb-5 italic font-medium">
              Discover the beauty of diverse languages and gain the skills to
              converse confidently with people from every corner of the world.
            </p>
          </div>
        </div>
        <div className="absolute  flex gap-2 left-1/2 -translate-x-1/2 transform justify-center bottom-5 ">
          <button
            onClick={prevSlide}
            className="px-4 w-10 h-10 rounded-full  bg-transparent hover:bg-black/20 hover:border border-black solid"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="px-4 w-10 h-10 rounded-full  bg-transparent hover:bg-black/20 hover:border border-black solid"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
