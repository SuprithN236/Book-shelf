import React from "react";
import { FaStar } from "react-icons/fa";

function CustomerIndividual() {
  return (
    <div>
      <div className="text-2xl flex items-center space-x-2 mb-3 text-amber-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="mb-3 text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut saepe sunt
        recusandae alias id in numquam perspiciatis corrupti. Ut officia
        consequuntur explicabo aperiam, hic soluta deserunt repudiandae
        repellendus eveniet! Sit.
      </p>
      <div className="w-10 rounded-full mb-2">
        <img
          src="src/assets/profile.jpg"
          alt="profile pic"
          className="w-full rounded-full"
        />
      </div>
      <div>
        <h2 className="font-bold">Suprith N</h2>
        <p className="text-xs">CEO, ABC Company</p>
      </div>
    </div>
  );
}

export default CustomerIndividual;
