
// change svg background
d3.selectAll('svg')
  .style('background-color', 'SkyBlue')

//create red border
let border = d3.select('svg')
border.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 600)
      .attr("height", 200)
      .attr("stroke", "red")
      .attr("stroke-width", 5)
      .attr("fill", "none")

//change h2 description and colour
d3.select('h2')
  .text('A really simple description')
  .style("color", "purple")

//change circle colour
d3.select('circle')
  .style("fill", "purple")

//remove text
d3.select('text').remove()

// console text
console.log("I can log things on the page!")

//create circle
let cir1 = d3.select('svg')
cir1.append("circle")
      .attr("cx", 100)
      .attr("cy", 100)
      .attr("r", 50)
      .attr("stroke", "pink")
      .attr("stroke-width", 5)
      .attr("fill", "none")

let cir2 = d3.select('svg')
cir2.append("circle")
      .attr("cx", 150)
      .attr("cy", 100)
      .attr("r", 50)
      .attr("stroke", "orange")
      .attr("stroke-width", 5)
      .attr("fill", "none")

d3.select('svg')
  .attr("fill-opacity", 0.3)

let manyCircles = d3.select('svg');
for (i = 1; i < 20; i+50) {
manyCircles.append('circle')
          .attr("cx", i+50)
          .attr("cy", 50)
          .attr("r", i*2)
          .attr("stroke", "orange")
          .attr("stroke-width", 5)
          .attr("fill", "none");
}
