import Footer from "@/components/footer";
import HomeArticle from "@/components/home/home-article";
import HomeIntroduction from "@/components/home/home-introduction";
import HomeVision from "@/components/home/home-vision";
import HomeServices from "@/components/home/services";
import Navbar from "@/components/navbar";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const index = () => {
  return (
    <ScrollView>
      <Navbar />
      {/* home top  */}
      <LinearGradient
        colors={["#014789", "#001930"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.95]}
      >
        <View className="p-5 pt-10">
          <View>
            <View className="flex flex-row gap-4">
              <Text className="text-[#84CC16] text-lg font-medium">/ 01</Text>
              <Text className="text-[#84CC16] text-lg font-medium">
                / Infinity Mesh
              </Text>
            </View>
            <Text className="text-white text-2xl mt-5">
              Think bigger. Build smarter. Scale faster.
            </Text>
            <Text className="text-[#84CC16] text-lg mt-5 w-[80%] font-medium">
              We deliver full-scale digital development solutions that turn bold
              ideas into high-impact products.
            </Text>
          </View>
          <View className="items-center">
            <Image
              source={require("../../assets/images/png/home-ani.png")}
              style={{ marginTop: 40, width: 300, height: 300 }}
            />
          </View>
        </View>
      </LinearGradient>

      {/* introduction */}
      <HomeIntroduction />
      {/* home vision  */}
      <HomeVision />
      {/* services  */}
      <HomeServices />
      {/* article  */}
      <HomeArticle />
      {/* footer  */}
      <Footer />
    </ScrollView>
  );
};

export default index;
