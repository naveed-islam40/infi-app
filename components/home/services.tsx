import React from "react";
import { Image, Text, View } from "react-native";
import BrownArrow from "../../assets/images/svg/brown-arrow.svg";
import NavigationIcon from "../../assets/images/svg/navigation-button.svg";

const HomeServices = () => {
  return (
    <View className=" bg-white">
      <View className="pt-10 p-5 h-[50vh] flex flex-col justify-between pb-16">
        <View className="flex flex-row gap-4">
          <Text className="text-[#003262] font-medium text-[16px]">/ 03</Text>
          <Text className="text-[#003262] font-medium text-[16px]">
            / Our Services
          </Text>
        </View>
        <Text className="text-[22px] font-medium text-[#65A30D]">
          From strategy to code, we deliver end-to-end software development that
          drives innovation, accelerates growth, and creates lasting value.
        </Text>
        <View className="flex flex-row items-center gap-4 pb-14">
          <Text className="text-[#014789] font-medium text-[16px]">
            What We Do
          </Text>
          <NavigationIcon width={20} height={20} />
        </View>
      </View>
      <View className="bg-[#F3F4F6] p-5 h-[60vh] flex flex-col justify-between pb-14">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[#84CC16] font-medium text-[54px]">01</Text>
          <BrownArrow width={54} height={54} />
        </View>
        <Text className="text-[#003262] text-[30px] font-medium">
          Creating Digital Products
        </Text>
        <Image
          source={require("../../assets/images/png/work-1.png")}
          className="w-full h-[27vh] object-cover"
        />
      </View>
    </View>
  );
};

export default HomeServices;
