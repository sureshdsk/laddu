import { getDatabase, getAllRows, createRow } from "../../../../lib/notion";


const NotionDbCrud = async (req, res) => {
    const {
        method, query
    } = req
    let { databaseId } = query;

    switch (method) {
        case 'GET':
            const db = await getDatabase(databaseId)
            if (!db) {
                res.status(404);
                res.json({ data: [], status: "error", message: "database not found" });
                break
            }
            const pages = await getAllRows(databaseId)
            const rows = pages.map((p) => {
                return {
                    id: p.object.id,
                    createdTime: p.object.createdTime,
                    lastEditedTime: p.object.lastEditedTime,
                    ...p.object.properties
                }
            })

            res.status(200);
            res.json({ data: rows, message: "ok" });
            break
        case 'PUT':
            const newPage = await createRow(databaseId, req.body)
            console.log(newPage)
            res.status(200).json({ newPage, success: true })
            break

        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

};

export default NotionDbCrud;