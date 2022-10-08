import { RouterContext } from "../deps.ts";
import announcementService from "../services/announcement.ts";

// @desc    Fetch all announcements
// @route   GET /v1/announcements
export const getAnnouncements = ({
  response,
}: RouterContext<"/v1/announcements">) => {
  response.body = {
    data: announcementService.fetchAnnouncements(),
  };
};
