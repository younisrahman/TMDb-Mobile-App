import {getMovieCastByMovieId, getDetailsByMovieId} from '../src/api/movie';
test('Get Details By MovieId', async () => {
  const {data} = await getDetailsByMovieId(693134);

  // Check if the result is an object
  expect(data).toBeInstanceOf(Object);

  // Check if the result object has the required properties
  expect(data).toHaveProperty('id');
  expect(data).toHaveProperty('title');
  expect(data).toHaveProperty('overview');
  expect(data).toHaveProperty('release_date');
  expect(data).toHaveProperty('popularity');
  expect(data).toHaveProperty('vote_average');
  expect(data).toHaveProperty('vote_count');
  expect(data).toHaveProperty('genres');
  expect(data).toHaveProperty('production_companies');
  expect(data).toHaveProperty('production_countries');
  expect(data).toHaveProperty('spoken_languages');

  // Check specific properties with their types and values
  expect(typeof data.id).toBe('number');
  expect(typeof data.title).toBe('string');
  expect(typeof data.overview).toBe('string');
  expect(typeof data.release_date).toBe('string'); // Adjust as needed
  expect(typeof data.popularity).toBe('number');
  expect(typeof data.vote_average).toBe('number');
  expect(typeof data.vote_count).toBe('number');
  expect(data.genres).toBeInstanceOf(Array);
  expect(data.production_companies).toBeInstanceOf(Array);
  expect(data.production_countries).toBeInstanceOf(Array);
  expect(data.spoken_languages).toBeInstanceOf(Array);

  // Add additional checks based on your requirements

  // You can also check if the arrays contain objects with specific properties
  if (data.genres.length > 0) {
    const genre = data.genres[0];
    expect(genre).toHaveProperty('id');
    expect(genre).toHaveProperty('name');
    // Add more properties as needed
  }
});

test('get Movie Cast By MovieId', async () => {
  const {data} = await getMovieCastByMovieId(693134);

  // Check if the result is an object
  expect(data).toBeInstanceOf(Object);

  // Check if the result object has the required properties
  expect(data).toHaveProperty('cast');
  expect(data).toHaveProperty('crew');

  // Check if cast and crew are arrays
  expect(data.cast).toBeInstanceOf(Array);
  expect(data.crew).toBeInstanceOf(Array);

  // Add additional checks based on your requirements

  // You can also check if the arrays contain objects with specific properties
  if (data.cast.length > 0) {
    const castMember = data.cast[0];
    expect(castMember).toHaveProperty('id');
    expect(castMember).toHaveProperty('name');
    expect(castMember).toHaveProperty('character');
    // Add more properties as needed
  }

  // Similarly, you can check crew members
  if (data.crew.length > 0) {
    const crewMember = data.crew[0];
    expect(crewMember).toHaveProperty('id');
    expect(crewMember).toHaveProperty('name');
    expect(crewMember).toHaveProperty('department');
    // Add more properties as needed
  }
});
