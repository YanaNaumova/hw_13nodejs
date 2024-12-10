import express from "express";
import connectDB from "./config/db.js";
import "dotenv/config";
import Magazine from "./models/Magazine.js";
import Publisher from "./models/Publisher.js";
import Article from "./models/Article.js";
import Tag from "./models/Tag.js";

const port = process.env.PORT || 3000;

const app = express();

connectDB();

const createData = async () => {
  try {
    const publisher = new Publisher({
      name: "Ivan",
      location: "Germany",
    });

    await publisher.save();

    const magazine = new Magazine({
      title: "My magazine",
      issueNumber: 2024,
      publisher: publisher,
    });

    await magazine.save();

    const article1 = new Article({
      title: "My article",
      content: "my article content",
    });

    await article1.save();

    const article2 = new Article({
      title: "My article",
      content: "my article content",
    });

    await article2.save();

    const tag1 = new Tag({
      name: "tag1",
      articles: [article1.id, article2._id],
    });

    await tag1.save();

    const tag2 = new Tag({
      name: "tag2",
      articles: [article1._id, article2._id],
    });

    await tag2.save();

    article1.tags = [tag1._id, tag2._id];
    article2.tags = [tag1._id, tag2._id];

    await article1.save();
    await article2.save();
  } catch (error) {
    console.error(error);
  }
};

createData();

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
