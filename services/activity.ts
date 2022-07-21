import Activity from "../models/activity.ts";
import { IActivity } from "../typings/index.ts";
import { readJson } from "../deps.ts";

class ActivityService {
  activities: Array<IActivity> = [];

  constructor() {
    this.loadData();
  }

  // load json data from file
  loadData = async () => {
    const dataJSON = await readJson("./data/activities.json");
    const data = Activity.fromJSON(dataJSON);
    this.activities = Object.values(data);
  };

  // returns all activities
  fetchActivities = () => {
    return this.activities;
  };

  fetchActivity = (id: string) => {
    const result = this.activities.find((activity) => activity.id === id);
    return result;
  };
}

export default new ActivityService();
