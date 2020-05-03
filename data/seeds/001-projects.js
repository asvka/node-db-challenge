
exports.seed = async function(knex) {
  await knex("projects").insert([
    { name: "Have a party" , description: "Hold a small get-together with friends" , completed: true },
    { name: "Write a database" , description: "Finish up sprint challenge and create RESTful database" , completed: false },
    { name: "Get apprenticeship at Twilio" , description: "Finish up application by creating video submission" , completed: false },
  ])
};
