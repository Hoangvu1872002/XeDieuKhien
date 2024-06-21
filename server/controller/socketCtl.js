const carModel = require("../models/carModel");

const parameterModel = require("../models/parameterModel");

module.exports = function (io) {
  io.of("/car-active").on("connection", (socket) => {
    // console.log("New client connected: " + socket.id);

    // socket.on("update-status-order", async (data) => {
    //   try {
    //     const { _id, status } = data;

    //     const response = await orderModel.findByIdAndUpdate(
    //       _id,
    //       {
    //         status,
    //       },
    //       { new: true }
    //     );

    //     if (response) {
    //       io.of("/orderStatus").emit("updatedStatus", response);
    //     }
    //   } catch (err) {
    //     console.error("Error saving socket ID:", err);
    //   }
    // });

    socket.on("update-active", async (data) => {
      try {
        const { active } = data;
        const carUpdate = await carModel.findOne({
          account: "self-propelled vehicle",
        });
        if (active && carUpdate) {
          carUpdate.active = active;
        }
        const response = await carUpdate.save();
        if (response) {
          const dataActive = await carModel.findOne({});
          io.of("/car-active").emit("updated-active", dataActive.active);
        } else {
          return res.status(400).json({
            success: false,
          });
        }
      } catch (error) {
        console.error("Error saving socket ID:", error);
        return res.status(400).json({
          success: false,
        });
      }
    });

    socket.on("update-parameters", async (data) => {
      try {
        const parameters = data;
        const carName = await parameterModel.findOne({ carName: "bugnef" });
        if (carModel) {
          const response = await parameterModel.findByIdAndUpdate(
            carName._id,
            {
              $push: { Parameter: parameters },
            },
            { new: true }
          );
          if (response) {
            const dataParameter = await parameterModel.findOne({
              carName: "bugnef",
            });
            io.of("/car-active").emit(
              "updated-parameters",
              dataParameter.Parameter
            );
          }
        } else {
          return res.status(400).json({
            success: false,
          });
        }
      } catch (error) {
        console.error("Error saving socket ID:", error);
        return res.status(400).json({
          success: false,
        });
      }
    });
  });
};
