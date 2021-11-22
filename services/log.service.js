import chalk from 'chalk';
import dedent from 'dedent-js';

const { bgRed, bgGreen, bgMagenta } = chalk;

const printError = (error) => {
  console.log(bgRed(' ERROR '), error);
};

const printSuccess = (message) => {
  console.log(bgGreen(' SUCCESS '), message);
};

const printHelp = () => {
  console.log(
    dedent`${bgMagenta(' HELP ')}
      without parameters.....for printing weather
      -s [CITY]..............for setting city
      -h.....................for printing help
      -t [API_KEY]...........for setting token
    `
  );
};

export { printError, printSuccess, printHelp };
