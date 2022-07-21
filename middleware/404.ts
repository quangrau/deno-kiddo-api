import { Context } from "../deps.ts";

const notFound = (ctx: Context) => {
  ctx.response.status = 404;
  ctx.response.body = { msg: "Not Found !!" };
};

export default notFound;
