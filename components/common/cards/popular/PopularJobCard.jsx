import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handlePress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handlePress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          style={styles.logoImage}
          source={{ uri: item.storeImage && item.storeImage.storeLogo }}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.storeName}
      </Text>
      <Text style={styles.city} numberOfLines={1}>
        {item.location &&
          item.location.address &&
          item.location.address &&
          item.location.address.city}
      </Text>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
