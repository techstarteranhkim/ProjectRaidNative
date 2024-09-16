import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./SuggestRaidModalStyles";
import TimePicker from "./TimePicker";

const SuggestRaidModal = ({
  visible,
  onClose,
  availability,
  calculateSummary,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [startTimeHour, setStartTimeHour] = useState(0);
  const [startTimeMinute, setStartTimeMinute] = useState(0);
  const [endTimeHour, setEndTimeHour] = useState(0);
  const [endTimeMinute, setEndTimeMinute] = useState(0);

  const { startTime: suggestedStartTime, endTime: suggestedEndTime } =
    calculateSummary();

  const handleSuggestRaid = () => {
    // TO DO: implement logic to suggest a raid with the provided details
    console.log(
      "Suggest Raid:",
      title,
      description,
      date,
      `${startTimeHour.toString().padStart(2, "0")}:${startTimeMinute.toString().padStart(2, "0")}`,
      `${endTimeHour.toString().padStart(2, "0")}:${endTimeMinute.toString().padStart(2, "0")}`
    );
    onClose();
  };

  return (
    <Modal visible={visible} onRequestClose={onClose} transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Suggest Raid</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.descriptionInput]}
              placeholder="Description"
              value={description}
              onChangeText={(text) => setDescription(text)}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateLabel}>Date:</Text>
            <Text style={styles.dateValue}>{date.toLocaleDateString()}</Text>
          </View>
          <View style={styles.timeContainer}>
            <TimePicker calculateSummary={calculateSummary} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSuggestRaid}>
              <Text style={styles.buttonText}>Suggest Raid</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SuggestRaidModal;
