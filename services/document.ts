import Document from "../models/document.ts";
import { IDocument } from "../typings/index.ts";
import { readJson } from "../deps.ts";

class DocumentService {
  documents: Array<IDocument> = [];

  constructor() {
    this.loadData();
  }

  // load json data from file
  loadData = async () => {
    const dataJSON = await readJson("./data/documents.json");
    const data = Document.fromJSON(dataJSON);
    this.documents = Object.values(data);
  };

  // returns all documents
  fetchDocuments = () => {
    return this.documents;
  };
}

export default new DocumentService();
