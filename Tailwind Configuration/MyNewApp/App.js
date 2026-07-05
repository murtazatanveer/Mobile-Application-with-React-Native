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

// Stack Navigation
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";

// const Stack = createNativeStackNavigator();

// function Home({ navigation }) {
//   return (
//     <SafeAreaView className="flex-1 bg-gray-100">
//       <View className="flex-1 items-center justify-center px-6">
//         <Text className="text-4xl font-bold text-gray-800 mb-8">🏠 Home</Text>
//         <TouchableOpacity
//           className="bg-gray-200 px-8 py-4 rounded-2xl active:opacity-70"
//           onPress={() =>
//             navigation.navigate("Profile", { name: "Murtaza", age: 23 })
//           }
//         >
//           <Text className="text-gray-800 font-semibold text-lg">
//             Go to Profile →
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// function Profile({ navigation, route }) {
//   const { name, age } = route.params;

//   return (
//     <SafeAreaView className="flex-1 bg-gray-100">
//       <View className="flex-1 items-center justify-center px-6">
//         <Text className="text-4xl font-bold text-gray-800 mb-4">
//           👤 Profile
//         </Text>

//         <View className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-lg mb-8">
//           <Text className="text-gray-800 text-lg font-semibold mb-2">
//             Name: <Text className="font-normal">{name}</Text>
//           </Text>
//           <Text className="text-gray-800 text-lg font-semibold">
//             Age: <Text className="font-normal">{age}</Text>
//           </Text>
//         </View>

//         <TouchableOpacity
//           className="bg-gray-200 px-8 py-4 rounded-2xl active:opacity-70"
//           onPress={() => navigation.goBack()}
//         >
//           <Text className="text-gray-800 font-semibold text-lg">← Go Back</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: "#374151", // gray-700
//           },
//           headerTintColor: "#ffffff",
//           headerTitleStyle: {
//             fontWeight: "bold",
//             fontSize: 20,
//           },
//           animation: "flip",
//         }}
//       >
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ title: "My App" }}
//         />
//         <Stack.Screen
//           name="Profile"
//           component={Profile}
//           options={{ title: "User Profile" }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// --------------------------------------------------------------------

// Bottom Tab Navigation
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, SafeAreaView } from "react-native";

function Home() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 items-center justify-center px-6">
        <View className="bg-white rounded-3xl p-8 shadow-lg w-full max-w-sm border border-gray-200">
          <Text className="text-5xl mb-4 text-center">🏠</Text>
          <Text className="text-3xl font-bold text-gray-800 text-center">
            Home
          </Text>
          <Text className="text-gray-600 text-center mt-2">
            Welcome to your dashboard!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

function Search() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 items-center justify-center px-6">
        <View className="bg-white rounded-3xl p-8 shadow-lg w-full max-w-sm border border-gray-200">
          <Text className="text-5xl mb-4 text-center">🔍</Text>
          <Text className="text-3xl font-bold text-gray-800 text-center">
            Search
          </Text>
          <Text className="text-gray-600 text-center mt-2">
            Find what you're looking for
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 items-center justify-center px-6">
        <View className="bg-white rounded-3xl p-8 shadow-lg w-full max-w-sm border border-gray-200">
          <Text className="text-5xl mb-4 text-center">👤</Text>
          <Text className="text-3xl font-bold text-gray-800 text-center">
            Profile
          </Text>
          <Text className="text-gray-600 text-center mt-2">
            Manage your account
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // ✅ Floating Tab Bar - lifted from bottom
          tabBarStyle: {
            backgroundColor: "#1e293b",
            borderTopWidth: 0,
            height: 70,
            paddingBottom: 10,
            paddingTop: 5,
            position: "absolute",
            bottom: 20, // 👈 Lifts the tab bar up
            left: 20, // 👈 Adds side margins
            right: 20, // 👈 Adds side margins
            borderRadius: 20, // 👈 Rounded corners
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.3,
            shadowRadius: 20,
            elevation: 15,
          },
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#94a3b8",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            marginTop: 2,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let emoji;
            let emojiSize = focused ? 28 : 24;

            if (route.name === "Home") emoji = "🏠";
            else if (route.name === "Search") emoji = "🔍";
            else if (route.name === "Profile") emoji = "👤";

            return (
              <View
                className={`${
                  focused ? "bg-white/20 px-4 py-1 rounded-full" : ""
                }`}
              >
                <Text style={{ fontSize: emojiSize }}>{emoji}</Text>
              </View>
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ title: "Home", headerShown: false }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{ title: "Search", headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile", headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
