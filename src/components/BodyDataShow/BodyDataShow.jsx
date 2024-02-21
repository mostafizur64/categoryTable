import React from "react";
import { heading, bodyDataItem } from "../../utils/data";

const BodyDataShow = ({ selectedItems }) => {
  /* all  bodyDataItem  item filtered here */

  const filteredBodyDataItem = bodyDataItem.filter((row, rowIndex) => {
    return Object.keys(row).some((key, collIndex) => selectedItems[collIndex]);
  });

  return (
    <div className="overflow-auto ">
      {/* show the message when any item are not selected  */}
      <>
        {filteredBodyDataItem.length === 0 && (
          <div className="text-2xl text-red-500 font-semibold text-center mt-10">
            If you want to see a content please <br /> click the menu icon and
            select the category.
          </div>
        )}
      </>

      {/* Heading */}
      <div className="flex mt-32 ">
        {heading.map(
          (head, index) =>
            selectedItems[index] && (
              <span
                className="flex-1 p-2 py-6 border-b-[1px] border-white-500 text-[18px] font-medium w-full"
                key={index}
              >
                {head}
              </span>
            )
        )}
      </div>

      {/* Body */}
      <div className="">
        {/* all  filteredBodyDataItem item mapping here */}

        {filteredBodyDataItem.map((row, rowIndex) => (
          <div className="flex mb-2" key={rowIndex}>
            {Object.values(row).map(
              (value, colIndex) =>
                selectedItems[colIndex] && (
                  <div
                    className="flex-1 p-2 py-4 border-b-[1px] border-white-500 text-[16px] font-normal w-full"
                    key={colIndex}
                  >
                    {value}
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyDataShow;
