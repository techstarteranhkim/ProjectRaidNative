// components/Header.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./HeaderStyles";

const Header = ({ date, setDate }) => {
  const startDate = date;
  const startDayOfWeek = startDate.toLocaleString("default", {
    weekday: "long",
  });
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startDay = startDate.getDate();
  const startYear = startDate.getFullYear();
  const weekRange = `${startDayOfWeek}, ${startMonth} ${startDay}, ${startYear}`;

  //handles arrow left
  const handlePrevDate = () => {
    setDate(new Date(date.setDate(date.getDate() - 1)));
  };

  //handles arrow right
  const handleNextDate = () => {
    setDate(new Date(date.setDate(date.getDate() + 1)));
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.arrowButton} onPress={handlePrevDate}>
        <Text style={styles.arrowText}>‹</Text>
      </TouchableOpacity>
      <Text style={styles.dateText}>{weekRange}</Text>
      <TouchableOpacity style={styles.arrowButton} onPress={handleNextDate}>
        <Text style={styles.arrowText}>›</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
