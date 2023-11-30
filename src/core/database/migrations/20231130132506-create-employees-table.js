'use strict';

const TABLE_NAME = "employees";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      company_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'companies',
          },
          key: 'id'
        },
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      dni: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        type: Sequelize.DATE,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(TABLE_NAME);
  }
};
