import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import Details from "./RoomDetails/[Details]";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [Username, setUsername] = useState("");
  // const [places, setPlaces] = useState([]);

  // useEffect(() => {
  //   const fetchNearbyPlaces = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=27.18985609451031,31.162482028496658&radius=500&key=AIzaSyBYfJ6RzCyEuI20cAuSU4r33KhY3liHNCo`
  //       );
  //       const data = await response.json();
  //       setPlaces(data.results);
  //       console.log(data.results);

  //     } catch (error) {
  //       console.log('Error fetching nearby places:', error);
  //     }
  //   };

  //   fetchNearbyPlaces();
  // }, []);
  
  async function loadUsername() {
    try {
      const storedUsername = await AsyncStorage.getItem("username");
      if (storedUsername!== null) {
        setUsername(storedUsername);
        
      }
    } catch (error) {
      console.log("Error retrieving username:", error);
    }
  }
  loadUsername()
  const data: {
    id: number;
    url: string;
    name: string;
    location: string;
    category: string;
  }[] = [
    {
      id: 1,
      url: require("../assets/cover_gradient.png"),
      name: "Dyamond De Hotel",
      location: "Cairo, Giza",
      category: "Recommend",
    },
    {
      id: 2,
      url: require("../assets/cover_gradient.png"),
      name: "Azure De Hotel",
      location: "Qena, Qena City",
      category: "Recommend",
    },
    {
      id: 3,
      url: require("../assets/cover_gradient.png"),
      name: "Sohag De Hotel",
      location: "City, Netherlands",
      category: "Popular",
    },
    {
      id: 4,
      url: require("../assets/cover_gradient.png"),
      name: "Alex De Hotel",
      location: "Alex, Netherlands",
      category: "Popular",
    },
    {
      id: 5,
      url: require("../assets/cover_gradient.png"),
      name: "Mansoura De Hotel",
      location: "Mansoura, Netherlands",
      category: "Trending",
    },
    {
      id: 6,
      url: require("../assets/cover_gradient.png"),
      name: "Alpha De Hotel",
      location: "Amsterdam, Netherlands",
      category: "Trending",
    },
  ];
  const [filteredData, setFilteredData] = useState(data);

  const handleTabs = (name: string) => {
    const filtered = data.filter((item) => item.category === name);
    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <Image source={require("../assets/award.png")} />
      </View>
      <Text
        style={{
          color: "#3E3E3E",
          fontSize: 28,
          fontWeight: "700",
          marginTop: 40,
          paddingHorizontal: 20,
        }}
      >
        Good Morning, {Username}!
      </Text>
      <View style={styles.tabs}>
        <Pressable onPress={() => handleTabs("Recommend")}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#3E3E3E" }}>
            Recommend
          </Text>
        </Pressable>
        <Pressable onPress={() => handleTabs("Popular")}>
          <Text style={{ fontSize: 18, fontWeight: "400", color: "#3E3E3E" }}>
            Popular
          </Text>
        </Pressable>
        <Pressable onPress={() => handleTabs("Trending")}>
          <Text style={{ fontSize: 18, fontWeight: "400", color: "#3E3E3E" }}>
            Trending
          </Text>
        </Pressable>
      </View>
      <ScrollView horizontal>
        {filteredData.map((item, index) => {
          return (
            <View style={styles.box} key={index}>
              <Link
                href={{
                  pathname: "/RoomDetails/[Details]",
                  params: {
                    id: item.id,
                    location: item.location,
                    name: item.name,
                    url: item.url,
                  },
                }}
                asChild
              >
                <Pressable
                  onPress={() => {
                    return (
                      <Details
                        location={item.location}
                        name={item.name}
                        url={item.url}
                      />
                    );
                  }}
                  style={styles.box}
                >
                  <View style={styles.rate}>
                    <Image source={require("../assets/star.png")} />
                    <Text
                      style={{ color: "#fff", fontSize: 14, fontWeight: "600" }}
                    >
                      4.6
                    </Text>
                  </View>
                  <Image source={item.url} height={424} />
                  <View style={styles.text}>
                    <Text
                      style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 14,
                        fontWeight: "400",
                      }}
                    >
                      {item.location}
                    </Text>
                  </View>
                </Pressable>
              </Link>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
  },
  tabs: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: 40,
    paddingHorizontal: 20,
  },
  box: {
    height: 424,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  rate: {
    position: "absolute",
    left: 20,
    top: 20,
    zIndex: 10,
    width: 74,
    height: 36,
    backgroundColor: "rgba(62, 62, 62, 0.6)",
    borderRadius: 20.5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
    gap: 8,
  },
  text: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
