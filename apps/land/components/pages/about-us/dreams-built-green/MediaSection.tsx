import React from "react";

const MediaSection = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "dreams-built-green-media-section"
  );
  const urlYt = data?.backgroundVideoLink;
  const formattedUrlYt = urlYt?.includes("https://www.youtube.com/watch?v=")
    ? urlYt.replace("https://www.youtube.com/watch?v=", "")
    : "";
  return (
    <div className="h-[950px]">
      <iframe
        className="pointer-events-none bottom-0 right-0 block h-full w-full object-cover"
        src={`https://www.youtube.com/embed/${formattedUrlYt}?autoplay=1&mute=1&cc_load_policy=1&controls=0&loop=1&showinfo=0&modestbranding=1`}
        allow="autoplay; modestbranding"
      ></iframe>
    </div>
  );
};

export default MediaSection;
