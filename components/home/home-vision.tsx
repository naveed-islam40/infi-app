import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, View } from "react-native";
import RoundLogo from "../../assets/images/svg/Arrow up-down.svg";

const HomeVision = () => {
  return (
    <LinearGradient
      colors={["#FFFFFF", "#B8DAFB99"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="mt-10 pb-10"
    >
      {/* hero image  */}
      <Image
        source={require("../../assets/images/png/home-vision.png")}
        className="w-full h-[25vh] object-cover"
      />
      <View className="p-5 h-[35vh] flex flex-col justify-between">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row gap-4">
            <Text className="text-[#003262] text-[20px] font-medium">
              / Vision
            </Text>
            <Text className="text-[#003262] text-[20px] font-medium">
              / Mission
            </Text>
          </View>
          <RoundLogo />
        </View>
        <Text className="text-[#003262] text-lg font-medium">
          To become a global leader in transformative digital development where
          businesses of all sizes turn for cutting-edge technology, trusted
          partnership, and measurable results.
        </Text>
      </View>
    </LinearGradient>
  );
};

export default HomeVision;
