import { getAllTables } from "../../../lib/notion";


export default async (req, res) => {
  const databases = await getAllTables()
  if (databases.length == 0) {
    res.status(404);
    res.json({ data: [], message: "error no tables found. please check if database is shared to the integration", });
  }
  const tableList = databases.map((database) => {
    return {
      id: database.object.id,
      title: database.object.title
    }
  })

  res.status(200);
  res.json({ data: tableList, message: "ok" });
};