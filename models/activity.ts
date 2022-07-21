import { IActivity, IStudent } from "../typings/index.ts";

class Activity implements IActivity {
  id: string;
  link: string;
  title: string;
  date: string;
  classname: string;
  classroom: string;
  description: string;
  teachers: Array<string>;
  students: Array<IStudent>;
  photos: Array<string>;

  constructor({
    id,
    link,
    title,
    date,
    classname,
    classroom,
    description,
    teachers,
    students,
    photos,
  }: {
    id: string;
    link: string;
    title: string;
    date: string;
    classname: string;
    classroom: string;
    description: string;
    teachers: Array<string>;
    students: Array<IStudent>;
    photos: Array<string>;
  }) {
    this.id = id;
    this.link = link;
    this.title = title;
    this.date = date;
    this.classname = classname;
    this.classroom = classroom;
    this.description = description;
    this.teachers = teachers;
    this.students = students;
    this.photos = photos;
  }

  toJSON(): IActivity {
    return Object.assign({}, this);
  }

  static fromJSON(json: unknown): Activity {
    if (typeof json === "string") {
      return JSON.parse(json, Activity.reviver);
    }

    const activity = Object.create(Activity.prototype);
    return Object.assign(activity, json);
  }

  static reviver(key: string, value: unknown): unknown {
    return key === "" ? Activity.fromJSON(value) : value;
  }
}

export default Activity;
