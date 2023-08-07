import { StyleSheet, Text, View } from "react-native";
import CircularBackground from "../components/CircularBackground";

const Home = () => {
  return (
    <View style={styles.container}>
      <CircularBackground/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});
