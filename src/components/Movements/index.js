import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MotiView, AnimatePresence, MotiText } from "moti";
export default function Movements({ data }) {
  const [showValue, setShowValue] = useState(false);

  function handleShowValue() {
    setShowValue(!showValue);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleShowValue}>
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        {showValue ? (
          <AnimatePresence exitBeforeEnter>
            <MotiText
              from={{ translateX: 100 }}
              animate={{ translateX: 0 }}
              transition={{ type: "spring", duration: 500 }}
              style={data.type === 1 ? styles.balance : styles.expenses}
            >
              {data.type === 1 ? `R$ ${data.value} ` : `R$ -${data.value} `}
            </MotiText>
          </AnimatePresence>
        ) : (
          <AnimatePresence from={{opacity: 0}} animate={{opacity: 1}} transition={{type: "timing"}}>
            <MotiView style={styles.skeleton} />
          </AnimatePresence>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dadada",
  },
  date: {
    color: "#dadada",
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  balance: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#2ecc71",
  },
  expenses: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#e74c3c",
  },
  skeleton: {
    marginTop: 6,
    width: 80,
    backgroundColor: "#dadada",
    borderRadius: 8,
  },
});
