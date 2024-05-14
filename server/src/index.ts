import axios from "axios";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { processData } from "./utils/utils";
import pino from "pino";


const app: Express = express();
app.use(helmet());

const logger = pino()

const port = process.env.PORT || 5000;
const url = process.env.contentUrl || 'https://stoplight.io/mocks/engine/fullstack-spec/52502230/content'

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json('Backend connected');

});

// cors allow for all only for this route, we can better configurate this to only allow certain host.
app.get('/api/content', cors(), async (req: Request, res: Response) => {
  try {
    const response = await axios.get(url);
    const normalizeData = processData(response.data);
    res.status(200).json(normalizeData);

  } catch (error) {
    logger.error(error)

    res.status(500).json({ message: 'Error fetching data from API' });
  }

})

app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`)
});
