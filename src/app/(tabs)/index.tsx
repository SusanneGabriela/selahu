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

/*
 * Reference design:
 * 390 × 844
 *
 * Everything below is calculated from the actual device
 * dimensions so the composition scales rather than using
 * fixed screen dimensions.
 */

const DESIGN_WIDTH = 390;
const DESIGN_HEIGHT = 844;

export default function HomeScreen() {
  const { identities } = useIdentities();
  const { width, height } = useWindowDimensions();

  /*
   * Scale from BOTH dimensions.
   *
   * This prevents the layout from becoming too large on
   * short devices and prevents excessive empty space on
   * tall devices.
   */
  const widthScale = width / DESIGN_WIDTH;
  const heightScale = height / DESIGN_HEIGHT;

  const scale = Math.min(widthScale, heightScale);

  /*
   * Keep a sensible minimum/maximum scale so typography
   * remains comfortable on unusual devices.
   */
  const s = Math.max(0.82, Math.min(scale, 1.12));

  const lifetimeVotes = identities.reduce(
    (total, identity) => total + identity.votes,
    0
  );

  /*
   * ---------------------------------------------------------
   * RESPONSIVE DIMENSIONS
   * ---------------------------------------------------------
   */

  const headerHeight = Math.round(252 * s);
  const headerPaddingTop = Math.round(55 * s);

  const heroHeight = Math.round(285 * s);

  const buttonWidth = Math.min(
    Math.round(336 * s),
    width - Math.round(54 * s)
  );

  const buttonHeight = Math.round(64 * s);

  /*
   * ---------------------------------------------------------
   * SCREEN
   * ---------------------------------------------------------
   */

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
              height: headerHeight,
              paddingTop: headerPaddingTop,
            },
          ]}
        >
          <Text
            style={[
              styles.greeting,
              {
                fontSize: Math.round(24 * s),
                lineHeight: Math.round(29 * s),
              },
            ]}
          >
            Good Morning,
          </Text>

          <Text
            style={[
              styles.name,
              {
                fontSize: Math.round(69 * s),
                lineHeight: Math.round(72 * s),
              },
            ]}
          >
            Susanne
          </Text>

          <Text
            style={[
              styles.question,
              {
                fontSize: Math.round(19 * s),
                lineHeight: Math.round(25 * s),
                marginTop: Math.round(12 * s),
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
              height: heroHeight,
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
                height: heroHeight,
              },
            ]}
          />

          {/* ===================================================
              TOP FADE

              Short and subtle.

              The photograph should gently emerge from the
              cream background rather than having a hard edge.
          ==================================================== */}

          <LinearGradient
            pointerEvents="none"
            colors={[
              "#F8EEDF",
              "rgba(248,238,223,0.88)",
              "rgba(248,238,223,0.48)",
              "rgba(248,238,223,0.14)",
              "rgba(248,238,223,0)",
            ]}
            locations={[0, 0.18, 0.42, 0.68, 1]}
            style={[
              styles.topFade,
              {
                height: Math.round(52 * s),
              },
            ]}
          />

          {/* ===================================================
              BOTTOM FADE

              Deliberately short.

              The tree and landscape remain clearly visible.
          ==================================================== */}

          <LinearGradient
            pointerEvents="none"
            colors={[
              "rgba(248,238,223,0)",
              "rgba(248,238,223,0.08)",
              "rgba(248,238,223,0.22)",
              "rgba(248,238,223,0.55)",
              "#F8EEDF",
            ]}
            locations={[0, 0.25, 0.48, 0.76, 1]}
            style={[
              styles.bottomFade,
              {
                height: Math.round(38 * s),
              },
            ]}
          />
        </View>

        {/* =====================================================
            VOTES
        ====================================================== */}

        <View
          style={[
            styles.votes,
            {
              height: Math.round(92 * s),
              paddingTop: Math.round(8 * s),
            },
          ]}
        >
          <Text
            style={[
              styles.votesLabel,
              {
                fontSize: Math.round(12 * s),
              },
            ]}
          >
            L I F E T I M E   V O T E S
          </Text>

          <Text
            style={[
              styles.votesNumber,
              {
                fontSize: Math.round(57 * s),
                lineHeight: Math.round(62 * s),
                marginTop: Math.round(1 * s),
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
          style={[
            styles.button,
            {
              width: buttonWidth,
              height: buttonHeight,
              marginTop: Math.round(8 * s),
              borderRadius: Math.round(20 * s),
            },
          ]}
          onPress={() => router.push("/journey")}
        >
          <Text
            style={[
              styles.buttonText,
              {
                fontSize: Math.round(20 * s),
              },
            ]}
          >
            Begin Today's Journey
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

/* =============================================================
   STYLES
============================================================= */

const styles = StyleSheet.create({
  /* ---------------------------------------------------------
     SCREEN
  --------------------------------------------------------- */

  safeArea: {
    flex: 1,
    backgroundColor: "#F8EEDF",
  },

  screen: {
    flex: 1,
    backgroundColor: "#F8EEDF",
    alignItems: "center",
    overflow: "hidden",
  },

  /* ---------------------------------------------------------
     HEADER
  --------------------------------------------------------- */

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
    marginTop: 1,
  },

  question: {
    fontFamily: "CormorantGaramond-Regular",
    color: "#073D2B",
    textAlign: "center",
    includeFontPadding: false,
  },

  /* ---------------------------------------------------------
     HERO
  --------------------------------------------------------- */

  hero: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#F8EEDF",
  },

  heroImage: {
    position: "absolute",
    left: 0,
    top: 0,
  },

  /*
   * Soft transition INTO the photograph.
   */
  topFade: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },

  /*
   * Very restrained transition OUT of the photograph.
   */
  bottomFade: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  /* ---------------------------------------------------------
     VOTES
  --------------------------------------------------------- */

  votes: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#F8EEDF",
  },

  votesLabel: {
    fontFamily: "System",
    fontWeight: "400",
    color: "#073D2B",
    textAlign: "center",
    letterSpacing: 0.5,
  },

  votesNumber: {
    fontFamily: "CormorantGaramond-Regular",
    color: "#073D2B",
    textAlign: "center",
    includeFontPadding: false,
  },

  /* ---------------------------------------------------------
     BUTTON
  --------------------------------------------------------- */

  button: {
    backgroundColor: "#063D2A",

    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000000",

    shadowOffset: {
      width: 0,
      height: 7,
    },

    shadowOpacity: 0.16,
    shadowRadius: 10,

    elevation: 7,
  },

  buttonText: {
    fontFamily: "CormorantGaramond-Regular",
    color: "#F8F3EA",
    textAlign: "center",
    includeFontPadding: false,
  },
});