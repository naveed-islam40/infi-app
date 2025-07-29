import React from "react";
import { Image, Text, View } from "react-native";
import BrownArrow from "../../assets/images/svg/brown-arrow.svg";

const Footer = () => {
  return (
    <View className="relative">
      <Image
        source={require("../../assets/images/png/footer.png")}
        className="w-full h-[80vh] object-cover"
      />

      <View className="absolute bottom-5 left-0 right-0 z-20 px-5">
        <Text className="text-white text-lg">Have an idea?</Text>

        <View className="flex flex-row items-center gap-4">
          <Text className="text-[40px] text-[#84CC16]">Let’s Talk</Text>
          <BrownArrow width={50} height={50} />
        </View>

        {/* Centered horizontal line within padding */}
        <View className="h-[2px] bg-[#84CC16] w-full mt-2" />
      </View>
    </View>
  );
};

export default Footer;
