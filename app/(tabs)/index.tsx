import CardApp from "@/components/ui/CardApp";
import ContainerApp from "@/components/ui/ContainerApp";
import { useUser } from "@clerk/clerk-expo";
import Feather from "@expo/vector-icons/Feather";
import { Text, View } from "react-native";

export default function Page() {
  const { user } = useUser();

  return (
    <ContainerApp>
      <View className="mt-10 mb-8">
        <Text className="text-white text-2xl">
          Hello {user?.emailAddresses[0].emailAddress}
        </Text>
        <Text className="text-primary-dark text-sm">Ready to practice?</Text>
        {/* <SignOutButton /> */}
      </View>

      {/* <View>
        TABS - enchancement ???

      </View> */}

      <View className="gap-4">
        {/* Cards */}
        <CardApp
          title="JavaScript"
          subtitle="42 questions"
          icon={<Feather name="code" size={18} color="#60A5FA" />}
        />
        <CardApp
          title="JavaScript"
          subtitle="42 questions"
          icon={<Feather name="code" size={18} color="#60A5FA" />}
        />
        <CardApp
          title="JavaScript"
          subtitle="42 questions"
          icon={<Feather name="code" size={18} color="#60A5FA" />}
        />
      </View>
    </ContainerApp>
  );
}
