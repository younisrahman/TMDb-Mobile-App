import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {MovieCard} from '@components';
import {useDispatch} from 'react-redux';
import {Loader} from '@common';
import {
  fetchPopularMovies,
  incrementPage,
} from '../feature/movie/popularMovielist';

import {hp, wp} from '@utils';
import {Colors} from '@config';
import {useFocusEffect} from '@react-navigation/native';
import {useAppSelector} from '@store';

const PopularMovieScreen = React.memo(() => {
  const [lodeMoreLoader, setLodeMoreLoader] = useState(false);
  const dispatch = useDispatch();
  const {isLoading, movieList, currentPage, totalPage} = useAppSelector(
    state => state.popular,
  );

  const callPopularMovieList = async () => {
    if (currentPage < totalPage) {
      const page = currentPage;
      dispatch(incrementPage(page + 1));
      await dispatch(fetchPopularMovies(page));
      setLodeMoreLoader(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (currentPage === 1) {
        callPopularMovieList();
      }
    }, []),
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      {isLoading && <Loader />}
      <FlatList
        data={movieList}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={({id}, index) => String(id) + 'popular' + String(index)}
        onEndReached={() => {
          if (!lodeMoreLoader) {
            setLodeMoreLoader(true);
            callPopularMovieList();
          }
        }}
        onEndReachedThreshold={0.1}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <MovieCard
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

export default PopularMovieScreen;
