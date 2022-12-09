import { StyleSheet, SafeAreaView, Button } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/rootStackParamList";

interface Props extends NativeStackScreenProps<RootStackParamList, "Home"> {}

const Home = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Ir para Sobre"
        onPress={() => {
          navigation.navigate("Sobre", { nome: "Teste2" });
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
