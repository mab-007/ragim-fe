import { Request, Response } from "express";

import app from "./app";
import "./utils/default";

const PORT = process.env.PORT || 3000;

app.get("/", async (_req: Request, res: Response) => {
    res.send(`Thanks for reaching us out !!!`)
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
