import { RouterContext } from "../deps.ts";
import activityService from "../services/activity.ts";
import { PAGE_SIZE } from "../utils/const.ts";

// @desc    Fetch all activities
// @route   GET /v1/activities
export const getActivities = ({
  request,
  response,
}: RouterContext<"/v1/activities">) => {
  const page = request.url.searchParams.get("page") || 1;
  const pageSize = request.url.searchParams.get("pageSize") || PAGE_SIZE;
  const data = activityService.fetchActivities({
    page: Number(page),
    pageSize: Number(pageSize),
  });

  response.body = {
    data,
  };
};

// @desc    Fetch single activity
// @route   GET /v1/activities/:id
export const getActivity = ({
  params,
  response,
}: RouterContext<"/v1/activities/:id", { id: string }>) => {
  const activity = activityService.fetchActivity(params.id);

  if (activity === null) {
    response.status = 400;
    response.body = { msg: `activity with id: ${params.id} not found` };
    return;
  }

  response.status = 200;
  response.body = { data: activity };
};
