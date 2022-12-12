import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const CustomDrawer = (props: Props) => {
  const nav = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          width: "100%",
          height: 85,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Image
          source={require("../../assets/perfil.png")}
          style={{ width: 65, height: 65 }}
        />

        <Text
          style={{
            color: "#000",
            fontSize: 17,
            marginTop: 5,
            marginBottom: 35,
          }}
        >
          Bem-vindo!
        </Text>
      </View>
      <DrawerItemList
        state={nav.getParent()}
        navigation={nav.getParent()}
        descriptors={nav.getParent()}
        {...props}
      />

      <DrawerItem
        {...props}
        label="Sair do App"
        inactiveBackgroundColor="#c62c36"
        onPress={() => {}}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
