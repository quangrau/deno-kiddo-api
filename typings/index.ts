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
  link: string;
  date: string;
  title: string;
  description: string;
  files?: Array<IFile>;
}

export interface IFile {
  name?: string;
  url: string;
}

export interface IDocument {
  title: string;
  link: string;
}
