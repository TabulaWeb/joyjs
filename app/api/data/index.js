
import { defineOneEntry } from "oneentry";

const { Pages } = defineOneEntry();

export default async function handler(
    req,
    res
) {
    const request = await Pages.getPageByUrl("index", "ru_RU");
    res.status(200).json({ attributes: request.attributeValues });
}