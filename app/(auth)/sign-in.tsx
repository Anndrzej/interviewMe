import ButtonApp from "@/components/ui/ButtonApp";
import ContainerApp from "@/components/ui/ContainerApp";
import InputFormApp from "@/components/ui/InputFormApp";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handle the submission of the sign-in form
  const onSignInPress = async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <ContainerApp>
      <View className="gap-4">
        <Text className="text-white text-2xl">Welcome back</Text>
        <Text className="text-primary-dark text-sm">
          sign in to continue your learning journey
        </Text>
      </View>
      <View className="flex-1 gap-4 my-8">
        <InputFormApp
          labelInput="Email Address"
          value={emailAddress}
          onChange={setEmailAddress}
          placeholder="Enter email"
        />
        <InputFormApp
          labelInput="Password"
          value={password}
          onChange={setPassword}
          placeholder="Enter password"
        />
      </View>

      <ButtonApp
        onPress={onSignInPress}
        label="Sign in"
        border
        borderColor="border-white"
      />
      <View className="justify-center items-center mt-8">
        <Text className="text-white ">
          Don&apos;t have and account?
          <Link className="ml-4" href="/sign-up">
            <Text className="text-blue-light">Sign up</Text>
          </Link>
        </Text>
        <Link className="mt-5" href="/">
          <Text className="text-blue-light">Forgot password?</Text>
        </Link>
      </View>
    </ContainerApp>
  );
}
