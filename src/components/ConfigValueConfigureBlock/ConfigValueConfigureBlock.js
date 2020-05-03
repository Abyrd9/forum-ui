import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { faSyncAlt } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConfigValueConfigureBlockStyled } from "./ConfigValueConfigureBlock.styles";
import Tabs from "../../library/components/Tabs/Tabs";
import Counter from "../../library/components/Counter";
import { StoreContext } from "../../assets/StoreProvider";
import ConfigValueGrid from "../ConfigValueGrid/ConfigValueGrid";
import { getSizingVariations } from "../../helpers/buildTheme";

const ConfigValueConfigureBlock = ({
  actionType,
  baseSize,
  upperRatio,
  lowerRatio
}) => {
  const { dispatch } = useContext(StoreContext);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleChange = (value, key) => {
    dispatch({
      type: actionType,
      payload: { [key]: value }
    });
  };

  const handleResetValues = () => {
    let obj = {};
    if (actionType.includes("TYPOGRAPHY")) {
      obj = {
        baseSize: 16,
        upperRatio: 1,
        lowerRatio: 1
      };
    }
    if (actionType.includes("SPACING")) {
      obj = {
        baseSize: 16,
        upperRatio: 4,
        lowerRatio: 1
      };
    }
    dispatch({
      type: actionType,
      payload: obj
    });
  };

  let description = "";
  let CounterComponent = null;
  switch (activeTabIndex) {
    case 0:
      description =
        "The sizing system is similar to the well-known sizing of font-weights with values of 100-800. Your base size is the value of the 400 key, similar to normal font-weights.";
      CounterComponent = (
        <Counter
          key="base-size"
          readOnly
          roundToWholeNumber
          value={baseSize}
          multiplier={2}
          min={14}
          handleOnChange={({ target }) =>
            handleChange(target.value, "baseSize")
          }
        />
      );
      break;
    case 1:
      description =
        "The Lower ratios of your sizing are the values below the base (400) size. These are 100-300. increasing the ratio amount will decrease the spread of values below 400.";
      CounterComponent = (
        <Counter
          key="lower-ratio"
          readOnly
          roundToWholeNumber
          value={lowerRatio}
          multiplier={1}
          min={1}
          handleOnChange={({ target }) =>
            handleChange(target.value, "lowerRatio")
          }
        />
      );
      break;
    case 2:
      description =
        "The Upper ratios of your sizing are the values above the base (400) size. These are 500-800. increasing the ratio amount will increase the spread of values above 400.";
      CounterComponent = (
        <Counter
          key="upper-ratio"
          readOnly
          roundToWholeNumber
          value={upperRatio}
          multiplier={1}
          min={1}
          handleOnChange={({ target }) =>
            handleChange(target.value, "upperRatio")
          }
        />
      );
      break;
    default:
      break;
  }
  return (
    <ConfigValueConfigureBlockStyled>
      <div className="configure-block-edit-container">
        <Tabs
          handleTabClick={(_, { index }) => setActiveTabIndex(index)}
          tabsList={[
            { name: "Base", value: "Base" },
            { name: "Lower", value: "Lower" },
            { name: "Upper", value: "Upper" }
          ]}
        />
        {CounterComponent}
        <FontAwesomeIcon
          className="icon"
          icon={faSyncAlt}
          onClick={handleResetValues}
        />
      </div>
      <p className="configure-block-description">{description}</p>
      <ConfigValueGrid
        config={getSizingVariations(baseSize, {
          upper: upperRatio,
          lower: lowerRatio
        })}
        activeTabIndex={activeTabIndex}
      />
    </ConfigValueConfigureBlockStyled>
  );
};

ConfigValueConfigureBlock.defaultProps = {
  actionType: "",
  baseSize: 0,
  upperRatio: 0,
  lowerRatio: 0
};

ConfigValueConfigureBlock.propTypes = {
  actionType: PropTypes.string,
  baseSize: PropTypes.number,
  upperRatio: PropTypes.number,
  lowerRatio: PropTypes.number
};

export default ConfigValueConfigureBlock;
