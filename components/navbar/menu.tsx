import React from "react";
import { Text, View } from "react-native";

interface MenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Menu = ({ open, onOpenChange }: MenuProps) => {
  return (
    <View>
      <Text>Menu</Text>
    </View>
  );
};

export default Menu;
