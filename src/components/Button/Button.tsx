import { Pressable, StyleSheet, Text } from "react-native";

import { Colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function Button({
  title,
  onPress,
  disabled = false,
}: Props) {
  return (
    <Pressable
      style={[
        styles.button,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  disabled: {
    opacity: 0.45,
  },

  text: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: Typography.button,
  },
});