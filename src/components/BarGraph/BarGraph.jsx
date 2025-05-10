import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import styles from './BarGraph.module.css';

// const sampleData = [
//   { category: "Food", price: 120 },
//   { category: "Travel", price: 200 },
//   { category: "Shopping", price: 150 },
//   { category: "Entertainment", price: 100 },
// ];

const categories = ["Food", "Travel", "Entertainment"];

const RoundedBar = (props) => {
  const { x, y, width, height, fill } = props;
  const radius = 10; // Adjust the radius for the curve
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={radius}
        ry={radius}
      />
    </g>
  );
};

function CustomBarChart({ data}) {

     const chartData = categories.map((category) => {
    const totalPrice = data
      .filter((item) => item.category === category)
      .reduce((sum, item) => sum + Number(item.price), 0);
    return { category, price: totalPrice };
  });

  
  return (
    <div>
        <h2>Top Expenses</h2>
       
    <BarChart
      className={styles.barGraph}
      width={500}
      height={300}
      data={chartData}
      layout="vertical"
      margin={{
        top: 20,
        right: 30,
        left: 80,
        bottom: 5,
      }}
    >
      
      <YAxis type="category" dataKey='category' className={styles.Yaxis} axisLine={false}/>
      <Tooltip />
      
      <Bar dataKey="price" fill="#8784D2" barSize={22} shape={<RoundedBar/>}/>
    </BarChart>
  
    </div>
  );
}

export default CustomBarChart;
