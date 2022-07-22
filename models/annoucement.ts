import { IAnnoucement, IFile } from "../typings/index.ts";

class Annoucement implements IAnnoucement {
  id: string;
  link: string;
  date: string;
  title: string;
  description: string;
  files?: Array<IFile>;

  constructor({
    id,
    link,
    title,
    date,
    description,
    files,
  }: {
    id: string;
    link: string;
    title: string;
    date: string;
    description: string;
    files: Array<IFile>;
  }) {
    this.id = id;
    this.link = link;
    this.title = title;
    this.date = date;
    this.description = description;
    this.files = files;
  }

  toJSON(): IAnnoucement {
    return Object.assign({}, this);
  }

  static fromJSON(json: unknown): Annoucement {
    if (typeof json === "string") {
      return JSON.parse(json, Annoucement.reviver);
    }

    const activity = Object.create(Annoucement.prototype);
    return Object.assign(activity, json);
  }

  static reviver(key: string, value: unknown): unknown {
    return key === "" ? Annoucement.fromJSON(value) : value;
  }
}

export default Annoucement;
