import {popular, latest} from '../src/api/movie';
test('popular movie list', async () => {
  const {data} = await popular(1);

  // Check if the result is an object
  expect(data).toBeInstanceOf(Object);

  // Check if the result object has the required properties
  expect(data).toHaveProperty('total_pages');
  expect(data).toHaveProperty('total_results');
  expect(data).toHaveProperty('page');
  expect(data).toHaveProperty('results');

  // Check if totalPage and page are numbers
  expect(typeof data.total_pages).toBe('number');
  expect(typeof data.total_results).toBe('number');
  expect(typeof data.page).toBe('number');

  // Check if result is an array
  expect(data.results).toBeInstanceOf(Array);

  // Add additional checks based on your requirements

  // You can also check if the result array contains objects with specific properties
  if (data.results.length > 0) {
    const movieItem = data.results[0];
    expect(movieItem).toHaveProperty('title');
    // Add more properties as needed
  }
});

test('latest movie list', async () => {
  const {data} = await latest(1);

  // Check if the result is an object
  expect(data).toBeInstanceOf(Object);

  // Check if the result object has the required properties
  expect(data).toHaveProperty('total_pages');
  expect(data).toHaveProperty('total_results');
  expect(data).toHaveProperty('page');
  expect(data).toHaveProperty('results');

  // Check if totalPage and page are numbers
  expect(typeof data.total_pages).toBe('number');
  expect(typeof data.total_results).toBe('number');
  expect(typeof data.page).toBe('number');

  // Check if result is an array
  expect(data.results).toBeInstanceOf(Array);

  // Add additional checks based on your requirements

  // You can also check if the result array contains objects with specific properties
  if (data.results.length > 0) {
    const movieItem = data.results[0];
    expect(movieItem).toHaveProperty('title');
    // Add more properties as needed
  }
});
