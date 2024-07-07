const sequelize = require('../config/connection');
const { Post } = require('../models');

const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const post of postData) {
    await post.create({
      ...post //change if needed
    });
  }

  process.exit(0);
};

//seedDatabase();
//for safety 
