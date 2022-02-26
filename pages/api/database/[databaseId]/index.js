import { getAllRows, createRow } from "../../../../lib/notion";

export default async (req, res) => {
    const {
        method, query
    } = req
    console.log(method)
    let { databaseId } = query;
    console.log(databaseId, query)
    switch (method) {
        case 'GET':
            const pages = await getAllRows(databaseId)
            console.log(pages)
            const rows = pages.map((p) => {
                console.log(p.object);
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
            console.log(query);
            console.log(req.body)
            const newPage = await createRow(databaseId, req.body)
            console.log(newPage)
            res.status(200).json({ newPage, success: true })
            break

        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

};
