import React, { useRef } from "react";
import Cards from "./Cards";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "This is the background color of the card that will be displayed.",
      filesize: ".9mb",
      closed: true,
      tag: { isopen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        desc: "This is the background color of the card that will be displayed.",
        filesize: ".9mb",
        closed: false,
        tag: { isopen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        desc: "This is the background color of the card that will be displayed.",
        filesize: ".9mb",
        closed: false,
        tag: { isopen: true, tagTitle: "Open", tagColor: "blue" },
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      
      {data.map((item, index)=>(
        <Cards data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
