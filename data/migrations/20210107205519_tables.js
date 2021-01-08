
exports.up = async function(knex) {
  await knex.schema.createTable("recipies", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("instructions").notNull()
  })

  await knex.schema.createTable("amount", (table) => {
      table.increments("id")
      table.blob("amount").notNull()
  })

  await knex.schema.createTable("ingredients", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table
        .integer("recipie_id")
        .references("id")
        .inTable("recipies")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      table
        .integer("amount_id")
        .references("id")
        .inTable("amount")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")

     
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("amount")
    await knex.schema.dropTableIfExists("recipie")
  
};
