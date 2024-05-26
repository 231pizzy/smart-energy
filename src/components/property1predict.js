import { useMemo } from "react";
import Property1Frame1 from "./property1-frame1";
import PropTypes from "prop-types";

const Property1predictOff = ({
  className = "",
  property1predictOffPosition,
  property1predictOffTop,
  property1predictOffRight,
  property1predictOffLeft,
}) => {
  const property1predictOffStyle = useMemo(() => {
    return {
      position: property1predictOffPosition,
      top: property1predictOffTop,
      right: property1predictOffRight,
      left: property1predictOffLeft,
    };
  }, [
    property1predictOffPosition,
    property1predictOffTop,
    property1predictOffRight,
    property1predictOffLeft,
  ]);

  return (
    <div
      className={`h-[54px] overflow-hidden flex flex-col items-start justify-start gap-[4px] text-left text-lg text-gray-100 font-lato ${className}`}
      style={property1predictOffStyle}
    >
      <div className="w-[190px] rounded-lg bg-whitesmoke box-border flex flex-row items-center justify-start p-4 gap-[8px] border-[1px] border-solid border-line">
      <div className="relative flex items-center justify-center">
                            <span>Type:</span>
                            <select defaultValue="custom" className="ml-2  text-text font-bold bg-whitesmoke border-none outline-none cursor-pointer text-lg">
                                <option value="this-week">Actual & Predicted</option>
                                <option value="last-week">Predicted</option>
                                <option value="custom">Actual</option>
                            </select>
                        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <Property1Frame1
          minutes="Actual"
          property1Frame612183Width="100px"
          property1Frame612183BorderRadius="8px 8px 0px 0px"
          property1Frame612183Border="1px solid rgba(20, 20, 22, 0.1)"
          property1Frame612183BackgroundColor="#fff"
        />
        <Property1Frame1
          minutes="Predicted"
          property1Frame612183Width="190px"
          property1Frame612183BorderRadius="unset"
          property1Frame612183Border="unset"
          property1Frame612183BackgroundColor="#f5f5f5"
        />
        <Property1Frame1
          minutes={`Actual & Predicted`}
          property1Frame612183Width="unset"
          property1Frame612183BorderRadius="0px 0px 8px 8px"
          property1Frame612183Border="1px solid rgba(20, 20, 22, 0.1)"
          property1Frame612183BackgroundColor="#fff"
        />
      </div>
    </div>
  );
};

Property1predictOff.propTypes = {
  className: PropTypes.string,

  /** Style props */
  property1predictOffPosition: PropTypes.any,
  property1predictOffTop: PropTypes.any,
  property1predictOffRight: PropTypes.any,
  property1predictOffLeft: PropTypes.any,
};

export default Property1predictOff;
