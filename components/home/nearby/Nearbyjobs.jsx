import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";

import styles from "./nearbyjobs.style";
import useFetch from "../../../hook/useFetch";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const Nearbyjobs = () => {
  const router = useRouter();
  const navigation = useNavigation();

  const { data, isLoading, error } = useFetch("64267c3d9173ff193ffa7745");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          data.map((item) =>
            item.serviceabilityArea?.map((area) => (
              <NearbyJobCard
                job={area}
                key={`nearby-job-${area?.areaName}`}
                handleNavigate={() => {
                  router.push(`/jobDetails`);
                  // navigation.navigate("Jobdetails");
                }}
              />
            ))
          )
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
