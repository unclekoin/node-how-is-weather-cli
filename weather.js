#!/usr/bin/ecv node
import { getArgs } from './helpers/args.js';
import { printError, printSuccess, printHelp, printWeather } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getWeather, getIcon } from './services/api.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('Token not found');
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Token is saved');
  } catch (error) {
    printError(error.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError('City not found');
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city.toLowerCase());
    printSuccess('City is saved');
  } catch (error) {
    printError(error.message);
  }
};

const getForecast = async () => {
  try {
    const data = await getWeather();
    printWeather(data, getIcon(data.weather[0].icon));
  } catch (error) {
    if (error?.response?.status === 404) {
      printError('The city is specified incorrectly');
    } else if (error?.response?.status === 401) {
      printError('The token is specified incorrectly');
    } else {
      printError(error.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }
  if (args.c) {
    return saveCity(args.c)
  }
  if (args.t) {
    return saveToken(args.t);
  }

  return getForecast();
};

initCLI();
