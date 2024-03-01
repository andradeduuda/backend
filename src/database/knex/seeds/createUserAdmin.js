const { hash } = require("bcryptjs");

exports.seed = async function(knex) {
 
 
  await knex("users").del();
  await knex("users").insert([
    {
      name: "admin",
      email: "duda@admin.com",
      password: await hash("112233", 8),
      is_admin: true,

    },

  ]);
  
};