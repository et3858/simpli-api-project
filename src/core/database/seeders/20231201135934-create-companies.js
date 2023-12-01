'use strict';

const TABLE_NAME = 'companies';
const PAYLOADS = [
  {
    name: 'Central SpA.',
    dni: '22599907-4',
    address: 'Calle Ignacio Carrera 1480, Santiago, Región Metropolitana',
    phone_number: '+56613979869',
  },
  {
    name: 'El Porteno SpA.',
    dni: '12376402-1',
    address: 'Paseo Los Almendros 92, Valparaiso, Valparaiso',
    phone_number: '+56612118846',
  },
  {
    name: 'Sociedad de alimentos Bío Bío Ltda.',
    dni: '15897820-2',
    address: 'Avenida Los Pioneros 355, Concepción, Bío Bío',
    phone_number: '+56619889559',
  },
  {
    name: 'Minera Oculta SpA.',
    dni: '19473599-5',
    address: 'Calle Las Rosas 780, Antofagasta, Antofagasta',
    phone_number: '+56615943627',
  },
  {
    name: 'Copa del Arbol Ltda.',
    dni: '14128328-6',
    address: 'Paseo Los Cerezos 65, Punta Arenas, Magallanes y de la Antártica Chilena',
    phone_number: '+56612034211',
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
