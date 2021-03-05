---
title: D3 Starter
tags: [dataviz]
link: https://www.newline.co/fullstack-d3
---

```js
// Assuming d3 has been imported in index.html file
async function drawLineChart() {
  // Load the dataset
  const dataset = await d3.json("./data.json");
  // Access the required properties.
  // Also you can pass parsers for anything not in the correct format.
  const yAccessor = (d) => d.property1;
  const xAccessor = (d) => d.property2;
  // For the chart wrapper
  // Margins are for axes and legends.
  let dimensions = {
    width: window.innerWidth * 0.9,
    height: 400,
    margin: {
      top: 15,
      right: 15,
      bottom: 40,
      left: 60,
    },
  };
  // For elements contained within the axes
  dimensions.boundedWidth =
    dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight =
    dimensions.height - dimensions.margin.top - dimensions.margin.bottom;
  // Append a SVG element to the wrapper with a height and width
  const wrapper = d3
    .select("#wrapper") 
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);
  // Append a g tag to the SVG
  const bounds = wrapper
    .append("g")
    .style(
      "transform",
      `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
    );
  // Scales numerical values on the Y-axis
  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, yAccessor))
    .range([dimensions.boundedHeight, 0]) // bottom-to-top
    .nice();
  // Scales numerical values on the Y-axis
  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, xAccessor))
    .range([0, dimensions.boundedWidth]) // right-to-left
    .nice();

  // TODO: This is the place where the actual chart will be created.

  // Create the axes
  const yAxisGenerator = d3.axisLeft().scale(yScale);
  const yAxis = bounds.append("g").call(yAxisGenerator);
  const xAxisGenerator = d3.axisBottom().scale(xScale);
  const xAxis = bounds
    .append("g")
    .call(xAxisGenerator)
    .style("transform", `translateY(${dimensions.boundedHeight}px)`);

  const xAxisLabel = xAxis
    .append("text")
    .attr("x", dimensions.boundedWidth / 2)
    .attr("y", dimensions.margin.bottom - 10)
    .attr("fill", "black")
    .style("font-size", "1.4em")
    .text("Label on X");
}

drawLineChart();
```
- The `wrapper` element in HTML will contain everything in our chart.
- `g` elements are used for grouping.
- `.axisLeft()` and `.axisRight()` methods are for positioning of tickers and orientations of axes (not its placement).
- A server needs to be started to load the `json` file. Install `live-server` through `npm` and use it.
- Apart from `.scaleLinear()` methods, there are others like `.scaleTime()` for dates etc.
- SVG elements default to black fill and **no stroke**.
- Labels inherit a fill value of none. That's why they need to be set explicitly.
- **SVG values for Y axis are counted from top to bottom.**
- `.nice()` method on scales rounds up the values to be axis friendly.