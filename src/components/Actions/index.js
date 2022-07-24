import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { actions } from "../../../data";

export default function Actions() {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {actions.map((data) => (
        <TouchableOpacity style={styles.actionButton} key={data.id}>
          <View style={styles.areaButton}>
            <Feather name={data.icon} size={26} color="#000" />
          </View>
          <Text style={styles.labelButton}>{data.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginVertical: 14,
    paddingHorizontal: 14,
  },
  actionButton: {
    alignItems: "center",
    marginRight: 32,
  },
  areaButton: {
    backgroundColor: "#ecf0f1",
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  labelButton: {
    marginTop: 6,
    textAlign: "center",
    fontWeight: "bold",
  },
});
