import { images } from "@/constants/constants";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Welcome() {
  return (
    <View className="h-full px-6 bg-blue-dark">
      {/* Background */}
      <View className="flex-1">
        <Image
          className="h-full w-full"
          source={images.Container}
          resizeMode="contain"
          accessibilityRole="header"
        />
      </View>
      <View className="flex-0 mb-20">
        {/* Content */}
        <Text className="text-4xl font-bold text-white pr-10">
          Ace Your Tech Interview
        </Text>
        <Text className="text-sm py-3 text-white opacity-80">
          Practice, learn and master coding interviews with our curated
          challenges
        </Text>
        <Link href="/sign-in" asChild>
          <TouchableOpacity
            className="bg-white rounded-xl items-center justify-center py-3 mt-8"
            accessibilityRole="button"
            accessibilityLabel="Go to sign in page"
          >
            <Text className="text-sm font-bold">Get Started</Text>
          </TouchableOpacity>
        </Link>
        {/* Slide indicators - Enchancement */}
      </View>
    </View>
  );
}
