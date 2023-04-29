import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      {/* <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          style={styles.logoImage}
          source={{ uri: item.storeImage && item.storeImage.storeLogo }}
          resizeMode="cover"
        />
      </TouchableOpacity> */}
      <Text style={styles.jobName} numberOfLines={1}>
        {job.areaName}
      </Text>
      <Text style={styles.city} numberOfLines={1}>
        {job.formatted_address}
      </Text>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
