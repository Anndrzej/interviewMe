import React from "react";
import { Text, TextInput, View } from "react-native";

interface InputFormAppProps {
  value: string;
  placeholder: string;
  labelInput: string;

  onChange: (value: string) => void;
}

export default function InputFormApp({
  value,
  placeholder,
  labelInput,

  onChange,
  ...props
}: InputFormAppProps) {
  return (
    <View>
      <Text className="text-primary-light text-xs mb-2">{labelInput}</Text>
      <TextInput
        {...props}
        className="text-primary-light border bg-background-input border-primary-dark p-3 rounded-xl"
        value={value}
        placeholder={placeholder}
        onChangeText={(value) => onChange(value)}
      />
    </View>
  );
}
