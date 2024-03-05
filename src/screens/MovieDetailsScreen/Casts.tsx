import React, {useCallback, useState} from 'react';
import {Dimensions, View} from 'react-native';

import CastCard from './CastCard';
import {getMovieCastByMovieId} from '../../api/movie';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';

interface CastsProps {}

export const Casts: React.FC<CastsProps> = () => {
  const [casts, setCasts] = useState();
  const {params} = useRoute();

  const callMovieCastsById = async () => {
    try {
      const fetchCasts = await getMovieCastByMovieId(params?.detailsData?.id);
      if (fetchCasts.ok) {
        setCasts(fetchCasts?.data.cast);
      } else {
        console.log(fetchCasts);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      callMovieCastsById();
    }, []),
  );
  const width = Dimensions.get('window').width;
  return (
    <View style={{flex: 1}}>
      <Carousel
        loop
        width={width}
        height={250}
        data={casts}
        scrollAnimationDuration={1000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 250,
        }}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => <CastCard data={casts && casts[index]} />}
      />
    </View>
  );
};
