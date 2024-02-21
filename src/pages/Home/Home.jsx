import React, { useState } from "react";
import Heading from "../../components/Heading/Heading";
import BodyDataShow from "../../components/BodyDataShow/BodyDataShow";
import { heading } from "../../utils/data";

const Home = () => {
  const [selectedItems, setSelectedItems] = useState(
    Array(heading.length).fill(false)
  );
  console.log(selectedItems, "selectedItems");
  return (
    <div className="bg-white ">
      <Heading
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
      <BodyDataShow selectedItems={selectedItems} />
    </div>
  );
};

export default Home;
