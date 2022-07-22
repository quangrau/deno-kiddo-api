import { RouterContext } from "../deps.ts";
import annoucementService from "../services/annoucement.ts";

// @desc    Fetch all annoucements
// @route   GET /v1/annoucements
export const getAnnoucements = ({
  response,
}: RouterContext<"/v1/annoucements">) => {
  response.body = {
    data: annoucementService.fetchAnnoucements(),
  };
};
