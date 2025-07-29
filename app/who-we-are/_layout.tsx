import { Slot, Stack } from "expo-router";

import React from "react";

export default function YourScreen() {
  const dynamicTitle = "Who We Are";

  return (
    <>
      <Stack.Screen options={{ title: dynamicTitle }} />
      <Slot />
    </>
  );
}
