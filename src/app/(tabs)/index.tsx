import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import { useIdentities } from "../../context/IdentityContext";

const TREE_IMAGE = require("../../../assets/images/selahu-tree-hero.png");

const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

export default function HomeScreen() {
  const { identities } = useIdentities();
  const { width, height } = useWindowDimensions();

  const lifetimeVotes = identities.reduce(
    (total, identity) => total + identity.votes,
    0
  );

  /*
   * Responsive scaling from the 390 × 844 reference design.
   */
  const scale = width / BASE_WIDTH;

  const s = (value: number) => value * scale;

  const verticalScale = Math.min(
    scale,
    height / BASE_HEIGHT
  );

  const vs = (value: number) => value * verticalScale;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>

        {/* =====================================================
            HEADER
        ====================================================== */}

        <View
          style={[
            styles.header,
            {
              height: vs(252),
              paddingTop: vs(52),
            },
          ]}
        >
          <Text
            style={[
              styles.greeting,
              {
                fontSize: vs(24),
                lineHeight: vs(29),
              },
            ]}
          >
            Good Morning,
          </Text>

          <Text
            style={[
              styles.name,
              {
                fontSize: vs(69),
                lineHeight: vs(72),
                marginTop: vs(1),
              },
            ]}
          >
            Susanne
          </Text>

          <Text
            style={[
              styles.question,
              {
                fontSize: vs(19),
                lineHeight: vs(25),
                marginTop: vs(12),
              },
            ]}
          >
            Who do you want to become today?
          </Text>
        </View>

        {/* =====================================================
            HERO IMAGE
        ====================================================== */}

        <View
          style={[
            styles.hero,
            {
              width,
              height: vs(285),
            },
          ]}
        >
          <Image
            source={TREE_IMAGE}
            resizeMode="cover"
            style={[
              styles.heroImage,
              {
                width,
                height: vs(330),
                top: 0,
              },
            ]}
          />

          {/* =================================================
              SUBTLE TOP FADE

              Only softens the hard edge where the photograph
              begins. The tree remains crisp and visible.
          ================================================== */}

          <LinearGradient
            pointerEvents="none"
            colors={[
              "#F8EEDF",
              "rgba(248,238,223,0.55)",
              "rgba(248,238,223,0.20)",
              "rgba(248,238,223,0)",
            ]}
            locations={[
              0,
              0.20,
              0.45,
              0.75,
            ]}
            style={[
              styles.heroTopFade,
              {
                height: vs(38),
              },
            ]}
          />

          {/* =================================================
              BOTTOM FADE
          ================================================== */}

          <LinearGradient
            pointerEvents="none"
            colors={[
              "rgba(248,238,223,0)",
              "rgba(248,238,223,0.02)",
              "rgba(248,238,223,0.06)",
              "rgba(248,238,223,0.14)",
              "rgba(248,238,223,0.28)",
              "rgba(248,238,223,0.48)",
              "rgba(248,238,223,0.70)",
              "rgba(248,238,223,0.88)",
              "#F8EEDF",
            ]}
            locations={[
              0,
              0.18,
              0.32,
              0.46,
              0.60,
              0.72,
              0.84,
              0.94,
              1,
            ]}
            style={[
              styles.heroFade,
              {
                height: vs(125),
              },
            ]}
          />
        </View>

        {/* =====================================================
            LIFETIME VOTES
        ====================================================== */}

        <View
          style={[
            styles.votes,
            {
              width,
              height: vs(92),
              paddingTop: vs(8),
            },
          ]}
        >
          <Text
            style={[
              styles.votesLabel,
              {
                fontSize: vs(12),
                letterSpacing: vs(3.2),
              },
            ]}
          >
            LIFETIME VOTES
          </Text>

          <Text
            style={[
              styles.votesNumber,
              {
                fontSize: vs(57),
                lineHeight: vs(62),
                marginTop: vs(1),
              },
            ]}
          >
            {lifetimeVotes}
          </Text>
        </View>

        {/* =====================================================
            BEGIN TODAY'S JOURNEY
        ====================================================== */}

        <Pressable
          onPress={() => router.push("/journey")}
          style={({ pressed }) => [
            styles.button,
            {
              width: Math.min(
                s(336),
                width - s(32)
              ),
              height: vs(64),
              borderRadius: vs(20),
              marginTop: vs(8),
              paddingHorizontal: s(10),
              transform: [
                {
                  scale: pressed ? 0.985 : 1,
                },
              ],
            },
          ]}
        >
          {/* LEFT LEAF */}

          <View
            style={[
              styles.leafContainer,
              {
                width: s(48),
                height: vs(48),
              },
            ]}
          >
            <Ionicons
              name="leaf-outline"
              size={vs(29)}
              color="#E7B84B"
              style={styles.leaf}
            />
          </View>

          {/* BUTTON TEXT */}

          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.82}
            style={[
              styles.buttonText,
              {
                fontSize: vs(20),
              },
            ]}
          >
            Begin Today's Journey
          </Text>

          {/* RIGHT ARROW */}

          <Text
            style={[
              styles.arrow,
              {
                width: s(42),
                fontSize: vs(34),
              },
            ]}
          >
            →
          </Text>
        </Pressable>

        {/* Bottom breathing room */}

        <View style={styles.bottomSpacer} />

      </View>
    </SafeAreaView>
  );
}

/* =============================================================
   STYLES
============================================================= */

const styles = StyleSheet.create({

  /* =========================================================
     SCREEN
  ========================================================= */

  safeArea: {
    flex: 1,
    backgroundColor: "#F8EEDF",
  },

  screen: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F8EEDF",
    alignItems: "center",
    overflow: "hidden",
  },

  /* =========================================================
     HEADER
  ========================================================= */

  header: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#F8EEDF",
  },

  greeting: {
    fontFamily: "CormorantGaramond-Regular",
    color: "#073D2B",
    textAlign: "center",
    includeFontPadding: false,
  },

  name: {
    fontFamily: "CormorantGaramond-Regular",
    color: "#073D2B",
    textAlign: "center",
    includeFontPadding: false,
  },

  question: {
    fontFamily: "CormorantGaramond-Regular",
    color: "#073D2B",
    textAlign: "center",
    includeFontPadding: false,
  },

  /* =========================================================
     HERO
  ========================================================= */

  hero: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#F8EEDF",
  },

  heroImage: {
    position: "absolute",
    left: 0,
  },

  /* =========================================================
     TOP IMAGE FADE
  ========================================================= */

  heroTopFade: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    zIndex: 2,
  },

  /* =========================================================
     BOTTOM IMAGE FADE
  ========================================================= */

  heroFade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },

  /* =========================================================
     VOTES
  ========================================================= */

  votes: {
    alignItems: "center",
    backgroundColor: "#F8EEDF",
  },

  votesLabel: {
    fontFamily: "System",
    fontWeight: "400",
    color: "#073D2B",
    textAlign: "center",
  },

  votesNumber: {
    fontFamily: "CormorantGaramond-Regular",
    color: "#073D2B",
    textAlign: "center",
    includeFontPadding: false,
  },

  /* =========================================================
     BUTTON
  ========================================================= */

  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#063D2A",

    shadowColor: "#000000",

    shadowOffset: {
      width: 0,
      height: 7,
    },

    shadowOpacity: 0.16,
    shadowRadius: 10,

    elevation: 7,
  },

  /* =========================================================
     LEAF
  ========================================================= */

  leafContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  leaf: {
    transform: [
      {
        rotate: "-12deg",
      },
    ],
  },

  /* =========================================================
     BUTTON TEXT
  ========================================================= */

  buttonText: {
    flex: 1,
    fontFamily: "CormorantGaramond-Regular",
    color: "#F8F3EA",
    textAlign: "center",
    includeFontPadding: false,
  },

  /* =========================================================
     ARROW
  ========================================================= */

  arrow: {
    fontFamily: "System",
    fontWeight: "300",
    color: "#FFFFFF",
    textAlign: "right",
    includeFontPadding: false,
  },

  /* =========================================================
     BOTTOM SPACE
  ========================================================= */

  bottomSpacer: {
    flex: 1,
    backgroundColor: "#F8EEDF",
    width: "100%",
  },
});