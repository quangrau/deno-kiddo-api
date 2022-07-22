import { Router } from "./deps.ts";
import { getActivity, getActivities } from "./controllers/activity.ts";
import { getAnnoucements } from "./controllers/annoucement.ts";
import { getDocuments } from "./controllers/document.ts";

const router = new Router();
const version = "v1";

router
  .get(`/${version}/activities`, getActivities)
  .get(`/${version}/activities/:id`, getActivity)
  .get(`/${version}/annoucements`, getAnnoucements)
  .get(`/${version}/documents`, getDocuments);

export default router;
