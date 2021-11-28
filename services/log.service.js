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
      -c [CITY]..............for setting city
      -h.....................for printing help
      -t [API_KEY]...........for setting token
      OpenWeather: https://openweathermap.org/
    `
  );
};

const printWeather = (res, icon) => {
  console.log(dedent`${bgMagenta(' WEATHER ')} ${res.name} ${new Date(Date.now()).toLocaleDateString()}
  ${icon} ${res.weather[0].description}
    temperature: ${Math.round(res.main.temp)}°C
    humidity: ${res.main.humidity}%
    wind speed: ${res.wind.speed} 
    `);
};

export { printError, printSuccess, printHelp, printWeather };
