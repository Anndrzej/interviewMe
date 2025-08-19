import ContainerApp from "@/components/ui/ContainerApp";
import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function Profile() {
  return (
    <ContainerApp>
      <Link href="/settings">
        <Text> Settigns</Text>
      </Link>
    </ContainerApp>
  );
}
