exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table.text("description")
      table.boolean("completed").notNull().defaultTo(false)
    })
  
    await knex.schema.createTable("resources", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table.text("description")
    })
  
    await knex.schema.createTable("tasks", (table) => {
        table.increments("id")
        table.text("task_description").notNull()
        table.text("notes")
        table.boolean("completed").notNull().defaultTo(false)
        table.integer("project_id").notNull()
              .references("id")
              .inTable("projects")
              .onDelete("CASCADE")
              .onUpdate("CASCADE")
    })
  }
  
  exports.down = async function(knex) {
      await knex.schema.dropTableIfExists("tasks")
      await knex.schema.dropTableIfExists("resources")
      await knex.schema.dropTableIfExists("projects")
  }
  