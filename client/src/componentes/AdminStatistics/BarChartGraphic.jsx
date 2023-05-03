import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getAllProductsAdmin } from "../../redux/actions";

const BarChartGraphic = () => {
  const dispatch = useDispatch();
  const dataProducts = useSelector((state) => state.adminProducts);
  const dataUsers = useSelector((state) => state.users);
  const dataCategories = useSelector((state) => state.categories);
  console.log("", dataProducts);
  console.log("dataUsers", dataUsers);
  console.log("dataCategories", dataCategories);

  useEffect(() => {
    dispatch(getAllProductsAdmin());
  }, []);
  return (
    <>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          data={dataProducts}
          width={500}
          height={300}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="4, 1, 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="stock" fill="#6b48ff" />
          {/* <Bar dataKey="age" fill="#1ee3cf" /> */}
        </BarChart>
      </ResponsiveContainer>
      <SimplePieCharts />
    </>
  );
};

export default BarChartGraphic;
