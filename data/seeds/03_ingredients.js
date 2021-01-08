
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    {name: "coffee" , recipie_id: 3 , amount_id: 3 },
    {name: "irish cream liquer" , recipie_id: 11 , amount_id: 1 },
    {name: "vodka" , recipie_id: 5 , amount_id: 1 },
    {name: "lemons", recipie_id: 3, amount_id: 2 },
    {name: "raspberry jell-o mix" , recipie_id: 4 , amount_id: 7 },
    {name: "watermelon", recipie_id: 6, amount_id: 8 },
    {name: "water", recipie_id: 1, amount_id:2 },
    {name: "ice cream", recipie_id: 2, amount_id: 9},
    {name: "whipped cream", recipie_id: 1, amount_id: 11 },
    {name: "tomato juice", recipie_id: 9, amount_id: 7}
  ])
};
