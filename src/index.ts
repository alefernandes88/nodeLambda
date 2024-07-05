import serverless from "serverless-http";
import app from "./config/app";

export const handler = serverless(app);
