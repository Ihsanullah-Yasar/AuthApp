import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getWelcomeMessage } from "../util/auth";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");
  const authContent = useContext(AuthContext);
  const token = authContent.token;
  useEffect(() => {
    getWelcomeMessage(token)
      .then((response) => {
        console.log(response.data);
        setFetchedMessage(response.data);
      })
      .catch((error) => {
        console.group("API Error Details");
        console.error("Error name:", error.name);
        console.error("Error message:", error.message);
        console.error("Error response:", error.response);
        console.error("Error request:", error.request);
        console.groupEnd();
      });
  }, [token]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
