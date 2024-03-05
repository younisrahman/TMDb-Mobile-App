import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {LetestMovieScreenNavigationProps} from 'types';
import {MovieCard} from '@components';
import {useDispatch} from 'react-redux';
import {Loader} from '@common';
import {
  fetchLatestMovies,
  incrementLatestPage,
} from '../feature/movie/letestMovieList';
import {hp, wp} from '@utils';
import {useAppSelector} from '@store';
import {useFocusEffect} from '@react-navigation/native';
import {Colors} from '@config';

const LatestMovieScreen = React.memo(({}: LetestMovieScreenNavigationProps) => {
  const [lodeMoreLoader, setLodeMoreLoader] = useState(false);

  const dispatch = useDispatch();
  const {isLoading, movieList, currentPage, totalPage} = useAppSelector(
    state => state.latest,
  );

  const callLatestMovieList = async () => {
    if (currentPage < totalPage) {
      const page = currentPage;
      dispatch(incrementLatestPage(page + 1));
      await dispatch(fetchLatestMovies(page));
      setLodeMoreLoader(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (currentPage === 1) {
        callLatestMovieList();
      }
    }, []),
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      {isLoading && <Loader />}
      <FlatList
        data={movieList}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={({id}, index) => String(id) + 'latest' + String(index)}
        onEndReached={() => {
          if (!lodeMoreLoader) {
            setLodeMoreLoader(true);
            callLatestMovieList();
          }
        }}
        onEndReachedThreshold={0.1}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <MovieCard
              key={item.id}
              title={item.original_title}
              release_date={item.release_date}
              poster_path={item.poster_path}
              detailsData={item}
            />
          );
        }}
      />
      {lodeMoreLoader && (
        <ActivityIndicator size={'large'} color={Colors.primary} />
      )}
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    width: wp(100),
    alignItems: 'center',
    marginTop: hp(2),
  },
});

export default LatestMovieScreen;
