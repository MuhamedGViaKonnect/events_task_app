import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Calendar } from "react-native-calendars";
import styles from "./styles";
import i18n from "@i18n/index";

const CardDetails = () => {
  const navigation = useNavigation<any>();
  const [selectedDate, setSelectedDate] = useState("");
  const route = useRoute();
  const { serviceData } = route.params as any; 
 const isEn= i18n.language==='en';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>{"< Back"}</Text>
      </TouchableOpacity>

      {/* Service Name */}
      <Text style={styles.title}>{isEn?serviceData?.serviceName?.en:serviceData?.serviceName?.ar}</Text>

      {/* Calendar View */}
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
          }}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: "#0E9F6E",
              selectedTextColor: "#fff",
            },
          }}
          theme={{
            todayTextColor: "#ff4444",
            arrowColor: "#0E9F6E",
            textDayFontSize: 16,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14,
          }}
        />
      </View>

      {/* Selected Date */}
      {selectedDate !== "" && (
        <View style={styles.selectedDateBox}>
          <Text style={styles.selectedInfo}>Selected: {selectedDate}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default CardDetails;
