import { Router } from "./deps.ts";
import { getActivity, getActivities } from "./controllers/activity.ts";

const router = new Router();
const version = "v1";

router
  .get(`/${version}/activities`, getActivities)
  .get(`/${version}/activities/:id`, getActivity);
// .post("/api/v1/advertisements", addAdvertisement)
// .put("/api/v1/advertisements/:id", updateAdvertisement)
// .put("/api/v1/advertisements/publish", publishAdvertisement)
// .delete("/api/v1/advertisements/:id", deleteAdvertisement);

export default router;
