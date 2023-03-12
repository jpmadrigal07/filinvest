import React from "react";
import Download from "@/components/svg/Download";
import Image from "next/image";
const Charters = ({ content }: any) => {
  const data = content?.content.find(
    (item: any) => item.blockType === "board-committees-charter"
  );
  return (
    <div className="flex-1">
      {data.charter.map((item: any) => (
        <div className="mt-4 flex flex-col gap-6">
          <h3 className="text-jet text-2xl font-bold">{item.year}</h3>
          {item.charterItem.map((charterItem: any, index: number) => (
            <div
              className="hover:bg-ghost-white hover:cursor-pointer"
              key={index}
            >
              <div className="flex items-center gap-6">
                <div className="flex flex-1 items-center gap-6">
                  <div className="bg-dark-cornflower-blue flex w-16 flex-none items-center justify-center rounded-full px-6 py-6 shadow-2xl">
                    <Image
                      src={`${charterItem.icon.url}`}
                      width={1834}
                      height={1414}
                      alt={charterItem.icon.alt}
                    />
                  </div>
                  <h4 className="flex-1 underline">{charterItem.title}</h4>
                </div>
                <Download />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Charters;
