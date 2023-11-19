const asyncHandler = require("express-async-handler");
const parameterModel = require("../models//parameterModel");

const updateParameter = asyncHandler(async (req, res) => {
  const parameters = req.body;
  const carName = await parameterModel.findOne({ carName: "bugnef" });
  const carUpdate = await parameterModel.findByIdAndUpdate(
    carName._id,
    {
      $push: { Parameter: parameters },
    },
    { new: true }
  );
  return res.status(200).json({
    success: carUpdate ? true : false,
  });
});

const getParameter = asyncHandler(async (req, res) => {
  const dataParameter = await parameterModel.findOne({ carName: "bugnef" });
  return res.status(200).json({
    sucess: dataParameter ? true : false,
    data: dataParameter ? dataParameter.Parameter : "Could not get data!",
  });
});

const deleteParameter = asyncHandler(async (req, res) => {
  const deleteParameter = await parameterModel.findOneAndUpdate(
    { carName: "bugnef" },
    { Parameter: [] },
    { new: true }
  );
  return res.status(200).json({
    sucess: deleteParameter ? true : false,
    data: deleteParameter ? deleteParameter.Parameter : "Could not get data!",
  });
});

module.exports = {
  updateParameter,
  getParameter,
  deleteParameter,
};
