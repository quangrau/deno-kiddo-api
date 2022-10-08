import Announcement from "../models/activity.ts";
import { IAnnouncement } from "../typings/index.ts";
import { readJson } from "../deps.ts";

class AnnouncementService {
  announcements: Array<IAnnouncement> = [];

  constructor() {
    this.loadData();
  }

  // load json data from file
  loadData = async () => {
    const dataJSON = await readJson("./data/announcements.json");
    const data = Announcement.fromJSON(dataJSON);
    this.announcements = Object.values(data);
  };

  // returns all announcements
  fetchAnnouncements = () => {
    return this.announcements;
  };
}

export default new AnnouncementService();
