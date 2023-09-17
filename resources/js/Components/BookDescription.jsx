import { useEffect, useRef, useState } from "react";

export default function Description({ description }) {
  const descriptionRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [isViewMore, setIsViewMore] = useState(false);

  useEffect(() => {
    setHeight(descriptionRef.current.clientHeight);
  }, []);

  const descriptionArr = description.split("\\n");

  return (
    <>
      <div
        ref={descriptionRef}
        className={`mt-8 relative ${
          height > 250
            ? !isViewMore
              ? "max-h-[250px] overflow-hidden"
              : ""
            : ""
        }`}
      >
        <p className="font-medium">Description:</p>
        {descriptionArr.map((desc, index) => (
          <p key={index} className="pt-4">
            {desc}
          </p>
        ))}
        <div
          className={`w-full absolute bottom-0 h-10 bg-gradient-to-t from-white dark:from-gray-800 to-white/0 dark:to-gray-800/0 ${
            height > 250 ? (isViewMore ? "hidden" : "") : "hidden"
          }`}
        ></div>
      </div>

      <div
        className={`${height > 250 ? "inline-flex" : "hidden"} justify-center`}
      >
        <div
          onClick={() => setIsViewMore(!isViewMore)}
          className="text-center text-cyan-700 dark:text-cyan-600 hover:opacity-80 hover:cursor-pointer hover:underline font-medium"
        >
          {!isViewMore ? "View More" : "View Less"}
        </div>
      </div>
    </>
  );
}
