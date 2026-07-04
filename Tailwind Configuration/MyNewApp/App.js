import "./global.css";
import { Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-green-200">
      <View className="flex-1 items-center justify-center px-4">
        {/* Green Card */}
        <View className="w-full max-w-sm bg-green-500 rounded-2xl p-8 shadow-lg">
          <Text className="text-4xl font-bold text-white text-center mb-2">
            👋 Hello World!
          </Text>
          <Text className="text-lg text-green-100 text-center">
            Welcome to React Native + Tailwind
          </Text>
          <View className="mt-6 h-1 bg-green-300 rounded-full" />
          <Text className="mt-4 text-center text-white/80 text-sm">
            Built with NativeWind 🎨
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
