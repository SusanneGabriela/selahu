import { StyleSheet, Text, View } from "react-native";

import Tree from "./Tree";

import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
import { Typography } from "../theme/typography";

type Props = {
  votes: number;
};

export default function TreeHero({ votes }: Props) {
  return (
    <View style={styles.container}>
      <Tree votes={votes} />

      <Text style={styles.caption}>
        Every vote is a promise kept to yourself.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: Spacing.xxl,
  },

  caption: {
    ...Typography.small,
    color: Colors.muted,
    textAlign: "center",
    marginTop: Spacing.lg,
    paddingHorizontal: 30,
    lineHeight: 24,
  },
});