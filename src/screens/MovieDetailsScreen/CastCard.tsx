import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {wp} from '@utils';
import {FontFamily} from '@config';

interface CastCardProps {
  data?: {
    profile_path?: string;
    original_name?: string;
    character?: string;
  };
}

const CastCard: React.FC<CastCardProps> = ({data}) => {
  const imageUrl = data?.profile_path
    ? `https://www.themoviedb.org/t/p/w150_and_h150_bestv2/${data?.profile_path}`
    : 'https://bitsofco.de/content/images/2018/12/broken-1.png';

  return (
    <View style={styles.pageContainer}>
      <Image
        source={{uri: imageUrl}}
        style={styles.posterImsgeStyle}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.nameText}>
          {data?.original_name}
        </Text>
        <Text numberOfLines={2}>{data?.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    height: 250,
    width: 150,
    alignItems: 'flex-start',
    borderRadius: wp(2),
    backgroundColor: '#fff',
    marginLeft: '31%',
  },
  posterImsgeStyle: {
    height: 150,
    width: 150,
    borderTopLeftRadius: wp(2),
    borderTopRightRadius: wp(2),
  },
  textContainer: {
    padding: 10,
  },
  nameText: {
    width: 140,
    fontSize: 18,
    fontFamily: FontFamily.SourceSansB,
  },
  characterText: {
    width: 140,
    fontSize: 12,
    fontFamily: FontFamily.SourceSansR,
  },
});

export default CastCard;
