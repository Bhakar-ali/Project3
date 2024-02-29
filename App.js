import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Category', { category: 'mobiles' })}
      >
        <Text style={styles.navButtonText}>Mobiles</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Category', { category: 'headphones' })}
      >
        <Text style={styles.navButtonText}>Headphones</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Category', { category: 'tablets' })}
      >
        <Text style={styles.navButtonText}>Tablets</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const CategoryScreen = ({ route }) => {
  const { category } = route.params;
  let productsData = [];

  // Mock data for products based on categories
  if (category === 'mobiles') {
    productsData = [
      { id: '1', title: 'Mobile 1', image: require('./assets/mobile1.jpg') },
      { id: '2', title: 'Mobile 2', image: require('./assets/mobile2.jpg') },
      { id: '3', title: 'Mobile 3', image: require('./assets/mobile3.jpg') },
      // Add more mobiles as needed
    ];
  } else if (category === 'headphones') {
    productsData = [
      { id: '1', title: 'Headphone 1', image: require('./assets/headphone1.jpg') },
      { id: '2', title: 'Headphone 2', image: require('./assets/headphone2.jpg') },
      { id: '3', title: 'Headphone 3', image: require('./assets/headphone3.jpg') },
      // Add more headphones as needed
    ];
  } else if (category === 'tablets') {
    productsData = [
      { id: '1', title: 'Tablet 1', image: require('./assets/tablet1.jpg') },
      { id: '2', title: 'Tablet 2', image: require('./assets/tablet2.jpg') },
      { id: '3', title: 'Tablet 3', image: require('./assets/tablet3.jpg') },
      // Add more tablets as needed
    ];
  }

  const renderProduct = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{category}</Text>
      <FlatList
        data={productsData}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display two products per row
        columnWrapperStyle={styles.productList}
      />
    </View>
  );
};

// Navigation
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#333',
  },
  navButton: {
    padding: 5,
  },
  navButtonText: {
    color: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  productList: {
    justifyContent: 'space-around',
  },
  productItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  productTitle: {
    fontSize: 16,
  },
});

export default App;
