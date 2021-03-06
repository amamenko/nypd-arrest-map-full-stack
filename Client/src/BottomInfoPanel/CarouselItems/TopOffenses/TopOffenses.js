import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import DoubleBounce from "better-react-spinkit/dist/DoubleBounce";
import { useSelector } from "react-redux";

const TopOffenses = (props) => {
  const {
    filteredOffenseDescriptionArr,
    filteredOffenseDescriptionUniqueValues,
    graphOption,
    isSame,
    usePrevious,
    isMobileOrTablet,
    isMediumLaptop,
  } = props;

  const [sortedArr, changeSortedArr] = useState([]);

  const prevFilteredOffenseDescriptionArr = usePrevious(
    filteredOffenseDescriptionArr
  );
  const prevFilteredOffenseDescriptionUniqueValues = usePrevious(
    filteredOffenseDescriptionUniqueValues
  );
  const applyingFilters = useSelector(
    (state) => state.applyingFiltersReducer.filters
  );

  useEffect(() => {
    if (
      filteredOffenseDescriptionArr &&
      filteredOffenseDescriptionArr.length > 0 &&
      filteredOffenseDescriptionUniqueValues.length > 0
    ) {
      if (
        filteredOffenseDescriptionArr !== prevFilteredOffenseDescriptionArr ||
        filteredOffenseDescriptionUniqueValues !==
          prevFilteredOffenseDescriptionUniqueValues
      ) {
        const offenseData = filteredOffenseDescriptionUniqueValues
          .map((item) => [
            item,
            filteredOffenseDescriptionArr.filter((x) => x === item).length,
          ])
          .sort((a, b) => {
            if (a[1] > b[1]) {
              return 1;
            } else {
              return -1;
            }
          });

        if (!isSame(offenseData, sortedArr)) {
          changeSortedArr(offenseData);
        }
      }
    }
  }, [
    isSame,
    filteredOffenseDescriptionArr,
    filteredOffenseDescriptionUniqueValues,
    sortedArr,
    prevFilteredOffenseDescriptionArr,
    prevFilteredOffenseDescriptionUniqueValues,
  ]);

  return (
    <div
      className="bottom_info_panel_info_box"
      onDragStart={(e) => e.preventDefault()}
      style={{ display: graphOption === "overview" ? "block" : "none" }}
    >
      {sortedArr.length > 0 ? (
        <>
          <p className="bottom_info_section_title">Top 5 Offenses</p>
          <div className="bottom_info_pie_container">
            {applyingFilters ? (
              <DoubleBounce size={100} color="rgb(93, 188, 210)" />
            ) : (
              <Chart
                chartType="BarChart"
                loader={<DoubleBounce size={100} color="rgb(93, 188, 210)" />}
                data={
                  [
                    [["Offense Description", "Number of Arrests"]].concat(
                      sortedArr.length > 0
                        ? sortedArr
                            .slice(sortedArr.length - 5, sortedArr.length)
                            .sort((a, b) => {
                              if (a[1] > b[1]) {
                                return -1;
                              } else {
                                return 1;
                              }
                            })
                        : ["UNKNOWN", 1]
                    ),
                  ][0]
                }
                options={{
                  backgroundColor: "transparent",
                  legend: { position: "none" },
                  width: isMobileOrTablet ? 300 : isMediumLaptop ? 400 : 600,
                  bar: isMobileOrTablet ? null : { groupWidth: "95%" },
                  chartArea: isMobileOrTablet
                    ? null
                    : { width: "50%", height: "50%" },
                }}
              />
            )}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default TopOffenses;
