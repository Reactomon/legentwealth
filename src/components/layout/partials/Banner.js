import React, { useState } from "react";

const Banner = ({ ...props }) => {
  const [bannerOpen, setBannerOpen] = useState(true);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <>
      {bannerOpen && (
        <div {...props} className="banner">
          <button onClick={scrollToTop}>
            <span className="screen-reader">Close</span>
            &uarr;
          </button>
        </div>
      )}
    </>
  );
};

export default Banner;
