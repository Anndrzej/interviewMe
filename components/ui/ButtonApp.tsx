import React from "react";
import { AccessibilityRole, Text, TouchableOpacity, View } from "react-native";

interface ButtonAppProps {
  label: string;
  background?: string;
  labelColor?: string;
  borderColor?: string;
  role?: AccessibilityRole;
  border?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onPress: () => void;
}

export default function ButtonApp({
  label,
  labelColor = "text-white",
  background,
  role = "button",
  borderColor = "border-none",
  border = true,
  iconLeft,
  iconRight,
  ...props
}: ButtonAppProps) {
  const buttonClasses = `${background} ${border ? `border ${borderColor}` : "border-none"} p-3 rounded-xl text-center`;
  return (
    <TouchableOpacity
      {...props}
      accessibilityLabel={label}
      accessibilityRole={role}
      className={buttonClasses}
    >
      {iconLeft && <View>{iconLeft}</View>}
      <Text className={`${labelColor} text-center`}>{label}</Text>
      {iconRight && <View>{iconRight}</View>}
    </TouchableOpacity>
  );
}
