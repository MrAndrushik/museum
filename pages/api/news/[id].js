import news from "../../../public/data/news/news.json";
export default function handler(req, res) {
    res.status(200).json(
        news.filter((item) => item.id.toString() === req.query.id)
    );
}
