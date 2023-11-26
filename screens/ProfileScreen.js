import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { auth } from "../firebase"; // Sesuaikan path ini dengan path ke file konfigurasi Firebase Anda

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in.
        setUser(authUser);
      } else {
        // User is signed out.
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Redirect to login screen after successful logout
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={{ marginBottom: 20 }}>Welcome, {user.email}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <Text>Please log in to see your profile.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
