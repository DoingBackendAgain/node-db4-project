
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    
      {name: "coffee"},
      {name: "irish cream liqueur"},
      {name: "vodka"},
      {name: "lemons"},
      {name: "raspberry jell-o mix"},
      {name: "watermelon"},
      {name: "water"},
      {name: "ice cream"},
      {name: "whipped cream"},
      {name: "ice"},
      {name: "tomato juice"}
  
  ])
};
