import { MONGO_NODE, SERVER_CONFIG } from './default';
import { Mongo } from './mongo.db';

export class Utils {
  static async mountDataBase(mongoNode?: string): Promise<void> {
    let mongoUri = '';
    switch (mongoNode) {
      case MONGO_NODE.ANALYTICS:
        mongoUri = SERVER_CONFIG.MONGO.ANALYTICS_URI;
        break;
      case MONGO_NODE.PRIMARY:
        mongoUri = SERVER_CONFIG.MONGO.URI;
        break;
      default:
        mongoUri = SERVER_CONFIG.MONGO.URI;
    }
    await Mongo.connect(mongoUri);
  }

  public async strToBoolean (str: String | string | null) : Promise<Boolean> {
      if(str?.trim() === 'true')return true;
      return false;
  }

}
