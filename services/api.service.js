import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case '01':
      return '🔆'
      break;
      case '02':
        return '🌤'
      break;
      case '03':
        return '⛅️'
      break;
      case '04':
        return '⛅️'
      break;
      case '09':
        return '🌧'
      break;
      case '10':
        return '🌦'
      break;
      case '11':
        return '🌩'
        break;
        case '13':
          return '🌨'
      break;
      case '50':
        return '🌫'
        break;
    default:
      break;
  }
}

const getWeather = async () => {
  const token =
    process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));
  if (!token) {
    throw new Error('No API key is set, make it with command -t [API_KEY]');
  }

  const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
  if (!city) {
    throw new Error('No city is set, make it with command -c [CITY]');
  }

  const { data } = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        q: city,
        appid: token,
        lang: 'en',
        units: 'metric',
      },
    }
  );

  return data;
};

export { getWeather, getIcon };
