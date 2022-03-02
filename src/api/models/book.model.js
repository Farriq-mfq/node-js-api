module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      cover: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  return mongoose.model("book", schema);
};
