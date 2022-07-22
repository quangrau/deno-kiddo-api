import Annoucement from "../models/activity.ts";
import { IAnnoucement } from "../typings/index.ts";
import { readJson } from "../deps.ts";

class AnnoucementService {
  annoucements: Array<IAnnoucement> = [];

  constructor() {
    this.loadData();
  }

  // load json data from file
  loadData = async () => {
    const dataJSON = await readJson("./data/annoucements.json");
    const data = Annoucement.fromJSON(dataJSON);
    this.annoucements = Object.values(data);
  };

  // returns all annoucements
  fetchAnnoucements = () => {
    return this.annoucements;
  };
}

export default new AnnoucementService();
