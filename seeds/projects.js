
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_id: 1, 
          project_name: 'sprint',
          project_description: 'Yes, so',
          project_completed: false
        },
        {
          project_id: 2, 
          project_name: 'unit 4',
          project_description:'Much',
          project_completed: false
        },
        {
          project_id: 3,
          project_name: 'assessment',
          project_description: 'Fun!',
          project_completed: true
        }
      ])
    
    .then(function() {
      return knex('resources').insert(
        {
          resource_id: 1,
          resource_name: 'willpower'
        },
        {
          resource_id: 2,
          resource_name: 'elbow greese'
        },
        {
          resource_id: 3,
          resource_name: 'huevos grandes'
        },
      )
    })

    .then(function() {
      return knex('tasks').insert(
        {
          task_id: 1,
          task_description: 'do stuff',
          project_id: 1
        },
        {
          task_id: 2,
          task_description: 'do things',
          project_id: 2
        },
        {
          task_id: 3,
          task_description: 'just do it - Nike',
          project_id: 3
        },
      )
    })
    });
};
