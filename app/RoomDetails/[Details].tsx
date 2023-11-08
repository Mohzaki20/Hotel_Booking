import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
interface Props {
  location: string;
  name: string;
  url: string;
}
const Details: React.FC<Props> = ({ location, name, url }) => {
  const local = useLocalSearchParams();
  console.log(local.name);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View>
          <Image source={require("../../assets/Rectangle.png")} width={95} />
        </View>
        <View style={styles.text}>
          <Text style={{ color: "#3E3E3E", fontSize: 18, fontWeight: "700" }}>
            {local.name}
          </Text>
          <Text style={{ color: "#3E3E3E", fontSize: 14, fontWeight: "400" }}>
            {local.location}
          </Text>
          <View
            style={{
              flexDirection: "row-reverse",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/star.png")} />
            <Text style={{ color: "#FD9942" }}>4.6</Text>
            <Text style={{ color: "#3E3E3E", fontSize: 14, fontWeight: "400" }}>
              (1763 Reviews)
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.paragraph}>
        <Text
          style={{
            color: "#3E3E3ECC",
            lineHeight: 25,
            fontSize: 14,
            fontWeight: "400",
          }}
        >
          Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are
          always maintaning the quality for better rating and high attitude
          service for you.
        </Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
          Book
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fafafa",
    alignItems: "center",
    paddingTop: 50,
  },
  section: {
    width: 325,
    height: 125,
    backgroundColor: "#fff",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    gap: 15,
  },
  text: {
    gap: 10,
  },
  paragraph: {
    paddingHorizontal: 30,
    marginTop: 40,
  },
  btn: {
    backgroundColor: "#00A76E",
    justifyContent: "center",
    alignItems: "center",
    width: 165,
    height: 57,
    borderRadius: 27.5,
    marginTop: 70,
  },
});
