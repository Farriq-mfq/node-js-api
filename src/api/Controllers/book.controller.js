// Create 💚
// Read 💚
// Update 💚
// Delete 💚
// Read by id
const Validation = require("../Validations");
const Response = require("../Response");
const db = require("../models");
async function CreateBook(req, res) {
  try {
    const result = await Validation("book.create").validateAsync(req.body);
    const Insert = await db.book(result).save();
    if (Insert) {
      return Response(res, "success create book", 200);
    }
    return Response(res, "we have any error", 500);
  } catch (err) {
    err.isJoi
      ? Response(res, "input error", 400, err.details)
      : Response(res, "internal server error", 500);
  }
}
async function ReadBook(req, res) {
  try {
    const getAll = await db.book.find();
    if (getAll.length) {
      return Response(res, "success get all data book", 200, getAll);
    }
    return Response(res, "data book is empty", 200);
  } catch (err) {
    return Response(res, "internal server error", 500);
  }
}
async function UpdateBook(req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      return Response(res, "params id is null", 400);
    }
    const result = await Validation("book.create").validateAsync(req.body);
    const Update = await db.book.updateOne(
      { _id: id },
      {
        $set: {
          title: result.title,
          description: result.description,
          cover: result.description,
        },
      }
    );
    if (Update) {
      return Response(res, "success update book", 200);
    }
    return Response(res, "we have any error", 500);
  } catch (err) {
    err.isJoi
      ? Response(res, "input error", 400, err.details)
      : Response(res, "internal server error", 500);
  }
}
async function DeleteBook(req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      return Response(res, "params id is null", 400);
    }
    const Delete = await db.book.deleteOne({ _id: id });
    if (Delete) {
      return Response(res, "success delete book", 200);
    }
    return Response(res, "failed delete book", 500);
  } catch (err) {
    return Response(res, "internal server error", 500);
  }
}
async function ReadByid(req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      return Response(res, "params id is null", 400);
    }
    const GetByid = await db.book.findOne({ _id: id });
    if (GetByid) {
      return Response(res, "success get details book", 200, GetByid);
    }
    return Response(res, "failed get details book", 500);
  } catch (err) {
    return Response(res, "internal server error", 500);
  }
}
module.exports = {
  CreateBook,
  ReadBook,
  UpdateBook,
  DeleteBook,
  ReadByid,
};
