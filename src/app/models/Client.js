module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    pct_comprado: DataTypes.STRING,
    dat_pagamento: DataTypes.DATE,
    num_mt4: DataTypes.INTEGER,
    sen_mt4: DataTypes.STRING,
    srv_mt4: DataTypes.STRING,
    dat_mt4: DataTypes.DATE,
    usa_servidor: DataTypes.BOOLEAN,
    precisa_instalar: DataTypes.BOOLEAN,
    op_mercado: DataTypes.DECIMAL(16, 4),
    pre_config: DataTypes.BOOLEAN,
    corretora: DataTypes.STRING,
    tip_cadastro: DataTypes.STRING,
    tip_cliente: DataTypes.STRING
  });

  return Client;
};
