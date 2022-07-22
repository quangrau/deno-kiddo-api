import Activity from "../models/activity.ts";
import { IActivity } from "../typings/index.ts";
import { readJson } from "../deps.ts";
import { PAGE_SIZE } from "../utils/const.ts";

type TOptions = {
  page?: number;
  pageSize?: number;
};

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
  fetchActivities = ({ page = 1, pageSize = PAGE_SIZE }: TOptions) => {
    return this.activities.slice((page - 1) * pageSize, page * pageSize);
  };

  fetchActivity = (id: string) => {
    const result = this.activities.find((activity) => activity.id === id);
    return result;
  };
}

export default new ActivityService();
