import ButtonApp from "@/components/ui/ButtonApp";
import Container from "@/components/ui/ContainerApp";
import InputFormApp from "@/components/ui/InputFormApp";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true);
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  if (pendingVerification) {
    return (
      <>
        <Text>Verify your email</Text>
        <TextInput
          value={code}
          placeholder="Enter your verification code"
          onChangeText={(code) => setCode(code)}
        />
        <TouchableOpacity onPress={onVerifyPress}>
          <Text>Verify</Text>
        </TouchableOpacity>
      </>
    );
  }

  return (
    <Container variant="secondary">
      <View className="gap-2">
        <Text className="text-white text-2xl">Create your account</Text>
        <Text className="text-white text-sm opacity-80">
          Let&apos;s start with your basic information
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
        onPress={onSignUpPress}
        label="Continue"
        border
        borderColor="border-white"
      />
      <View className="justify-center items-center mt-8">
        <Text className="text-white opacity-80">
          Already have an account
          <Link className="ml-4" href="/sign-in">
            <Text className="text-white">Sign in</Text>
          </Link>
        </Text>
      </View>
    </Container>
  );
}
