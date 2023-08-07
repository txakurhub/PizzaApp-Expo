import { Image, View } from "react-native";
import { useEffect, useState } from "react";

const Loader = () => {
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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Inicia el cambio de imágenes cada 0.3 segundos
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pizzaImages.length);
    }, 300);

    if (currentImageIndex === pizzaImages.length - 1) {
      clearInterval(intervalId);
      // Aquí puedes realizar la acción adicional que desees después de que el loader haya terminado
      // Por ejemplo, redirigir a otra pantalla o realizar alguna otra tarea.
    }

    return () => {
      // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
      clearInterval(intervalId);
    };
  }, []);
  return (
    <View>
      <Image
        source={pizzaImages[currentImageIndex]}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default Loader;
