import React, {useState} from 'react';
import {ImageBackground, Text} from 'react-native';
import BlurryCardBackground from '../Components/BlurryCardBackground';
import H1 from '../Theme/Typography/H1';
import LocationPicker from '../Components/LocationPicker';

const HomeScreen = props => {
  const [isWhereToExpanded, setIsWhereToExpanded] = useState(false);
  return (
    <ImageBackground
      source={{uri: 'https://i.imgur.com/l7zTqzP.png'}}
      resizeMode={'cover'}
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 64,
      }}>
      <BlurryCardBackground onPress={() => setIsWhereToExpanded(true)}>
        <H1>Where to</H1>
        {isWhereToExpanded && (
          <>
            <LocationPicker />
          </>
        )}
      </BlurryCardBackground>
    </ImageBackground>
  );
};
export default HomeScreen;
