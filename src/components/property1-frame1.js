import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1Frame1 = ({
  className = "",
  minutes,
  property1Frame612183Width,
  property1Frame612183BorderRadius,
  property1Frame612183Border,
  property1Frame612183BackgroundColor,
}) => {
  const property1Frame612183Style = useMemo(() => {
    return {
      width: property1Frame612183Width,
      borderRadius: property1Frame612183BorderRadius,
      border: property1Frame612183Border,
      backgroundColor: property1Frame612183BackgroundColor,
    };
  }, [
    property1Frame612183Width,
    property1Frame612183BorderRadius,
    property1Frame612183Border,
    property1Frame612183BackgroundColor,
  ]);

  return (
    <div
      className={`w-[170px] bg-base-white h-12 flex flex-row items-center justify-start py-5 px-4 box-border text-left text-lg text-text-color font-subtitle-3-medium-18pt ${className}`}
      style={property1Frame612183Style}
    >
      <div className="relative font-medium">{minutes}</div>
    </div>
  );
};

Property1Frame1.propTypes = {
  className: PropTypes.string,
  minutes: PropTypes.string,

  /** Style props */
  property1Frame612183Width: PropTypes.any,
  property1Frame612183BorderRadius: PropTypes.any,
  property1Frame612183Border: PropTypes.any,
  property1Frame612183BackgroundColor: PropTypes.any,
};

export default Property1Frame1;
