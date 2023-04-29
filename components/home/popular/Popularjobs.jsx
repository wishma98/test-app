import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";
import { kbsGetAllStorebyCompanyId } from "../../../service/store.service";

const Popularjobs = () => {
  const router = useRouter();

  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const { data, isLoading, error } = useFetch({
  //   search_terms: "python programmer",
  //   location: "Chicago, IL",
  //   page: "1",
  // });

  // const { data, isLoading, error } = useFetch({
  //   currency: "AED",
  //   locale: "en-gb",
  // });

  const { data, isLoading, error } = useFetch("64267c3d9173ff193ffa7745");

  // const { data, isLoading, error } = useFetch("search", {
  //   query: "Python developer in Texas, USA",
  //   page: "1",
  //   num_pages: "1",
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     let resData = await kbsGetAllStorebyCompanyId("64267c3d9173ff193ffa7745");
  //     console.log("FetchData:::>>", resData);
  //     if (resData && resData.data && resData.data.status) {
  //       setData(res && res.data && res.data.data);
  //       setIsLoading(false);
  //     } else {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
