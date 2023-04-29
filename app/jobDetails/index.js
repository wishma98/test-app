import { Line } from "@ant-design/plots";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Jobdetails = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   asyncFetch();
  // }, []);

  // const asyncFetch = () => {
  //   fetch(
  //     "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log("fetch data failed", error);
  //     });
  // };
  // const config = {
  //   data,
  //   padding: "auto",
  //   xField: "Date",
  //   yField: "scales",
  //   xAxis: {
  //     // type: 'timeCat',
  //     tickCount: 5,
  //   },
  //   smooth: true,
  // };

  return (
    <View>
      <Text>Jobdetailsa</Text>
      {/* <Line {...config} /> */}
    </View>
  );
};

export default Jobdetails;
