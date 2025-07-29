import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Logo from "../../assets/images/svg/logo.svg";
import MenuButton from "../../assets/images/svg/menu.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <LinearGradient
      colors={["#014789", "#001930"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="flex-row items-center justify-between h-16 px-4 mt-10 py-3 w-full"
    >
      {/* Left: App Logo / Icon */}
      <TouchableOpacity>
        <Logo width={30} height={30} />
      </TouchableOpacity>

      {/* Right: Profile or Search Icon */}
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <MenuButton width={30} height={30} />
      </TouchableOpacity>
      {/* <Menu onOpenChange={setOpen} open={open} /> */}
    </LinearGradient>
  );
};

export default Navbar;
