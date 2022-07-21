import { RouterContext } from "../deps.ts";
import activityService from "../services/activity.ts";

// @desc    Fetch all activities
// @route   GET /v1/activities
export const getActivities = ({
  response,
}: RouterContext<"/v1/activities">) => {
  response.body = {
    data: activityService.fetchActivities(),
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
