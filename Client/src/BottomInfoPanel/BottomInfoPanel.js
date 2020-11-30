import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FiMinimize2 } from "react-icons/fi";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./BottomInfoPanel.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Category from "./CarouselItems/Category/Category";
import AgeGroup from "./CarouselItems/AgeGroup/AgeGroup";
import Race from "./CarouselItems/Race/Race";
import Gender from "./CarouselItems/Gender/Gender";
import Borough from "./CarouselItems/Borough/Borough";
import TopOffenses from "./CarouselItems/TopOffenses/TopOffenses";
import AgeGroupTimeline from "./CarouselItems/AgeGroup/AgeGroupTimeline";
import BoroughTimeline from "./CarouselItems/Borough/BoroughTimeline";
import CategoryTimeline from "./CarouselItems/Category/CategoryTimeline";
import GenderTimeline from "./CarouselItems/Gender/GenderTimeline";
import RaceTimeline from "./CarouselItems/Race/RaceTimeline";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import { useSelector } from "react-redux";
import Tippy from "@tippyjs/react";
import Skeleton from "react-loading-skeleton";

const BottomInfoPanel = (props) => {
  const {
    tooltipVisible,
    filteredAgeGroup,
    filteredRaceArr,
    filteredSexArr,
    filteredBoroughArr,
    filteredOffenseDescriptionArr,
    filteredArrestCategory,
    filteredUniqueCategory,

    filteredAgeGroupData,
    filteredRaceUniqueValues,
    filteredSexUniqueValues,
    filteredBoroughUniqueValues,
    filteredOffenseDescriptionUniqueValues,

    currentFilters,
    isSame,
    usePrevious,
    graphOption,
    changeGraphOption,
    layersRef,
    isMobileOrTablet,
    isMediumLaptop,
    footerMenuActive,
    changeFooterMenuActive,
    isTinyPhone,
    resetFilters,

    filteredTimelineAgeGroupData,
    filteredTimelineBoroughData,
    filteredTimelineCategoryData,
    filteredTimelineSexData,
    filteredTimelineRaceData,
  } = props;

  const applyingFilters = useSelector(
    (state) => state.applyingFiltersReducer.filters
  );
  const trendsAvailable = useSelector(
    (state) => state.trendsAvailableReducer.available
  );

  // Timeline Column Data
  const ageTimelineColumns = useSelector(
    (state) => state.ageTimelineColumnsReducer.columns
  );
  const boroughTimelineColumns = useSelector(
    (state) => state.boroughTimelineColumnsReducer.columns
  );
  const categoryTimelineColumns = useSelector(
    (state) => state.categoryTimelineColumnsReducer.columns
  );
  const raceTimelineColumns = useSelector(
    (state) => state.raceTimelineColumnsReducer.columns
  );
  const sexTimelineColumns = useSelector(
    (state) => state.sexTimelineColumnsReducer.columns
  );

  const [firstTimeFooterActive, changeFirstTimeFooterActive] = useState(false);
  const [arrowTooltipVisible, changeArrowTooltipVisible] = useState(
    isMobileOrTablet ? false : true
  );
  const [timelineTooltipVisible, changeTimelineTooltipVisible] = useState(true);

  let CarouselRef = useRef(null);
  let CarouselTimelineRef = useRef(null);

  const rightArrow = document.getElementsByClassName("carousel_right_arrow");
  const aliceCarouselContainer = document.getElementsByClassName(
    "alice-carousel"
  );
  const overviewCarouselContainer = document.getElementsByClassName(
    "overview_carousel"
  );
  let trendsCarouselContainer = document.getElementsByClassName(
    "trends_carousel"
  );
  const categoryTimelineContainer = document.getElementsByClassName(
    "category_timeline_container"
  );
  const googleTooltipContainer = document.getElementsByClassName(
    "google-visualization-tooltip"
  );

  // Hide tooltip when trend dataset is untoggled
  useEffect(() => {
    if (graphOption === "trends" && !applyingFilters) {
      const checkForTooltip = setInterval(() => {
        const tooltip = googleTooltipContainer[0];
        const circles = document.getElementsByTagName("circle");

        if (tooltip) {
          const activePanelContainer = document.getElementsByClassName(
            "alice-carousel__stage-item __active"
          );
          const activePaths = activePanelContainer[1].getElementsByTagName(
            "path"
          );
          const activeText = activePanelContainer[1].getElementsByTagName(
            "text"
          );

          const valuesLength = (activePaths.length - 2) / 2;

          for (let i = 0; i < valuesLength; i++) {
            if (activePaths.item(i).getAttribute("stroke") === "none") {
              if (
                activeText.item(i).textContent.slice(0, 4) ===
                tooltip.lastChild.firstChild.textContent
                  .split(":")[0]
                  .slice(0, 4)
              ) {
                tooltip.style.display = "none";

                for (let j = 0; j < circles.length; j++) {
                  circles[j].style.display = "none";
                }
              }
            }
          }
        } else {
          for (let j = 0; j < circles.length; j++) {
            circles[j].style.display = "block";
          }
        }
      }, 10);

      return () => {
        clearInterval(checkForTooltip);
      };
    }
  }, [googleTooltipContainer, graphOption, applyingFilters]);

  useEffect(() => {
    if (graphOption === "overview") {
      if (CarouselTimelineRef.current) {
        CarouselTimelineRef.current.style.display = "none";
      } else {
        const findTimelineRefInterval = setInterval(() => {
          if (CarouselTimelineRef) {
            if (CarouselRef.current) {
              CarouselTimelineRef.current.style.display = "none";
              clearInterval(findTimelineRefInterval);
            }
          }
        }, 500);
      }
    } else {
      if (CarouselRef.current) {
        CarouselRef.current.style.display = "none";
      }
    }
  }, [graphOption]);

  useEffect(() => {
    const graphOptionsContainer = document.getElementsByClassName(
      "graph_options_container"
    )[0];

    const trendsRadioButton = graphOptionsContainer.lastChild.lastChild;

    if (!trendsAvailable) {
      trendsRadioButton.style.opacity = 0.7;
    } else {
      trendsRadioButton.style.opacity = 1;
    }
  }, [trendsAvailable]);

  useEffect(() => {
    if (!applyingFilters) {
      const findOverviewCarouselInterval = setInterval(() => {
        if (!overviewCarouselContainer[0]) {
          for (let i = 0; i < aliceCarouselContainer.length; i++) {
            if (i === 0) {
              if (
                !aliceCarouselContainer[i].className.includes(
                  "overview_carousel"
                )
              ) {
                aliceCarouselContainer[i].className += " overview_carousel";
              }
            } else {
              if (
                !aliceCarouselContainer[i].className.includes("trends_carousel")
              ) {
                aliceCarouselContainer[i].className += " trends_carousel";
                aliceCarouselContainer[i].style.opacity = 0;
                aliceCarouselContainer[i].style.zIndex = -1;
              }
            }
          }
        }
      }, 500);

      return () => {
        clearInterval(findOverviewCarouselInterval);
      };
    }
  }, [overviewCarouselContainer, aliceCarouselContainer, applyingFilters]);

  useEffect(() => {
    if (graphOption === "overview" && !applyingFilters) {
      if (overviewCarouselContainer) {
        if (overviewCarouselContainer[0]) {
          overviewCarouselContainer[0].style.opacity = 1;
          overviewCarouselContainer[0].style.zIndex = 1;
        }
      }

      if (trendsCarouselContainer) {
        if (trendsCarouselContainer[0]) {
          trendsCarouselContainer[0].style.opacity = 0;
          trendsCarouselContainer[0].style.zIndex = -1;
        } else {
          const findTrendsCarousel = setInterval(() => {
            let newTrendsCarouselContainer = document.getElementsByClassName(
              "trends_carousel"
            );

            if (newTrendsCarouselContainer[0]) {
              newTrendsCarouselContainer[0].style.opacity = 0;
              newTrendsCarouselContainer[0].style.zIndex = -1;
              clearInterval(findTrendsCarousel);
            }
          }, 500);
        }
      }
    } else {
      if (overviewCarouselContainer) {
        if (overviewCarouselContainer[0]) {
          overviewCarouselContainer[0].style.opacity = 0;
          overviewCarouselContainer[0].style.opacity = -1;
        }
      }

      if (trendsCarouselContainer) {
        if (trendsCarouselContainer[0]) {
          trendsCarouselContainer[0].style.opacity = 1;
          trendsCarouselContainer[0].style.zIndex = 1;
        }
      }
    }
  }, [
    graphOption,
    overviewCarouselContainer,
    trendsCarouselContainer,
    applyingFilters,
  ]);

  const handleFooterMenuActive = () => {
    if (footerMenuActive) {
      changeFooterMenuActive(false);
      changeGraphOption("overview");
    } else {
      changeFooterMenuActive(true);

      if (!firstTimeFooterActive) {
        setTimeout(() => {
          changeArrowTooltipVisible(true);
        }, 1800);

        changeFirstTimeFooterActive(true);
      }
    }
  };

  const handleDismissTooltips = () => {
    if (graphOption === "trends") {
      if (timelineTooltipVisible) {
        changeTimelineTooltipVisible(false);
      }

      if (arrowTooltipVisible) {
        changeArrowTooltipVisible(false);
      }
    }
  };

  return (
    <div
      className="bottom_info_panel_container"
      style={{
        zIndex: isMobileOrTablet
          ? tooltipVisible
            ? -1
            : 10
          : tooltipVisible
          ? -1
          : 0,
        transform: isMobileOrTablet
          ? footerMenuActive
            ? "translate3d(0, 0, 0)"
            : "translate3d(0, 100%, 0)"
          : "none",
      }}
    >
      <div
        className="shadow_overlay"
        onClick={() => {
          changeFooterMenuActive(false);
          changeGraphOption("overview");
        }}
        style={{
          opacity: footerMenuActive ? 1 : 0,
          display: footerMenuActive ? "block" : "none",
        }}
      >
        {" "}
      </div>
      <div
        className="desktop_bottom_footer_placeholder"
        onClick={() => {
          changeFooterMenuActive(true);
        }}
        style={{
          display: isMobileOrTablet
            ? "none"
            : footerMenuActive
            ? "none"
            : "flex",
        }}
      >
        <GoGraph /> Click to view graphs and trends
      </div>
      <div className="footer_menu_trigger" onClick={handleFooterMenuActive}>
        {!footerMenuActive ? (
          <>
            <GoGraph /> VIEW GRAPHS AND TRENDS
          </>
        ) : (
          <>
            <FiMinimize2 /> BACK TO ARREST MAP
          </>
        )}
      </div>
      <div
        className="bottom_info_main_info_box"
        style={{
          zIndex: footerMenuActive ? 99999999 : 99999,
          filter: footerMenuActive ? "none" : "blur(3px)",
          WebkitFilter: footerMenuActive ? "none" : "blur(3px)",
        }}
      >
        <div className="filters_applied">
          <h2>Filters Applied</h2>
          {currentFilters.category.length === 0 &&
          currentFilters.offense.length === 0 &&
          currentFilters.age.length === 0 &&
          currentFilters.race.length === 0 &&
          currentFilters.sex.length === 0 &&
          currentFilters.borough.length === 0 ? (
            <p className="no_filters_applied_statement">
              No filters currently applied
            </p>
          ) : (
            <>
              <p>
                <strong>
                  {currentFilters.category.length === 0
                    ? null
                    : "Categor" +
                      (currentFilters.category.length > 1 ? "ies: " : "y: ")}
                </strong>
                {currentFilters.category.length === 0
                  ? null
                  : currentFilters.category
                      .map((x) =>
                        x === "F"
                          ? "Felony"
                          : x === "M"
                          ? "Misdemeanor"
                          : "Violation"
                      )
                      .join(", ")}
              </p>
              <p>
                <strong>
                  {currentFilters.offense.length === 0
                    ? null
                    : "Offense" +
                      (currentFilters.offense.length === 1 ? ": " : "s: ")}
                </strong>
                {currentFilters.offense.length === 0
                  ? null
                  : currentFilters.offense.join(", ")}
              </p>
              <p>
                <strong>
                  {currentFilters.age.length === 0
                    ? null
                    : "Age" + (currentFilters.age.length === 1 ? ": " : "s: ")}
                </strong>
                {currentFilters.age.length === 0
                  ? null
                  : currentFilters.age
                      .map((x) => (x === "65" ? "65+" : x))
                      .join(", ")}
              </p>
              <p>
                <strong>
                  {currentFilters.race.length === 0
                    ? null
                    : "Race" +
                      (currentFilters.race.length === 1 ? ": " : "s: ")}
                </strong>
                {currentFilters.race.length === 0
                  ? null
                  : currentFilters.race.join(", ")}
              </p>
              <p>
                <strong>
                  {currentFilters.sex.length === 0 ? null : "Sex: "}
                </strong>
                {currentFilters.sex.length === 0
                  ? null
                  : currentFilters.sex
                      .map((x) => (x === "M" ? "Male" : "Female"))
                      .join(", ")}
              </p>
              <p>
                <strong>
                  {currentFilters.borough.length === 0
                    ? null
                    : "Borough" +
                      (currentFilters.borough.length === 1 ? ": " : "s: ")}
                </strong>
                {currentFilters.borough.length === 0
                  ? null
                  : currentFilters.borough
                      .map((item) =>
                        item === "B"
                          ? "Bronx"
                          : item === "Q"
                          ? "Queens"
                          : item === "M"
                          ? "Manhattan"
                          : item === "K"
                          ? "Brooklyn"
                          : item === "S"
                          ? "Staten Island"
                          : "Unknown"
                      )
                      .join(", ")}
              </p>
            </>
          )}
        </div>
        <div className="graph_options_container">
          <p>Graph Options</p>
          <RadioGroup
            onChange={(value) => changeGraphOption(value)}
            horizontal
            value={graphOption}
          >
            <RadioButton
              rootColor="rgb(140, 140, 140)"
              pointColor="rgb(0, 0, 128)"
              value="overview"
            >
              Overview
            </RadioButton>
            <RadioButton
              rootColor="rgb(140, 140, 140)"
              pointColor="rgb(0, 0, 128)"
              value="trends"
              disabled={!trendsAvailable}
              disabledColor="rgb(211, 211, 211)"
            >
              Trends
            </RadioButton>
          </RadioGroup>
        </div>
      </div>
      <div
        className="carousel_container"
        onTouchStart={handleDismissTooltips}
        style={{
          display: footerMenuActive ? "block" : "flex",
          paddingLeft: isMobileOrTablet ? "0" : footerMenuActive ? "0" : "15%",
        }}
      >
        <Tippy
          content="Click the left and right arrows to view more graphs"
          visible={
            footerMenuActive &&
            arrowTooltipVisible &&
            layersRef.current.length > 0 &&
            (ageTimelineColumns ? ageTimelineColumns.length > 0 : false) &&
            (boroughTimelineColumns
              ? boroughTimelineColumns.length > 0
              : false) &&
            (categoryTimelineColumns
              ? categoryTimelineColumns.length > 0
              : false) &&
            (raceTimelineColumns ? raceTimelineColumns.length > 0 : false) &&
            (sexTimelineColumns ? sexTimelineColumns.length > 0 : false)
          }
          reference={rightArrow[0]}
          className="burger_tooltip"
          placement="left"
          onClickOutside={() => changeArrowTooltipVisible(false)}
        />
        {footerMenuActive ? (
          <FaChevronLeft
            color="rgb(0, 0, 0)"
            className="carousel_left_arrow"
            onClick={() => {
              CarouselRef.slidePrev();
              CarouselTimelineRef.slidePrev();

              if (arrowTooltipVisible) {
                changeArrowTooltipVisible(false);
              }
            }}
          />
        ) : null}
        {!footerMenuActive || applyingFilters || resetFilters ? null : (
          <AliceCarousel
            ref={(el) => (CarouselRef = el)}
            autoPlay={false}
            fadeOutAnimation={true}
            disableDotsControls={true}
            disableButtonsControls={true}
            mouseTrackingEnabled={true}
            playButtonEnabled={false}
            disableAutoPlayOnAction={false}
            responsive={{
              0: { items: 1 },
              760: { items: 2 },
              1224: { items: 3 },
              1800: { items: 4 },
            }}
            preservePosition={true}
            infinite={true}
            items={[
              <Category
                key="overview"
                filteredArrestCategory={filteredArrestCategory}
                graphOption={graphOption}
              />,
              <AgeGroup
                key="overview"
                filteredAgeGroup={filteredAgeGroup}
                filteredAgeGroupData={filteredAgeGroupData}
                graphOption={graphOption}
              />,
              <Race
                key="overview"
                filteredRaceUniqueValues={filteredRaceUniqueValues}
                filteredRaceArr={filteredRaceArr}
                graphOption={graphOption}
              />,
              <Gender
                key="overview"
                filteredSexUniqueValues={filteredSexUniqueValues}
                filteredSexArr={filteredSexArr}
                graphOption={graphOption}
              />,
              <Borough
                key="overview"
                filteredBoroughUniqueValues={filteredBoroughUniqueValues}
                filteredBoroughArr={filteredBoroughArr}
                graphOption={graphOption}
              />,
              <TopOffenses
                key="overview"
                filteredOffenseDescriptionArr={filteredOffenseDescriptionArr}
                filteredOffenseDescriptionUniqueValues={
                  filteredOffenseDescriptionUniqueValues
                }
                graphOption={graphOption}
                isSame={isSame}
                usePrevious={usePrevious}
                isMobileOrTablet={isMobileOrTablet}
                isMediumLaptop={isMediumLaptop}
              />,
            ]}
          />
        )}
        <Skeleton
          circle={true}
          height={150}
          width={150}
          style={{
            display: isMobileOrTablet
              ? "none"
              : footerMenuActive
              ? "none"
              : "flex",
          }}
        />
        <Skeleton
          circle={true}
          height={150}
          width={150}
          style={{
            display: isMobileOrTablet
              ? "none"
              : footerMenuActive
              ? "none"
              : "flex",
          }}
        />
        <Skeleton
          circle={true}
          height={150}
          width={150}
          style={{
            display: isMobileOrTablet
              ? "none"
              : footerMenuActive
              ? "none"
              : "flex",
          }}
        />
        <Tippy
          content={
            isMobileOrTablet
              ? null
              : "Scroll to zoom in and out of trend graphs"
          }
          visible={
            isMobileOrTablet
              ? false
              : graphOption === "trends" && timelineTooltipVisible
          }
          reference={
            categoryTimelineContainer.length > 2
              ? categoryTimelineContainer[1]
              : categoryTimelineContainer[0]
          }
          className="burger_tooltip trend_tooltip"
          placement="top"
          onClickOutside={() => changeTimelineTooltipVisible(false)}
        />
        <Tippy
          content="Toggle data lines by selecting legend items"
          visible={graphOption === "trends" && timelineTooltipVisible}
          reference={
            categoryTimelineContainer.length > 2
              ? categoryTimelineContainer[1]
              : categoryTimelineContainer[0]
          }
          className="burger_tooltip trend_tooltip"
          placement={isMobileOrTablet ? "left" : "right"}
          offset={isMobileOrTablet ? [-30, -180] : [0, 50]}
          onClickOutside={() => changeTimelineTooltipVisible(false)}
        />
        {applyingFilters || resetFilters || !footerMenuActive ? null : (
          <AliceCarousel
            ref={(el) => (CarouselTimelineRef = el)}
            autoPlay={false}
            disableDotsControls={true}
            disableButtonsControls={true}
            mouseTrackingEnabled={false}
            playButtonEnabled={false}
            disableAutoPlayOnAction={false}
            touchMoveDefaultEvents={false}
            infinite={true}
            responsive={{
              0: { items: 1 },
              760: { items: 2 },
              1224: { items: 3 },
              2000: { items: 4 },
            }}
            preservePosition={true}
            items={[
              <CategoryTimeline
                key="trends"
                filteredTimelineCategoryData={filteredTimelineCategoryData}
                filteredArrestCategory={filteredArrestCategory}
                filteredUniqueCategory={filteredUniqueCategory}
                isMobileOrTablet={isMobileOrTablet}
                isMediumLaptop={isMediumLaptop}
                isTinyPhone={isTinyPhone}
              />,
              <AgeGroupTimeline
                key="trends"
                filteredAgeGroupData={filteredAgeGroupData}
                filteredTimelineAgeGroupData={filteredTimelineAgeGroupData}
                isMobileOrTablet={isMobileOrTablet}
                isMediumLaptop={isMediumLaptop}
                isTinyPhone={isTinyPhone}
              />,
              <BoroughTimeline
                key="trends"
                filteredBoroughUniqueValues={filteredBoroughUniqueValues}
                filteredTimelineBoroughData={filteredTimelineBoroughData}
                isMobileOrTablet={isMobileOrTablet}
                isMediumLaptop={isMediumLaptop}
                isTinyPhone={isTinyPhone}
              />,
              <RaceTimeline
                key="trends"
                filteredRaceUniqueValues={filteredRaceUniqueValues}
                filteredTimelineRaceData={filteredTimelineRaceData}
                isMobileOrTablet={isMobileOrTablet}
                isMediumLaptop={isMediumLaptop}
                isTinyPhone={isTinyPhone}
              />,
              <GenderTimeline
                key="trends"
                filteredSexUniqueValues={filteredSexUniqueValues}
                filteredTimelineSexData={filteredTimelineSexData}
                isMobileOrTablet={isMobileOrTablet}
                isMediumLaptop={isMediumLaptop}
                isTinyPhone={isTinyPhone}
              />,
            ]}
          />
        )}
        {footerMenuActive ? (
          <FaChevronRight
            color="rgb(0, 0, 0)"
            className="carousel_right_arrow"
            onClick={() => {
              CarouselRef.slideNext();
              CarouselTimelineRef.slideNext();

              if (arrowTooltipVisible) {
                changeArrowTooltipVisible(false);
              }
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default BottomInfoPanel;