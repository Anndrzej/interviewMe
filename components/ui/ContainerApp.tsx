import React from "react";
import { View } from "react-native";

interface ContainerAppProps {
  children: React.ReactNode;
  variant?: string;
  className?: string;
}

export default function ContainerApp({
  children,
  variant = "primary",

  ...props
}: ContainerAppProps) {
  const containerBg =
    variant === "primary" ? "bg-background-main" : "bg-blue-dark";
  return (
    <View {...props} className={`${containerBg} h-full w-full p-6`}>
      {children}
    </View>
  );
}
