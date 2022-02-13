import { NotionDB } from "notiondb"
import { NotionId } from "notiondb/models"


const notionDB = new NotionDB(process.env.NOTION_SECRET_KEY);

async function getAllTables() {
    try {
        const databases = await notionDB.databases.getAll();
        return databases;
    } catch (error) {
        console.log(error)
        return null;
    }

}
async function getDatabase(databaseId) {

    try {
        const ndatabaseId = new NotionId(databaseId);
        const database = await notionDB.databases.get(ndatabaseId);
        return database;
    } catch (error) {
        console.log(error)
        return null;
    }

}

async function getAllRows(databaseId) {
    try {

        const ndatabaseId = new NotionId(databaseId);
        const database = await notionDB.databases.get(ndatabaseId);
        console.log(database.object)
        const pages = await database.pages.getAll();
        // console.log(pages.map((p) => p.object));

        // console.log(response)
        return pages;
    } catch (error) {
        console.log(error)
        return null;
    }

}


async function createRow(databaseId, properties) {
    try {
        const ndatabaseId = new NotionId(databaseId);
        const database = await notionDB.databases.get(ndatabaseId);

        const newPage = await database.pages.create(properties);
        return newPage.object;
    } catch (error) {
        console.log(error)
        return null;
    }

}


async function updateRow(databaseId, pageId, properties) {
    try {
        const ndatabaseId = new NotionId(databaseId);
        const database = await notionDB.databases.get(ndatabaseId);
        const id = new NotionId(pageId);
        const updatedPage = await database.pages.update(id, properties);
        // console.log(updatedPage)
        return updatedPage.object;
    } catch (error) {
        console.log(error)
        return null;
    }

}

async function deleteRow(databaseId, pageId) {
    try {
        const ndatabaseId = new NotionId(databaseId);
        const database = await notionDB.databases.get(ndatabaseId);
        const id = new NotionId(pageId);
        const deletedPage = await database.pages.delete(id);
        // console.log(updatedPage)
        return deletedPage.object;
    } catch (error) {
        console.log(error)
        return null;
    }

}


export { getAllTables, getAllRows, updateRow, getDatabase, createRow, deleteRow }