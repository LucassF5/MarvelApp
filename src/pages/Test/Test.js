// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, ActivityIndicator, StatusBar, StyleSheet } from 'react-native';
// import axios from 'axios';

// const MarvelAPI = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     const fetchCharacters = async () => {
//       try {
//         const response = await axios.get(
//           'https://gateway.marvel.com:443/v1/public/characters?apikey=e184a7c7a12b356caeb1fed10b4c5c26&hash=d00ffa62ad5826a547c10f5aad993ce4&ts=1715016875&limit=10',
//           // {
//           //   params: {
//           //     apikey: '?ts=1715016875&apikey=e184a7c7a12b356caeb1fed10b4c5c26&hash=d00ffa62ad5826a547c10f5aad993ce4',
//           //     limit: 10, // Limitando a 10 personagens por exemplo
//           //   },
//           // }
//         );
//         setCharacters(response.data.data.results);
//         setIsLoading(false);
//         console.log("DEU CERTO\n")
//         console.log(response.data.data.results);
//       } catch (error) {
//         console.error('Erro ao buscar personagens:', error);
//       }
//     };

//     fetchCharacters();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {isLoading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <FlatList
//           data={characters}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.characterContainer}>
//               <Text style={styles.name}>{item.name}</Text>
//               <Text style={styles.description}>{item.description || 'Sem descrição disponível'}</Text>
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5fcff',
//     padding: 10,
//   },
//   characterContainer: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   description: {
//     fontSize: 14,
//   },
// });

// export default MarvelAPI;