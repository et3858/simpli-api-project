'use strict';

const fs = require('fs');

const TABLE_NAME = 'companies';

function getData() {
  try {
    const payloads = fs.readFileSync('src/core/database/data/companies.json');

    return JSON.parse(payloads);
  } catch (err) {
    console.log(err);
  }
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const payloads = getData();
    await queryInterface.bulkInsert(TABLE_NAME, payloads, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(TABLE_NAME, null, {});
  }
};
