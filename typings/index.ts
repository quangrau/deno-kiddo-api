export interface IActivity {
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
}

export interface IStudent {
  id: string;
  name: string;
}

export interface IAnnouncement {
  id: string;
  date: string;
  title: string;
  description: string;
  link: string;
}
