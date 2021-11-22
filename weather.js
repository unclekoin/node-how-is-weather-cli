#!/usr/bin/ecv node
import { getArgs } from './helpers/args.js';
import { printError, printSuccess, printHelp } from './services/log.service.js';

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }
  if (args.s) {
    printSuccess('City');
  }
  if (args.t) {
    console.log('Token');
  }
  // Print Weather
};

initCLI();
