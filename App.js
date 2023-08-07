import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import Loader from "./src/screens/Loader";
import { slice1 } from "./assets/slices/slice1.png";
import HomeNavigation from "./src/navigation/HomeNavigation";

export default function App() {
  return (
    <>
      <HomeNavigation />
    </>
  );
}

