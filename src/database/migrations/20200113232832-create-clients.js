'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clients', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      pct_comprado: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      dat_pagamento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      num_mt4: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sen_mt4: {
        type: Sequelize.STRING,
        allowNull: false
      },
      srv_mt4: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dat_mt4: {
        type: Sequelize.DATE,
        allowNull: false
      },
      usa_servidor: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      precisa_instalar: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      op_mercado: {
        type: Sequelize.DECIMAL(16, 4),
        allowNull: false
      },
      pre_config: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      corretora: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tip_cadastro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tip_cliente: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clients');
  }
};
