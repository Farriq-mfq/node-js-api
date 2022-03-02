const Joi = require("joi");
module.exports = (method) => {
  switch (method) {
    case "book.create":
      return Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        cover: Joi.string().required(),
      });
    default:
      return "ok";
  }
};
