import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiOutlineArrowTrendingDown } from "react-icons/hi2";
import lightMap from "../assets/images/lightMap.png";
import darkMap from "../assets/images/darkMap.png";
import { LineChart, Line } from "recharts";
import { Link } from "react-router-dom";
import { useAuth } from "./Context";
import { motion } from "framer-motion";
import {
  revenueData,
  tableData,
  PieChartdata,
  revenueDataCountry,
  boxes,
  tableHeaders,
} from "../constant";
export default function Dashboard() {
  const data = [
    { name: "Jan", Actual: 18, Projection: 22 },
    { name: "Feb", Actual: 20, Projection: 25 },
    { name: "Mar", Actual: 22, Projection: 23 },
    { name: "Apr", Actual: 24, Projection: 27 },
    { name: "May", Actual: 15, Projection: 20 },
    { name: "Jun", Actual: 19, Projection: 23 },
  ];

  const COLORS = ["#1c1c1c", "#b9edbd", "#b1e3fe", "#95a4fd"];
  const { isDarkMode } = useAuth();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`p-4 ${
          isDarkMode
            ? "bg-zinc-900 text-white fade-in"
            : "bg-white text-zinc-900 fade-out"
        }`}
      >
        <div className="font-bold w-full py-6 px-1">eCommerce</div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={`flex w-full ${
            isDarkMode
              ? "bg-zinc-900 text-white fade-in"
              : "bg-white text-zinc-900 fade-out"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-x-4">
            <div className="flex flex-wrap gap-x-4 gap-y-4 h-full w-full md:w-1/2">
              {boxes.map((data, index) => {
                const isDark = isDarkMode
                  ? "bg-zinc-800 text-white fade-in"
                  : "bg-white text-zinc-900 fade-out";

                let alternateColor;
                if (index === 1 || index === 2) {
                  alternateColor = isDarkMode
                    ? "bg-zinc-800 text-white fade-in"
                    : "bg-zinc-100 text-black fade-out";
                } else {
                  alternateColor = isDarkMode
                    ? "bg-blue-100 text-black fade-in"
                    : "bg-blue-100 text-black fade-out";
                }

                return (
                  <Link
                    to={data.link}
                    key={index}
                    className={`${alternateColor} pt-8 px-6 h-[48%] rounded-3xl w-full md:w-[47%]`}
                  >
                    <div className="text-md font-bold">{data.name}</div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-2xl font-bold">{data.number}</span>
                      <span
                        className={`text-sm flex items-center ${
                          data.hike.startsWith("-")
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {data.hike}{" "}
                        {data.hike.startsWith("+") ? (
                          <FaArrowTrendUp className="ml-1" />
                        ) : (
                          <HiOutlineArrowTrendingDown className="ml-1" />
                        )}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div
              className={`w-full md:w-1/2 flex items-center rounded-3xl justify-center ${
                isDarkMode
                  ? "bg-zinc-800 text-white fade-in"
                  : "bg-zinc-100 text-zinc-900 fade-out"
              }`}
            >
              <div className="py-6 px-2 rounded-md w-full">
                <h3 className="ml-4 text-start font-bold">
                  Projections vs Actuals
                </h3>
                <div className="mt-4" style={{ height: 300 }}>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Actual" stackId="a" fill="#a8c5da" />
                      <Bar
                        dataKey="Projection"
                        stackId="a"
                        fill="#cedfe9"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="flex gap-6 h-[380px] w-full mt-6"
        >
          <div
            className={`w-[70%] rounded-3xl pt-8 pb-12 px-8 ${
              isDarkMode
                ? "bg-zinc-800 text-white fade-in"
                : "bg-zinc-100 text-zinc-900 fade-out"
            }`}
            style={{ height: "380px" }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <h3
                className={`font-bold ${
                  isDarkMode ? "text-white fade-in" : "text-black fade-out"
                }`}
              >
                Revenue
              </h3>
              <span className="h-6 border-l border-zinc-300"></span>

              {revenueData.map((data, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isDarkMode ? "bg-white fade-in" : "bg-black fade-out"
                    }`}
                  ></span>
                  <span
                    className={`${
                      isDarkMode
                        ? "text-zinc-200 fade-in"
                        : "text-zinc-700 fade-out"
                    }`}
                  >
                    {data.title}
                  </span>
                  <span
                    className={`font-bold ${
                      isDarkMode ? "text-white fade-in" : "text-black fade-out"
                    }`}
                  >
                    {data.value}
                  </span>
                </div>
              ))}
            </div>

            <ResponsiveContainer
              width="100%"
              height="100%"
              className={`${
                isDarkMode ? "text-white fade-in" : "text-black fade-out"
              }`}
            >
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Projection"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="Actual" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div
            className={`w-[30%] h-full rounded-3xl py-6 px-4 ${
              isDarkMode
                ? "bg-zinc-800 text-white fade-in"
                : "bg-zinc-100 text-zinc-900 fade-out"
            }`}
          >
            <h6 className="text-md font-semibold text-center">
              Revenue by Location
            </h6>

            <div className="relative w-full h-1/2 rounded-3xl overflow-hidden">
              {isDarkMode ? (
                <img
                  src={darkMap}
                  alt="Dark Mode Map"
                  className="w-full h-full object-cover rounded-3xl"
                />
              ) : (
                <img
                  src={lightMap}
                  alt="Light Mode Map"
                  className="w-full h-full object-cover rounded-3xl"
                />
              )}
            </div>

            <div
              className={` ${
                isDarkMode ? " text-white" : " text-black"
              } rounded-lg`}
            >
              {revenueDataCountry.map((data, index) => (
                <div key={index} className="mb-1">
                  <div className="flex justify-between">
                    <span>{data.location}</span>
                    <span>{data.revenue}K</span>
                  </div>
                  <div
                    className={`w-full h-2 ${
                      isDarkMode ? "bg-zinc-700" : "bg-gray-200"
                    } rounded-full mx-auto`}
                  >
                    <div
                      className={`h-2 ${
                        isDarkMode ? "bg-blue-500" : "bg-blue-500"
                      } rounded-full`}
                      style={{
                        width: `${(data.revenue / data.maxRevenue) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row gap-6 h-[380px] w-full mt-6"
        >
          <div
            className={`w-full md:w-[70%] rounded-3xl overflow-y-scroll py-6 px-4 ${
              isDarkMode
                ? "bg-zinc-800 text-white fade-in"
                : "bg-zinc-100 text-black fade-out"
            }`}
          >
            <div className="font-bold mb-1 ml-3">Top Selling Products</div>
            <table className="min-w-full table-auto text-left border-collapse">
              <thead>
                <tr className="text-sm border-b-2 border-[#a9aaac]">
                  {tableHeaders.map((header, index) => (
                    <th key={index} className="px-4 py-2">
                      {header.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    {tableHeaders.map((header, index) => (
                      <td key={index} className="px-4 py-2">
                        {item[header.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className={`w-[30%] h-full rounded-3xl py-6 px-4 ${
              isDarkMode
                ? "bg-zinc-800 text-white fade-in"
                : "bg-zinc-100 text-black fade-out"
            }`}
          >
            <div className="font-bold">Total Sales</div>
            <ResponsiveContainer width="100%" height={190}>
              <PieChart>
                <Pie
                  data={PieChartdata}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={3}
                  dataKey="value"
                >
                  {PieChartdata.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div>
              {PieChartdata.map((data, index) => {
                return (
                  <div
                    className="flex py-1 justify-between text-center"
                    key={index}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        style={{
                          backgroundColor: COLORS[index],
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          display: "inline-block",
                        }}
                      ></span>
                      <span>{data.name}</span>
                    </div>
                    <span>${data.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
