import { MotiView } from "moti";
import { View, Text, StyleSheet } from "react-native";
import { list } from "../../../data";

export default function amountBalance({ saldo, gastos }) {
  const summary = list.reduce(
    (acc, transaction) => {
      if (transaction.type === 1) {
        acc.deposits += transaction.value;
        acc.total += transaction.value;
      } else {
        acc.withdraws += transaction.value;
        acc.total -= transaction.value;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  function currecyFormatBRL(value) {
    return Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  return (
    <MotiView
      style={styles.container}
      from={{ rotateX: "-100deg", opacity: 0 }}
      animate={{
        rotateX: "0deg",
        opacity: 1,
      }}
      transition={{
        type: "timing",
        delay: 300,
        duration: 900,
      }}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.balance}>{currecyFormatBRL(summary.deposits)}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.expenses}>
            {currecyFormatBRL(summary.withdraws)}
          </Text>
        </View>
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    marginTop: -24,
    marginHorizontal: 14,
    borderRadius: 8,
    zIndex: 99,
  },
  itemTitle: {
    fontSize: 20,
    color: "#dadada",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencySymbol: {
    color: "#dadada",
    marginRight: 6,
  },
  balance: {
    fontSize: 22,
    color: "#2ecc71",
    fontWeight: "600",
  },
  expenses: {
    fontSize: 22,
    color: "#e74c3c",
    fontWeight: "600",
  },
});
