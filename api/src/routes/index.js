const { Router } = require("express");
const router = Router();

const Pet = require("./Mascota-routes");
const Vaccines = require("./Vaccines-routes");
const Diaseases = require("./Diseases-routes");
const Location = require("./Location-routes");

router.use("/pets", Pet);
router.use("/vaccines", Vaccines);
router.use("/diseases", Diaseases);
router.use("/locations", Location);

module.exports = router;
