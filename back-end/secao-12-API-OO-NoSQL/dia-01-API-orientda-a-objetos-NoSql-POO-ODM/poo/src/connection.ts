import { connect } from "mongoose";

const options = {
  user: 'bruno',
  pass: 'Br120800',
  dbName: 'trixDB',
};

connect('mongodb://localhost:27017', options);