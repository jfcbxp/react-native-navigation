import { StyleSheet, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/rootStackParamList";
import { StackActions } from "@react-navigation/native";

interface Props extends NativeStackScreenProps<RootStackParamList, "Sobre"> {}

const Sobre = ({ navigation, route }: Props) => {
  useLayoutEffect(() => {
    //sincrono
    navigation.setOptions({
      title: "TESTE Titulo",
      headerShown: true,
    });
  }, [navigation]);

  //navigation.dispatch(StackActions.pop());

  return (
    <SafeAreaView style={styles.container}>
      <Text>{route.params.nome}</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Sobre;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
