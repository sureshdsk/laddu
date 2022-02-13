import { Client, APIErrorCode } from "@notionhq/client"
import { NotionDB } from "notiondb"
import { NotionId } from "notiondb/models"

const notion = new Client({
    auth: process.env.NOTION_SECRET_KEY,
})

const notionDB = new NotionDB(process.env.NOTION_SECRET_KEY);

async function getAllTables() {
    // Initializing a client
    // const notion = new Client({
    //     auth: process.env.NOTION_SECRET_KEY,
    // })
    try {
        // const response = await notion.search({
        //     filter: {
        //         property: "object",
        //         value: "database"
        //     }
        // });

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

        // const response = await notion.databases.retrieve({
        //     database_id: databaseId,
        // })
        // console.log(response)
        return database;
    } catch (error) {
        console.log(error)
        return null;
    }

}

async function getAllRows(databaseId) {
    // Initializing a client
    // const notion = new Client({
    //     auth: process.env.NOTION_SECRET_KEY,
    // })
    try {
        // const response = await notion.databases.query({
        //     database_id: databaseId, //"d5c4571ecf91414e9642f5d9f8ee86af",
        //     // filter: {  
        //     //   property: "Landmark",
        //     //   text: {
        //     //     contains: "Bridge",
        //     //   },
        //     // },
        // })

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
    // Initializing a client
    // const notion = new Client({
    //     auth: process.env.NOTION_SECRET_KEY,
    // })
    try {
        // const response = await notion.pages.update({
        //     page_id: pageId,
        //     properties: properties
        // });
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
    // Initializing a client
    // const notion = new Client({
    //     auth: process.env.NOTION_SECRET_KEY,
    // })
    try {
        // const response = await notion.pages.update({
        //     page_id: pageId,
        //     properties: properties
        // });
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
    // Initializing a client
    // const notion = new Client({
    //     auth: process.env.NOTION_SECRET_KEY,
    // })
    try {
        // const response = await notion.pages.update({
        //     page_id: pageId,
        //     properties: properties
        // });
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