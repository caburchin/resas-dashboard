import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

import { Endpoints } from './constants';
import dummyResponse from './fixtures/prefectures';
import { fetchPrefectures } from './prefectures';

const server = setupServer(
  http.get(Endpoints.prefectures, () => {
    return HttpResponse.json(dummyResponse);
  }),
);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('fetchPrefectures', () => {
  test('Normal: Ability to parse dummyJson returned from the API', async () => {
    const res = await fetchPrefectures();
    expect(res).toEqual(dummyResponse.result);
  });
});
