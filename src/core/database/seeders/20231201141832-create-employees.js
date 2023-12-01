'use strict';

const TABLE_NAME = 'employees';
const PAYLOADS = [
  {
    first_name: 'Roberto',
    last_name: 'Sanhueza',
    dni: '10445837-8',
    email: 'calohev_uxi7@gmail.com',
    company_id: 1,
  },
  {
    first_name: 'Karen',
    last_name: 'Araya',
    dni: '24533915-1',
    email: 'liyeluw-ulu87@mail.com',
    company_id: 2,
  },
  {
    first_name: 'Pablo',
    last_name: 'Perez',
    dni: '23392356-7',
    email: 'zojasi_yiyi72@aol.com',
    company_id: 5,
  },
  {
    first_name: 'Sabrina',
    last_name: 'Ochoa',
    dni: '18564433-2',
    email: 'fipoku-hoju45@gmail.com',
    company_id: 4,
  },
  {
    first_name: 'Lazlo',
    last_name: 'Araneda',
    dni: '8368016-4',
    email: 'cucojot_upu19@gmail.com',
    company_id: 2,
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(TABLE_NAME, PAYLOADS, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(TABLE_NAME, null, {});
  }
};
