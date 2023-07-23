import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {setShowsList, setSelectedShow} from '../../store/actions';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {ScrollView} from 'react-native-gesture-handler';

const ShowsList = ({navigation}) => {
  const dispatch = useDispatch();
  const showsList = useSelector(state => state.showsList);

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/search/shows?q=all/')
      .then(response => {
        dispatch(setShowsList(response.data));
        // console.log("shows:", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [dispatch]);

  const handleShowSelected = item => {
    dispatch(setSelectedShow(item));
    navigation.navigate('Details');
  };

  const renderItem = ({item}) => (
    <View style={[styles.card, styles.cardElevated]}>
      <View style={styles.ShowHeading}>
        <Text style={styles.ShowName}>{item.show.name}</Text>
      </View>
      <View style={styles.ShowImageSection}>
        <TouchableOpacity onPress={() => handleShowSelected(item)}>
          <Image
            source={{
              uri: item.show.image.medium,
            }}
            style={styles.ShowImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.ShowBody}>
        {item.show.runtime ? (
          <Text style={styles.ShowRuntime}>
            <Text style={{color: 'gray', fontWeight: '400'}}>Runtime: </Text>
            {item.show.runtime} min
          </Text>
        ) : (
          <Text style={styles.ShowNA}>N/A</Text>
        )}
        {item.show.rating.average ? (
          <Text style={styles.ShowRating}>
            <Text style={{color: 'gray', fontWeight: '400'}}>Rating: </Text>
            {item.show.rating.average}
          </Text>
        ) : (
          <Text style={styles.ShowNA}>N/A</Text>
        )}
      </View>
      <View style={styles.ShowDetail}>
        <Button title="View Details" onPress={() => handleShowSelected(item)} />
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headingText}>TV Shows List</Text>
        <FlatList
          data={showsList}
          renderItem={renderItem}
          keyExtractor={item => item.show.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#234EB0',
    // flex: 1,
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#B656E2',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  card: {
    // height: 360,
    width: "90%",
    borderRadius: 6,
    marginVertical: 12,
    // marginHorizontal: 30,
    alignSelf: "center",
  },
  cardElevated: {
    // backgroundColor: '#FFFFFF',
    // elevation: 3,
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
  },
  ShowHeading: {
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#C0c0c0',
    borderRadius: 0.5,
  },
  ShowName: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  ShowImageSection: {},
  ShowImage: {
    height: 480,
    marginBottom: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ShowBody: {
    flex: 1,
    // flexGrow:2,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ShowRuntime: {color: 'white', fontWeight: 'bold', fontSize: 16},
  ShowRating: {color: 'white', fontWeight: 'bold', fontSize: 16},

  ShowNA: {color: 'red', fontWeight: 'bold', fontSize: 16},

  ShowDetail: {},
});

export default ShowsList;
