import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import NavigationIcon from "../../assets/images/svg/navigation-button.svg";

const HomeIntroduction = () => {
  const router = useRouter();
  return (
    <View className="p-5 h-[60vh] flex flex-col justify-between">
      <View className="flex flex-row gap-4">
        <Text className="text-base text-[#003262] font-medium">/ 02</Text>
        <Text className="text-base text-[#003262] font-medium">
          / Introduction
        </Text>
      </View>
      <View>
        <Text className="text-[#65A30D] text-[26px]">
          We were founded on a simple belief: that great code can spark real,
          lasting change in the way businesses grow, scale, and lead.
        </Text>
        <Text className="pt-4 text-[#003262] text-lg font-medium">
          We are a world—class team of industry—leading professionals, who
          constantly push new technology to its limits.
        </Text>
        <TouchableOpacity
          className="flex flex-row items-center gap-4"
          onPress={() => router.push("/who-we-are")}
        >
          <Text className="text-[#014789] text-base font-medium py-5">
            Who We Are
          </Text>
          <NavigationIcon width={20} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeIntroduction;
