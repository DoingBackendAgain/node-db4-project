
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    {name: "coffee" , rec_id: 3 , amount_id: 3 },
    {name: "irish cream liquer" , rec_id: 2 , amount_id: 1 },
    {name: "vodka" , rec_id: 5 , amount_id: 1 },
    {name: "lemons", rec_id: 3, amount_id: 2 },
    {name: "raspberry jell-o mix" , rec_id: 4 , amount_id: 7 },
    {name: "watermelon", rec_id: 2, amount_id: 8 },
    {name: "water", rec_id: 1, amount_id:2 },
    {name: "ice cream", rec_id: 2, amount_id: 9},
    {name: "whipped cream", rec_id: 1, amount_id: 5 },
    {name: "tomato juice", rec_id: 4, amount_id: 7}
  ])
};
