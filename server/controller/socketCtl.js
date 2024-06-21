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
        // console.log(data);
        // console.log(typeof data);
        // console.log(data.active);
        // console.log(active);
        const carUpdate = await carModel.findOne({
          account: "self-propelled vehicle",
        });
        if (active && carUpdate) {
          carUpdate.active = active;
        } else {
          console.log("error1");
        }
        const response = await carUpdate.save();
        if (response) {
          const dataActive = await carModel.findOne({});
          io.of("/car-active").emit("updated-active", dataActive.active);
        } else {
          // return res.status(400).json({
          //   success: false,
          // });
          console.log("error2");
        }
      } catch (error) {
        console.error("Error saving socket ID:", error);
        // return res.status(400).json({
        //   success: false,
        // });
        console.log("error3");
      }
    });

    socket.on("update-parameters", async (data) => {
      try {
        console.log(data);
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
          // return res.status(400).json({
          //   success: false,
          // });
          console.log("error");
        }
      } catch (error) {
        console.error("Error saving socket ID:", error);
        // return res.status(400).json({
        //   success: false,
        // });
        console.log("error");
      }
    });
  });
};
