import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Best investment advisory",
    paragraph: "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Measure the power of tight associations
                </div>
                <h3 className="mt-0 mb-12">View 30+ Mutual Fund Companies</h3>
                <p className="m-0">
                  <ButtonGroup>
                    <Button
                      tag="a"
                      color="primary"
                      wideMobile
                      href="https://cruip.com/"
                      className="ligth-bg"
                    >
                      View all mutual funds companies
                    </Button>
                  </ButtonGroup>
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/companies.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>
            <div
              className={classNames(
                "split-item-image center-content-mobile reveal-from-bottom",
                imageFill && "split-item-image-fill",
                "mfunds"
              )}
            >
              <Image
                src={require("./../../assets/images/invest1.png")}
                alt="Features split 01"
                width={300}
                height={300}
              />
              <Image
                src={require("./../../assets/images/invest3.png")}
                alt="Features split 01"
                width={300}
                height={300}
              />
              <Image
                src={require("./../../assets/images/invest4.png")}
                alt="Features split 01"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
