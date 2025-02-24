import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Child1 = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (data.length === 0) return;

    const parsedData = data.map(d => ({
      total_bill: +d.total_bill,
      tip: +d.tip
    }));

    const width = 550;
    const height = 340;
    const margin = { top: 25, right: 10, bottom: 35, left: 40 };
    const svg = d3.select(svgRef.current);

    const chart = svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear().domain([0, d3.max(parsedData, d => d.total_bill)]).range([0, width - margin.left - margin.right]);
    const y = d3.scaleLinear().domain([0, d3.max(parsedData, d => d.tip)]).range([height - margin.top - margin.bottom, 0]);
    chart.append('g').attr('transform', `translate(0,${height - margin.top - margin.bottom})`).call(d3.axisBottom(x));
    chart.append('g').call(d3.axisLeft(y));

    chart.selectAll('circle')
      .data(parsedData)
      .enter()
      .append('circle')
      .attr('cx', d => x(d.total_bill))
      .attr('cy', d => y(d.tip))
      .attr('r', 5)
      .style('fill', '#69b3a2');

    chart.append('text')
      .attr('x', (width - margin.left - margin.right) / 2)
      .attr('y', -10)
      .style('text-anchor', 'middle')
      .text('Total Bill vs Tips');

    chart.append('text')
      .attr('x', (width - margin.left - margin.right) / 2)
      .attr('y', height - margin.top)
      .style('text-anchor', 'middle')
      .text('Total Bill');

    chart.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -((height - margin.top - margin.bottom) / 2))
      .attr('y', -margin.left + 15)
      .style('text-anchor', 'middle')
      .text('Tips');

  }, [data]);

  return (
    <div className="child-container">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Child1;
