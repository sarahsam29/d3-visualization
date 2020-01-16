//console.log(Math.max(cars.map(d=>d.mpg)))
//console.log(d3.min(cars.map(d=>d.mpg)))
//console.log(d3.max(cars.map(d=>d.mpg)))

let margin = {top: 30, right: 30, bottom: 30, left: 30}
let width = 600, height = 400;

d3.select('body')
  .select('svg')
  .attr('id', 'scatterPlot')
  .attr('width', width)
  .attr('height', height)
  //.style('background-color', '#FCF3CF')

//x scale
  let dispScale = d3.scaleLinear()
        .domain(d3.extent(cars.map(d=> d.disp)))
        .range([50,600])

//y scale
  let mpgScale = d3.scaleLinear()
        .domain(d3.extent(cars.map(d=> d.mpg)))
        .range([400,50])

//size scale
  let wtScale = d3.scaleSqrt()
      .domain(d3.extent(cars.map(d=> d.wt)))
      .range([3,30])

//colour scale
  let cylScale = d3.scaleQuantile()
    .domain(d3.extent(cars.map(d=>d.cyl)))
    .range(['#95b7ec', '#ffe787','#eabcbc', '#90c9c5'])

d3.selectAll('svg#scatterPlot')
  .selectAll('circle')
  .data(cars)
  .enter()
  .append('circle')
  .attr('cx',d => dispScale(d.disp))
  .attr('cy',d => mpgScale(d.mpg))
  .attr('r', d => wtScale(d.wt))
  .attr('fill',d => cylScale(d.cyl))
  .style('opacity', 0.8)

let xAxis = d3.axisBottom(dispScale)
let yAxis = d3.axisLeft(mpgScale)

d3.selectAll('svg#scatterPlot')
  .call(xAxis)
  .attr()
  //.call(yAxis)
