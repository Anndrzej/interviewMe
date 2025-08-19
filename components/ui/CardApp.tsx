import React from "react";
import { Text, View } from "react-native";

interface CardAppProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export default function CardApp({ title, subtitle, icon }: CardAppProps) {
  return (
    <View className="bg-background-input rounded-xl p-4 justify-between flex-row">
      <View className="flex-row gap-4">
        <View className="bg-blue-dark justify-center items-center rounded-xl p-4">
          <Text>{icon}</Text>
        </View>
        <View>
          <Text className="text-white text-lg">{title}</Text>
          <Text className="text-primary-dark text-sm">{subtitle}</Text>
        </View>
      </View>

      <View>
        <Text>Progress</Text>
      </View>
    </View>
  );
}
