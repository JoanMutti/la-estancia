import React, { useState } from "react";
import { Popover } from "react-tiny-popover";
const Description = ({ description }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={["bottom", "left", "right"]}
      content={<div className=" p-description-product2">{description}</div>}
      onClickOutside={() => setIsPopoverOpen(false)}
      padding={10}
     >
      <span
        className=" p-description-product1"
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
      >
        Descripción &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <span className=" p-description-product1-arrow"> &gt;</span>
      </span>
    </Popover>
  );
};

export default Description;
