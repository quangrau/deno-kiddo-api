import { IDocument } from "../typings/index.ts";

class Document implements IDocument {
  title: string;
  link: string;

  constructor({ title, link }: { title: string; link: string }) {
    this.title = title;
    this.link = link;
  }

  toJSON(): IDocument {
    return Object.assign({}, this);
  }

  static fromJSON(json: unknown): Document {
    if (typeof json === "string") {
      return JSON.parse(json, Document.reviver);
    }

    const activity = Object.create(Document.prototype);
    return Object.assign(activity, json);
  }

  static reviver(key: string, value: unknown): unknown {
    return key === "" ? Document.fromJSON(value) : value;
  }
}

export default Document;
