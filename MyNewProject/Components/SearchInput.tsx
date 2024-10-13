import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';

type Props = {
  onSearch: (username: string) => void;
};

const SearchInput = ({ onSearch }: Props) => {
  const [username, setUsername] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Search User</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter your username..." 
        onChangeText={(text: string) => setUsername(text)} 
        placeholderTextColor="#999" 
      />
      <Pressable style={styles.button} onPress={() => onSearch(username)}>
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    backgroundColor: '#f8f9fa', // Light gray background
    borderRadius: 8,          // Rounded corners for container
    alignItems: 'center',     // Center items horizontally
    justifyContent: 'center', // Center items vertically
  },
  label: {
    fontSize: 20,             // Slightly larger text
    fontWeight: 'bold',       // Bold text
    marginBottom: 10,         // Space between label and input
  },
  input: {
    width: '100%',            // Full width input field
    padding: 10,              // Padding inside the input
    borderColor: '#ccc',      // Light border color
    borderWidth: 1,           // Border thickness
    borderRadius: 5,          // Rounded input corners
    marginBottom: 15,         // Space between input and button
    backgroundColor: '#fff',  // White background for input field
  },
  button: {
    backgroundColor: '#007bff', // Blue button background
    paddingVertical: 10,        // Vertical padding for the button
    paddingHorizontal: 20,      // Horizontal padding for the button
    borderRadius: 5,            // Rounded button corners
  },
  buttonText: {
    color: '#fff',             // White text for the button
    fontSize: 16,              // Slightly larger font size for the button text
    fontWeight: 'bold',        // Bold text for the button
  },
});

export default SearchInput;
