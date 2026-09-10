import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export default async function handler(req, res) {
  try {
    const artistDatabase = await notion.databases.retrieve({
      database_id: process.env.NOTION_ARTIST_DB_ID,
    });

    const newsDatabase = await notion.databases.retrieve({
      database_id: process.env.NOTION_NEWS_DB_ID,
    });

    res.status(200).json({
      artist: {
        database_id: artistDatabase.id,
        data_sources: artistDatabase.data_sources || [],
      },

      news: {
        database_id: newsDatabase.id,
        data_sources: newsDatabase.data_sources || [],
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
      code: error.code || '',
    });
  }
}
