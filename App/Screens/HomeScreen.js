import React, {useState} from 'react';
import {ImageBackground, Text} from 'react-native';
import BlurryCardBackground from '../Components/BlurryCardBackground';
import H1B from '../Theme/Typography/H1B';
import LocationPicker from '../Components/LocationPicker';
import BlackButton from '../Components/BlackButton';

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
      <BlurryCardBackground onPress={() => setIsWhereToExpanded(prev => !prev)}>
        {isWhereToExpanded ? (
          <H1B>Where to</H1B>
        ) : (
          <>
            <LocationPicker />
          </>
        )}
      </BlurryCardBackground>
      {/*<BlurryCardBackground>*/}
      {/*  <BlackButton title={'Ride Later'} style={{marginBottom: 16}} />*/}
      {/*  <BlackButton title={'Ride Now'} />*/}
      {/*</BlurryCardBackground>*/}
    </ImageBackground>
  );
};
export default HomeScreen;
