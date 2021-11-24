#!/usr/bin/ecv node
import { getArgs } from './helpers/args.js';
import { printError, printSuccess, printHelp } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('Token not found');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    console.log(token)
    printSuccess('Token is saved');
  } catch (e) {
    printError(e.message);
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }
  if (args.s) {
  }
  if (args.t) {
    return saveToken(args.t);
  }

  getWeather('london');
  // Print Weather
};

initCLI();
