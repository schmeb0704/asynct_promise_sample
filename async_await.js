const myfuncs = require("./promises");

const damageApply = async () => {
  try {
    const data = await myfuncs.applyDamage(20, 5);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

damageApply();
