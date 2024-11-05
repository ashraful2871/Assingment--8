import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="bg-[#F6F6F6] pb-20">
      <h2 className="text-2xl font-bold ml-44 pt-20">Statistics</h2>
      <div className="container mx-auto bg-white mt-12 rounded-3xl p-5">
        <BarChart
          width={1500}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product_title" />
          <YAxis dataKey="price" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey=" product_title"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="price"
            fill="#9538E2"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
