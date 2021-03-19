
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 128)
            .unique()
        tbl.string('project_description', 128)
        tbl.boolean('project_completed')
    })
    
    .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.string('resource_name').notNullable().unique()
    })

    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.string('task_description').notNullable()
        tbl.boolean('task_completed')
        tbl.string('project_id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects')
  };
  