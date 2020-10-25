import dayjs from "dayjs";

onmessage = (e) => {
  const dataSent = e.data;

  const argumentsLength = Object.keys(dataSent).length;

  // Changing Data Filters
  if (argumentsLength === 8) {
    const year = dataSent.year;
    const category = dataSent.category;
    const offense = dataSent.offense;
    const age = dataSent.age;
    const race = dataSent.race;
    const sex = dataSent.sex;
    const borough = dataSent.borough;
    const suppliedData = dataSent.suppliedData;

    const assignFilteredData = [suppliedData].map((chunk) => {
      return chunk.filter((x) => {
        if (
          (year.includes(
            Number(dayjs(x.ARREST_DATE, "MM/DD/YYYY").format("YYYY"))
          ) ||
            year.length === 0) &&
          (category.includes(x.LAW_CAT_CD) || category.length === 0) &&
          (offense.includes(x.OFNS_DESC) || offense.length === 0) &&
          (age.includes(x.AGE_GROUP) || age.length === 0) &&
          (race.includes(x.PERP_RACE) || race.length === 0) &&
          (sex.includes(x.PERP_SEX) || sex.length === 0) &&
          (race.includes(x.PERP_RACE) || race.length === 0) &&
          (borough.includes(
            x.ARREST_BORO === "K" && Number(x.Latitude) > 40.77
              ? "B"
              : x.ARREST_BORO === "M" &&
                Number(x.Longitude) > -73.920961 &&
                Number(x.Latitude) < 40.800709
              ? "Q"
              : x.ARREST_BORO === "B" && Number(x.Latitude) < 40.697465
              ? "K"
              : (x.ARREST_BORO === "B" &&
                  Number(x.Latitude) > 40.796669 &&
                  Number(x.Longitude) < -73.932786) ||
                (x.ARREST_BORO === "B" &&
                  Number(x.Latitude) < 40.796669 &&
                  Number(x.Longitude) < -73.98)
              ? "M"
              : x.ARREST_BORO === "Q" && Number(x.Longitude) < -73.962745
              ? "M"
              : x.ARREST_BORO === "Q" &&
                Number(x.Longitude) < -73.878559 &&
                Number(x.Latitude) > 40.787907
              ? "B"
              : x.ARREST_BORO
          ) ||
            borough.length === 0)
        ) {
          return true;
        } else {
          return false;
        }
      });
    });

    const assignFilteredDataFlat = assignFilteredData.flat();

    postMessage({
      assignFilteredData: assignFilteredData,
      assignFilteredDataFlat: assignFilteredDataFlat,
    });
  } else {
    // Timeline graph calculations
    const name = dataSent.arrName;
    const arr = dataSent.arr;
    const generalName = dataSent.generalName;
    const unique = dataSent.unique;
    const dataArr = dataSent.dataArr;

    const filteredArray =
      arr.length > 0 && unique.length > 0
        ? arr
            .sort((a, b) => {
              if (dayjs(a, "MM/DD/YYYY").isBefore(dayjs(b, "MM/DD/YYYY"))) {
                return -1;
              } else {
                return 1;
              }
            })
            .map((date) => {
              const dateArr = date ? date.split("/") : null;

              if (name === "raceTimelineGraphData") {
                return [
                  new Date(dateArr[2], dateArr[0] - 1, dateArr[1]),
                  unique
                    .map((race) =>
                      race
                        .split(" ")
                        .map(
                          (x) => x[0].toUpperCase() + x.slice(1).toLowerCase()
                        )
                        .join(" ")
                        .split("/")
                        .map(
                          (x) =>
                            x[0].toUpperCase() +
                            x.slice(1, x.indexOf(" ")).toLowerCase() +
                            x.slice(x.indexOf(" "))
                        )
                        .join("/")
                    )
                    .map(
                      (item) =>
                        dataArr[0].filter(
                          (x) =>
                            x.date === date &&
                            x[generalName]
                              .split(" ")
                              .map(
                                (x) =>
                                  x[0].toUpperCase() + x.slice(1).toLowerCase()
                              )
                              .join(" ")
                              .split("/")
                              .map(
                                (x) =>
                                  x[0].toUpperCase() +
                                  x.slice(1, x.indexOf(" ")).toLowerCase() +
                                  x.slice(x.indexOf(" "))
                              )
                              .join("/") === item
                        ).length
                    ),
                ].flat();
              } else if (name === "categoryTimelineGraphData") {
                return [
                  new Date(dateArr[2], dateArr[0] - 1, dateArr[1]),
                  unique
                    ? [
                        ...new Set(
                          unique.map((x) =>
                            x === "F"
                              ? "Felony"
                              : x === "M"
                              ? "Misdemeanor"
                              : "Violation"
                          )
                        ),
                      ].map(
                        (item) =>
                          dataArr[0].filter(
                            (x) => x.date === date && x[generalName] === item
                          ).length
                      )
                    : [],
                ].flat();
              } else if (name === "genderTimelineGraphData") {
                return [
                  new Date(dateArr[2], dateArr[0] - 1, dateArr[1]),
                  unique
                    .map((x) => (x === "F" ? "Female" : "Male"))
                    .map(
                      (item) =>
                        dataArr[0].filter(
                          (x) => x.date === date && x[generalName] === item
                        ).length
                    ),
                ].flat();
              } else {
                return [
                  new Date(dateArr[2], dateArr[0] - 1, dateArr[1]),
                  unique.map(
                    (item) =>
                      dataArr[0].filter(
                        (x) => x.date === date && x[generalName] === item
                      ).length
                  ),
                ].flat();
              }
            })
        : [];

    postMessage({
      arrayName: name,
      returnedArr: arr && dataArr[0] ? filteredArray : [],
    });
  }
};
