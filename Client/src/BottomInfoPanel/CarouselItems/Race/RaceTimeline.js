import React from "react";
import { Chart } from "react-google-charts";
import DoubleBounce from "better-react-spinkit/dist/DoubleBounce";
import { useSelector } from "react-redux";

const RaceTimeline = (props) => {
  const { initialScreenWidth, currentScreenWidth } = props;

  const raceTimelineColumns = useSelector(
    (state) => state.raceTimelineColumnsReducer.columns
  );

  return (
    <div
      className="bottom_info_panel_info_box"
      onDragStart={(e) => e.preventDefault()}
    >
      <p className="bottom_info_section_title">Race Trends</p>
      <div className="bottom_info_pie_container">
        <Chart
          legendToggle
          chartType="LineChart"
          loader={<DoubleBounce size={100} color="rgb(93, 188, 210)" />}
          data={raceTimelineColumns}
          options={{
            legendToggle: true,
            backgroundColor: "transparent",
            width: !currentScreenWidth
              ? initialScreenWidth < 768
                ? 300
                : 500
              : currentScreenWidth < 768
              ? 300
              : 500,
            chartArea: { width: "50%", height: "50%" },
            hAxis: {
              title: "Dates",
            },
            vAxis: {
              title: "# of Arrests",
            },
            explorer: {
              axis: "horizontal",
              keepInBounds: true,
              maxZoomIn: 0.2,
            },
          }}
        />
      </div>
    </div>
  );
};

export default RaceTimeline;
