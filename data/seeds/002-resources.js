
exports.seed = async function(knex) {
  await knex("resources").insert([
    { name: "Party hats" , description: "Super wild decorations." },
    { name: "Music" , description: "Beats." },
    { name: "Laptop", description: "Handydandy omnitool." },
    { name: "Coffee", description: "Cannot work without this." },
    { name: "Essay questions", description: "Words from the soul, about your reason and why." },
    { name: "Webcam", description: "Can't really record a video without a camera." }
  ])
};
