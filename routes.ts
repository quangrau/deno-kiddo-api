import { Router } from "./deps.ts";
import { getActivity, getActivities } from "./controllers/activity.ts";
import { getAnnouncements } from "./controllers/announcement.ts";
import { getDocuments } from "./controllers/document.ts";

const router = new Router();
const version = "v1";

router
  .get(`/${version}/activities`, getActivities)
  .get(`/${version}/activities/:id`, getActivity)
  .get(`/${version}/announcements`, getAnnouncements)
  .get(`/${version}/documents`, getDocuments);

export default router;
