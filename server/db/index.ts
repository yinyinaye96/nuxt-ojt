import mongoose from 'mongoose';
import { Nitro } from 'nitropack';

export default (_nitroApp: Nitro) => {
  const config = useRuntimeConfig();
  console.log(config.MONGO_URI);
  mongoose.connect(config.MONGO_URI)
    .then(() => console.log('Connected to DB from server'))
    .catch(() => console.log("can't conntected to DB from server"));
};