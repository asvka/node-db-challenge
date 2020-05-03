
exports.seed = async function(knex) {
  await knex("tasks").insert([
    { task_description: "Book a DJ" , notes: "Call your friend.", completed: true, project_id: 1 },
    { task_description: "Work on promo" , notes: "Hire your local kandi kids and get the word out", completed: false, project_id: 1 },
    { task_description: "Draw your project", notes: "Physically draw the schematic out.", completed: true, project_id: 2 },
    { task_description: "Avoid daydrinking", notes: "You know it sounds like fun, but let's wait until AFTER.", completed: true, project_id: 2 },
    { task_description: "Finish essay questions", notes: "Finish up those questions, and elaborate on your why.", completed: false, project_id: 3 },
    { task_description: "Record walkthrough", notes: "Show step-by-step what your code does, and showcase that talent!", completed: false, project_id: 3 }
  ])
};
