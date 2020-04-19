import * as mongoose from 'mongoose';

export class Database {
  // tslint:disable-next-line:variable-name
  private _databaseURI: string;

  set databaseURI(value: string) {
    this._databaseURI = value;
  }

  /**
   * Attempt to connect
   */
  connect(): void {
    mongoose
      .connect(this._databaseURI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Database connection successfully established!');
      })
      .catch((error) => {
        console.log('An error occurred while establishing database connection!');
        throw error;
      });
  }
}
