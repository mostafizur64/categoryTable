import React, { useState } from "react";
import { heading } from "../../utils/data";
const Heading = ({ selectedItems, setSelectedItems }) => {
  const [showItem, setShowItem] = useState(false);

  const handleCheckboxChange = (index) => {
    const updatedSelectedItems = [...selectedItems];
    console.log(updatedSelectedItems, "handleCheckboxChange");
    updatedSelectedItems[index] = !updatedSelectedItems[index];
    setSelectedItems(updatedSelectedItems);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-medium">Table Title</h3>
        </div>
        <div className="relative">
          <span
            onClick={() => setShowItem(!showItem)}
            className="text-5xl rounded-full cursor-pointer hover:text-green-400 border"
          >
            =
          </span>
          <div
            className={`absolute z-50 top-14 bg-white right-0 w-56 ${
              showItem
                ? "border shadow-lg mt-8 p-4 rounded-2xl  duration-200"
                : ""
            }`}
          >
            {showItem && <span>Add and Remove Columns</span>}
            {showItem &&
              heading.map((head, index) => (
                <div key={index}>
                  <div className="flex items-center gap-6 mt-4">
                    <input
                      name="markItem"
                      type="checkbox"
                      id="myCheckbox"
                      className="h-4 w-4 text-blue-500"
                      checked={selectedItems[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <span className="text-xl">{head}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
