import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import BrownArrow from "../../assets/images/svg/brown-arrow.svg";
import NavigationIcon from "../../assets/images/svg/navigation-button.svg";

const HomeArticle = () => {
  return (
    <View className="bg-white p-5">
      {/* part 1 */}
      <View className="h-[40vh] flex flex-col justify-between pt-16 pb-10">
        <View className="flex flex-row gap-4">
          <Text className="text-[16px] font-medium text-[#003262]">/ 04</Text>
          <Text className="text-[16px] font-medium text-[#003262]">
            / Articles
          </Text>
        </View>
        <Text className="text-[#65A30D] font-medium text-[22px]">
          Welcome to our Insights where technology meets real-world problem
          solving.
        </Text>
        <Text className="text-[#4B5563] text-sm">
          We share hands-on tips, industry trends, and lessons learned from
          building software that scales. Whether you're a developer, product
          thinker, or just love clean code, you'll find our articles worth your
          time.
        </Text>
      </View>
      {/* part 2 */}
      <View className="pt-5">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-lg font-medium text-[#84CC16]">01</Text>
          <BrownArrow width={30} height={30} />
        </View>
        <Text className="h-[2px] bg-[#84CC16] w-full"></Text>
        <View className="pt-5 h-[45vh] flex flex-col justify-between">
          {/* title  */}
          <Text className="text-[#003262] text-lg font-medium">
            How to Build an Enterprise Game Platform for Millions of Players
            (1/3)
          </Text>
          <Image
            source={require("../../assets/images/png/article_01.png")}
            className="w-full h-[26vh]"
          />

          <TouchableOpacity className="flex flex-row items-center gap-4">
            <Text className="text-[#003262] text-base font-medium">
              Explore Articles
            </Text>
            <NavigationIcon width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeArticle;
