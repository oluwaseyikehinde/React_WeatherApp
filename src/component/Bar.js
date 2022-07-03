import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisTitle,
    ChartCategoryAxisItem,
  } from "@progress/kendo-react-charts";
  import { COLORS } from "./Color";  
  // Graph data
  const series = [
    {
      status: "Temp",
      data: [43, 30, 59],
      color: COLORS.total,
    },
    {
      status: "Wind",
      data: [25, 15, 30],
      color: COLORS.pending,
    },
    {
      status: "Humidity",
      data: [3, 5, 1],
      color: COLORS.interviewed,
    },
    {
      status: "Rain",
      data: [14, 10, 25],
      color: COLORS.rejected,
    },
    {
      status: "Precipitation",
      data: [1, 3, 2],
      color: COLORS.accepted,
    },
  ];
  
  const categories = ["Jan", "Feb", "Mar"];
  
  const seriesLabels = {
    visible: true,
    padding: 3,
    font: "normal 16px Arial, sans-serif",
    position: "center",
  };
  
  const Bar = props => {
    return (
      <Chart>
        <ChartTitle text="Weather status - last 3 months" />
        <ChartLegend visible={true} />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories}>
            <ChartCategoryAxisTitle text="Months" />
          </ChartCategoryAxisItem>
        </ChartCategoryAxis>
        <ChartSeries>
          {series.map((item, idx) => (
            <ChartSeriesItem
              key={idx}
              type="bar"
              gap={2}
              spacing={0.25}
              labels={seriesLabels}
              data={item.data}
              name={item.status}
              color={item.color}
            />
          ))}
        </ChartSeries>
      </Chart>
    );
  };
  
  export default Bar;
  