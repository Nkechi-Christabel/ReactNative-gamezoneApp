import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/Global";

const ReviewDetails = ({ route }) => {
  const { title, body, rating } = route.params;
  // console.log(route);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{title}</Text>
      <Text style={globalStyles.titleText}>{body}</Text>
      <Text style={globalStyles.titleText}>{rating}</Text>
    </View>
  );
};

export default ReviewDetails;
