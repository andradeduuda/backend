const { hash } = require("bcryptjs");

exports.seed = async function(knex) {
 
 
  await knex("users").del();
  await knex("users").insert([
    {
      name: "admin",
      email: "duda@admin.com",
      password: await hash("1234", 8),
      is_admin: true,

    },

  ]);
  
};