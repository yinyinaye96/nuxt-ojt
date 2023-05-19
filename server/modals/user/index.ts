import {Schema, model} from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  }
});

export default model('User', userSchema)



// const schema: mongoose.Schema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       requied: true
//     },
//     published: {
//       type: Date,
//       required: true
//     },
//     isbn: String,
//     authors: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Author'
//       }
//     ],
//     pageCount: Number
//   },
//   { timestamps: true }
// );

// export default mongoose.model('user', schema);