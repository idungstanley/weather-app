import { rest } from 'msw';

const handlers = [
  rest.get('/air_pollution/', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      coord: { lon: 89, lat: 45 },
      list: [
        {
          main: { aqi: 4 },
          components: {
            co: 181.91,
            no: 0.02,
            no2: 0.41,
            o3: 111.58,
            so2: 0.67,
            pm2_5: 15.34,
            pm10: 50.35,
            nh3: 0.52,
          },
          dt: 1656666000,
        },
      ],
    }),
  )),
];

export const mockRegionApi = [
  rest.get('/region/africa', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      {
        flags: {
          png: 'https://flagcdn.com/w320/re.png',
        },
        name: {
          common: 'Réunion',
        },
        ccn3: '638',
        latlng: [-21.15, 55.5],
      },
      {
        flags: {
          svg: 'https://flagcdn.com/w320/bw.png',
        },
        name: 'Botswana',
        latlng: [-22, 24],
      },
    ]),
  )),
];

export default handlers;
