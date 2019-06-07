
exports.up = function(knex, Promise) {
    return knex.schema.createTable("action", tbl => {
      tbl.increments();
  
      tbl.string("notes", 255);
      tbl.string("descriptions", 255);
      tbl.boolean("completed").notNullable();
  
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("action");
  };