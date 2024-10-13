import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type Data = {
  public_repos: number;
  followers: number;
  following: number;
};

type Props = {
  data: Data;
};

// Card component with improved design
const Card = ({ number, text, ...other }: { number: string | number; text: string; [other: string]: any }) => {
  return (
    <View style={[styles.card, other.style]}>
      <View style={styles.cardContent}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

// CardList component that maps the data and renders Card components
const CardList = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <Card text="Public Repos" number={data.public_repos} style={styles.blueCard} />
      <Card text="Followers" number={data.followers} style={styles.greenCard} />
      <Card text="Following" number={data.following} style={styles.orangeCard} />
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',      // Align cards in a row
    justifyContent: 'space-around', // Even space between cards
    margin: 20,                // Add margin around the container
  },
  card: {
    width: 100,                // Width of each card
    padding: 15,               // Padding inside the card
    borderRadius: 10,          // Rounded corners
    shadowColor: '#000',       // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.3,        // Shadow opacity for iOS
    shadowRadius: 3,           // Shadow radius for iOS
    elevation: 5,              // Shadow for Android (elevation)
  },
  cardContent: {
    alignItems: 'center',      // Center the text and number
  },
  number: {
    fontSize: 24,              // Larger font size for the number
    fontWeight: 'bold',        // Bold font for the number
    color: '#fff',             // White text color for the number
    marginBottom: 5,           // Space between number and text
  },
  text: {
    fontSize: 16,              // Font size for the description
    color: '#fff',             // White text color for the description
  },
  blueCard: {
    backgroundColor: '#007bff', // Blue background for "Public Repos"
  },
  greenCard: {
    marginLeft:10,
    marginRight:10,
    backgroundColor: '#28a745', // Green background for "Followers"
  },
  orangeCard: {
    backgroundColor: '#fd7e14', // Orange background for "Following"
  },
});

export default CardList;
