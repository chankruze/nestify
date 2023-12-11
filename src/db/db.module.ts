import { Global, Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Global()
@Module({
  providers: [
    {
      provide: 'MONGO_DB',
      useFactory: async () => {
        const client = new MongoClient(process.env.DATABASE_URI, {
          monitorCommands: true,
        });
        await client.connect();
        return client.db(process.env.DATABASE_NAME);
      },
    },
  ],
  exports: ['MONGO_DB'],
})
export class DbModule {}
