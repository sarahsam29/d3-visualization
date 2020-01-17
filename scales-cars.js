let margin = {top: 30, right: 30, bottom: 50, left: 50}
let width = 700,
    height = 500;
let innerWidth = width - margin.left - margin.right,
    innerHeight = height - margin.top - margin.bottom;

let background = d3.select('body')
                  .select('svg')
                  .attr('id', 'scatterPlot')
                  .attr('width', width)
                  .attr('height', height)
                  .append('g')
                  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  //.style('background-color', '#FCF3CF')

//x scale
  let dispScale = d3.scaleLinear()
        .domain(d3.extent(cars.map(d=> d.disp)))
        .range([20, innerWidth - 20])

//y scale
  let mpgScale = d3.scaleLinear()
        .domain(d3.extent(cars.map(d=> d.mpg)))
        .range([20, innerHeight - 20].reverse())
        //.range([300,20])

//size scale
  let wtScale = d3.scaleSqrt()
      .domain(d3.extent(cars.map(d=> d.wt)))
      .range([3,25])

//colour scale
  let cylScale = d3.scaleQuantile()
    .domain(d3.extent(cars.map(d=>d.cyl)))
    .range(['#95b7ec', '#ffe787','#eabcbc', '#90c9c5'])

let circles = background.selectAll('circle')
                .data(cars)
                .enter()
                .append('circle')
                .attr('cx',d => dispScale(d.disp))
                .attr('cy',d => mpgScale(d.mpg))
                .attr('r', d => wtScale(d.wt))
                .attr('fill',d => cylScale(d.cyl))
                .style('opacity', 0.8)
                //.transition()
                //.duration(2000)

// axes
let xAxis = d3.axisBottom()
              .scale(dispScale)
let yAxis = d3.axisLeft()
              .scale(mpgScale)

background.append('g')
          .attr("transform", "translate(-18, 410)")
          .call(xAxis);

background.append('g')
          .attr("transform", "translate(0,10)")
          .call(yAxis);
