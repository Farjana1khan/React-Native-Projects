import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import SearchBox from "./Components/SearchInput"
import User from "./Components/User";
import { useState, useCallback } from "react";
import CardList from "./Components/CardList";

export type Data = {
  avatar_url: string;
  followers: string | number;
  following: string | number;
  login: string;
  public_repos: string | number;
};

export default function App() {
  const [data, setData] = useState<Data>();

  const search = useCallback((searchTerm: string) => {
    if (searchTerm === "") {
      alert("Please enter something");
      return;
    }

    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scrollContainer}>
        <SearchBox onSearch={search} />
        {data && (
          <>
            <User src={data.avatar_url} username={data.login} />
            <CardList data={data} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles for the App component
const styles = StyleSheet.create({

  scrollContainer: {
    padding: 16,
    alignItems: "center", // Center items horizontally
  },
});
