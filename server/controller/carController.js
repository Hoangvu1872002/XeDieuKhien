const asyncHandler = require("express-async-handler");
const carModel = require("../models/carModel");

const getActive = asyncHandler(async (req, res) => {
  const dataActive = await carModel.findOne({});
  return res.status(200).json({
    sucess: dataActive ? true : false,
    data: dataActive ? dataActive.active : "Could not get data!",
  });
});

const updateActive = asyncHandler(async (req, res) => {
  const { active } = req.body;
  const carUpdate = await carModel.findOne({
    account: "self-propelled vehicle",
  });
  if (active && carUpdate) {
    carUpdate.active = active;
  }
 const check = await carUpdate.save();
  return res.status(200).json({
    success: check ? true : false
  })
});

module.exports = {
  getActive,
  updateActive,
};
