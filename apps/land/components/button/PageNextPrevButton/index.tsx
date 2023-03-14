import React from "react";
import Button from "./Button";

const PageNextPrevButton = ({ content }: any) => {
  const dataNext = content?.content.find(
    (item: any) => item.blockType === "next-link"
  );
  const dataPrev = content?.content.find(
    (item: any) => item.blockType === "previous-link"
  );
  console.log(dataNext);
  const renderButtons = () => {
    if (dataNext && !dataPrev) {
      return (
        <div className="flex justify-end">
          <div className="flex-none">
            <Button
              imgName={dataNext.image.url}
              pageName={dataNext.nextPageTitle}
              url={dataNext.nextLink}
              isLeft={false}
            />
          </div>
        </div>
      );
    } else if (!dataNext && dataPrev) {
      return (
        <div className="flex justify-start">
          <div className="flex-none">
            <Button
              imgName={dataPrev.image.url}
              pageName={dataPrev.previousPageTitle}
              url={dataPrev.previousLink}
            />
          </div>
        </div>
      );
    } else if (dataNext && dataPrev) {
      return (
        <>
          <div className="hidden lg:flex">
            <div className="flex-none">
              <Button
                imgName={dataPrev.image.url}
                pageName={dataPrev.previousPageTitle}
                url={dataPrev.previousLink}
              />
            </div>
            <div className="grow"></div>
            <div className="flex-none">
              <Button
                imgName={dataNext.image.url}
                pageName={dataNext.nextPageTitle}
                url={dataNext.nextLink}
                isLeft={false}
              />
            </div>
          </div>
          <div className="block lg:hidden">
            <div className="flex justify-start">
              <div className="flex-none">
                <Button
                  imgName={dataPrev.image.url}
                  pageName={dataPrev.previousPageTitle}
                  url={dataPrev.previousLink}
                />
              </div>
            </div>
            <div className="mt-12 flex justify-end">
              <div className="flex-none">
                <Button
                  imgName={dataNext.image.url}
                  pageName={dataNext.nextPageTitle}
                  url={dataNext.nextLink}
                  isLeft={false}
                />
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
  };
  return <>{renderButtons()}</>;
};

export default PageNextPrevButton;
