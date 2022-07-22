import { RouterContext } from "../deps.ts";
import documentService from "../services/document.ts";

// @desc    Fetch all documents
// @route   GET /v1/documents
export const getDocuments = ({ response }: RouterContext<"/v1/documents">) => {
  response.body = {
    data: documentService.fetchDocuments(),
  };
};
