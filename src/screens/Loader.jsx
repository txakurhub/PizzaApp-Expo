import { Image, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Loader = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigation = useNavigation();
  const pizzaImages = [
    require("../../assets/slices/slice1.png"),
    require("../../assets/slices/slice2.png"),
    require("../../assets/slices/slice3.png"),
    require("../../assets/slices/slice4.png"),
    require("../../assets/slices/slice5.png"),
    require("../../assets/slices/slice6.png"),
    require("../../assets/slices/slice7.png"),
    require("../../assets/slices/slice8.png"),
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pizzaImages.length);
    }, 300);

    if (currentImageIndex === pizzaImages.length - 1) {
      clearInterval(intervalId);
      navigation.navigate("Home");
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex]); // Agrega currentImageIndex como dependencia para que useEffect se ejecute cada vez que cambie.

  console.log(pizzaImages.length - 1 === currentImageIndex);

  return (
    <View style={styles.container}>
      <Image
        source={pizzaImages[currentImageIndex]}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
