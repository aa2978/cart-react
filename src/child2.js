import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Child2 = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data.length) return;

    const width = 500;
    const height = 400;
    const margin = { top: 40, right: 30, bottom: 50, left: 60 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current).attr('width', width).attr('height', height);
    const parsedData = d3.rollup(data,v => d3.mean(v, d => parseFloat(d.tip)), d => d.day);
    const day = Array.from(parsedData.keys());
    const avgTips = Array.from(parsedData.values());

    const x = d3.scaleBand()
      .domain(day)
      .range([0, chartWidth])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(avgTips)])
      .nice()
      .range([chartHeight, 0]);

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    g.selectAll('.bar')
      .data(avgTips)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, i) => x(day[i]))
      .attr('y', d => y(d))
      .attr('width', x.bandwidth())
      .attr('height', d => chartHeight - y(d))
      .style('fill', '#69b3a2');

    g.append('g')
      .attr('transform', `translate(0,${chartHeight})`)
      .call(d3.axisBottom(x));

    g.append('g').call(d3.axisLeft(y));

    g.append('text')
      .attr('x', chartWidth / 2)
      .attr('y', chartHeight + margin.bottom - 10)
      .style('text-anchor', 'middle')
      .text('Day');

    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -chartHeight / 2)
      .attr('y', -margin.left + 20)
      .style('text-anchor', 'middle')
      .text('Average Tip');

    g.append('text')
      .attr('x', chartWidth / 2)
      .attr('y', -10)
      .style('text-anchor', 'middle')
      .text('Average Tip by Day');
  }, [data]);

  return (
    <div className="child-container">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Child2;
