import React, { useState } from "react";
import Heading from "../../components/Heading/Heading";
import BodyDataShow from "../../components/BodyDataShow/BodyDataShow";
import { heading } from "../../utils/data";

const Home = () => {

  const [selectedItems, setSelectedItems] = useState(
    Array(heading.length).fill(false)
  );

  
  return (
    <div className="bg-white ">
        {/* import here heading and bodyDataItem import  and pass the props  */}
      <Heading
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
      <BodyDataShow selectedItems={selectedItems} />
    </div>
  );
};

export default Home;
