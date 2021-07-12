import * as mongoose from 'mongoose';
import { MONGODB_DATABASE } from '../constants';

export const databaseProviders = [
  {
    provide: MONGODB_DATABASE,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/nest'),
  },
];
