import { updateRow, deleteRow } from "../../../../lib/notion";


const NotionPageCrud = async (req, res) => {
    const {
        method, query
    } = req
    console.log(method)
    let { databaseId, pageId } = query;

    switch (method) {
        case 'PATCH':
            console.log(query);
            console.log(req.body)
            const updatedPage = await updateRow(databaseId, pageId, req.body)
            console.log(updatedPage)
            res.status(200).json({ updatedPage, success: true })
            break
        case 'DELETE':
            const deletedPage = await deleteRow(databaseId, pageId)
            console.log(deletedPage)
            if (!deletedPage) {
                res.status(200).json({ message: "unable to delete", success: false })
            }
            res.status(200).json({ deletedPage, success: true })
            break
        default:
            res.setHeader('Allow', ['PATCH', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

};


export default NotionPageCrud;