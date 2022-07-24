import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { list } from "../../../data";
import Actions from "../../components/Actions";
import Balance from "../../components/Balance";
import Header from "../../components/Header";
import Movements from "../../components/Movements";


export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Otto Souza" />
      <Balance saldo="2000,00" gastos="-527,00" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginHorizontal: 14,
  },
});
