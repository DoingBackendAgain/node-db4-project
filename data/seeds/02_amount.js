
exports.seed = async function(knex) {
  await knex("amount").insert([
    {amount: "1 cup"},
    {amount: "1/2 cup"},
    {amount: "1/4 cup"},
    {amount: "1 tablespoon"},
    {amount: "1/2 tablespoons"},
    {amount: "2 tablespoons"},
    {amount: "1 pinch"},
    {amount: "1 slice"},
    {amount: "1 teaspoon"},
    {amount: "1/2 teaspoon"},
    {amount: "2 teaspoons"}
  ])
};
