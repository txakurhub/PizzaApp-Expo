const HomeNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Loader"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Loader" component={Loader} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
