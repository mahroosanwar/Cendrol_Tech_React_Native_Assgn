import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';

const ShowDetails = () => {
  const selectedShow = useSelector(state => state.selectedShow);

  const summaryWithoutPTag = selectedShow.show.summary
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '');

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.ShowDetail}>
          <View style={styles.ShowImgSection}>
            <Image
              source={{
                uri: selectedShow.show.image.medium,
              }}
              style={styles.ShowImage}
            />
          </View>
          <Text style={styles.ShowName}>Name: {selectedShow?.show?.name}</Text>

          <View style={styles.ShowContent}>
            <View>
              {selectedShow.show.rating && selectedShow.show.rating.average && (
                <Text>
                  <Text style={styles.ratingText}>Rating: </Text>
                  {selectedShow.show.rating.average}
                </Text>
              )}
              <Text style={styles.ShowLanguage}>
                {selectedShow.show.language}
              </Text>
            </View>
            <View style={styles.ShowGenres}>
              {selectedShow.show.genres &&
                selectedShow.show.genres.map((genre, index) => (
                  <Text key={index} style={styles.ShowGenre}>
                    {genre}
                  </Text>
                ))}
            </View>
          </View>
          <View style={styles.ShowContent}>
            {selectedShow.show.runtime ? (
              <Text style={styles.Runtime}>
                {selectedShow.show.runtime} min
              </Text>
            ) : (
              <Text style={styles.ShowNA}>N/A</Text>
            )}
            <Text> | </Text>
            {selectedShow.show.network &&
              selectedShow.show.network.country &&
              selectedShow.show.network.country.name && (
                <Text style={styles.Country}>
                  {selectedShow.show.network.country.name}
                </Text>
              )}
            <Text> | </Text>
            {selectedShow.show.schedule &&
              selectedShow.show.schedule.days &&
              selectedShow.show.schedule.days.map(day => (
                <Text key={selectedShow.show.id} style={styles.Day}>
                  {day}
                </Text>
              ))}
          </View>
          <Button title="Book Show Ticket" />
          <View style={styles.ShowSummery}>
            <Text style={styles.SummeryHeading}>About the Show</Text>
            {selectedShow.show.summary ? (
              <Text style={styles.ShowSummeryText}>{summaryWithoutPTag}</Text>
            ) : (
              <Text>Sorry! No Summary is available for this show...</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShowDetails;

const styles = StyleSheet.create({
  ShowDetail: {},
  ShowImgSection: {},
  ShowImage: {
    height: 580,
    marginBottom: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  ShowContent: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ShowName: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#B656E2',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ratingText: {fontWeight: 'bold'},
  ShowLanguage: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10,
  },
  ShowGenres: {alignItems: 'flex-end'},
  ShowGenre: {fontWeight: 'bold'},
  Runtime: {fontWeight: 'bold'},
  Country: {fontWeight: 'bold'},
  Day: {fontWeight: 'bold'},
  SummeryHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  ShowSummery: {padding: 10},
  ShowSummeryText: {},
  ShowNA: {color: "red", fontWeight: 'bold'},
});
