import "./global.css";

// ------------------------------------------------------------------------

// import { Text, View, SafeAreaView, Dimensions } from "react-native";

// function App() {
//   const { width, height } = Dimensions.get("screen");

//   return (
//     <SafeAreaView className="flex-1 bg-green-200">
//       <View className="flex-1 items-center justify-center px-4">
//         {/* Green Card */}
//         <View className="w-full max-w-sm bg-green-500 rounded-2xl p-8 shadow-lg">
//           <Text className="text-4xl font-bold text-white text-center mb-2">
//             👋 Hello World!
//           </Text>
//           <Text className="text-lg text-green-100 text-center">
//             Welcome to React Native + Tailwind
//           </Text>
//           <View className="mt-6 h-1 bg-green-300 rounded-full" />
//           <Text className="mt-4 text-center text-white/80 text-sm">
//             Built with NativeWind 🎨
//           </Text>
//         </View>
//       </View>
//       <Text className="text-yellow-800 text-center text-2xl">
//         Device Height :{height}
//       </Text>
//       <Text className="text-yellow-800 text-center text-2xl">
//         Device Width : {width}
//       </Text>
//       <View></View>
//     </SafeAreaView>
//   );
// }

// export default App;

// ------------------------------------------------------------------

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-4xl font-bold text-gray-800 mb-8">🏠 Home</Text>
        <TouchableOpacity
          className="bg-gray-200 px-8 py-4 rounded-2xl active:opacity-70"
          onPress={() =>
            navigation.navigate("Profile", { name: "Murtaza", age: 23 })
          }
        >
          <Text className="text-gray-800 font-semibold text-lg">
            Go to Profile →
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function Profile({ navigation, route }) {
  const { name, age } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-4xl font-bold text-gray-800 mb-4">
          👤 Profile
        </Text>

        <View className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-lg mb-8">
          <Text className="text-gray-800 text-lg font-semibold mb-2">
            Name: <Text className="font-normal">{name}</Text>
          </Text>
          <Text className="text-gray-800 text-lg font-semibold">
            Age: <Text className="font-normal">{age}</Text>
          </Text>
        </View>

        <TouchableOpacity
          className="bg-gray-200 px-8 py-4 rounded-2xl active:opacity-70"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-gray-800 font-semibold text-lg">← Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#374151", // gray-700
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          animation: "flip",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "My App" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "User Profile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
