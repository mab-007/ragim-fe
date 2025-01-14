import dotenv from 'dotenv';

// load the environment variables from the .env file
if (process.env.ENV === 'local') {
  dotenv.config({
    path: `${process.cwd()}/local.env`,
  });
} else {
  dotenv.config();
}

export enum SERVER_ENV {
  PRODUCTION = 'production',
  TEST = 'test',
  DEV = 'development',
  LOCAL = 'local',
}

export const MONGO_NODE = {
  ANALYTICS: 'ANALYTICS',
  PRIMARY: 'PRIMARY',
};

export const SERVER_CONFIG = {
  MONGO: {
    URI: process.env.MONGO_URI as string,
    ANALYTICS_URI: process.env.MONGO_URI as string,
  },
  REQUEST_SECRET_KEY : process.env.REQUEST_SECRET_KEY as string
};
