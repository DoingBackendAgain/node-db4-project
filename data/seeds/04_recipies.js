
exports.seed = async function(knex) {
  await knex("recipies").insert([
    {name: "Blast-Off Blood Mary" , instructions:"Stir tomato juice, vodka, lemon juice, Worcestershire sauce, horseradish, hot pepper sauce, celery salt, and black pepper together in a pitcher."},
    {name: "Raspberry Party Shots", instructions:"Stir the gelatin into the boiling water until dissolved. Pour in the ice water and vodka; mix well. Pour into shot glasses or devices specifically made for 'Party Shots.' Chill in the refrigerator for 1 to 2 hours, until set."},
    {name: "Watermelon Pink Lemonade" , instructions:"Combine water, lemon juice, sugar, and watermelon in a blender. Blend until smooth."},
    {name: "Cappuccino Cooler", instructions: "In a blender, combine coffee, ice cream and chocolate syrup. Blend until smooth. Pour over crushed ice. Garnish with a dollop of whipped cream and serve."},
    {name: "Bailey's Sundae Coffee Drink", instructions: "Brew 12 cups of coffee. While the coffee is brewing, fill each cup with a scoop of ice cream. Be sure to use large cups (the oversized types you get at coffee houses are best). Top each scoop of ice cream with just enough Irish cream so that the ice cream looks lightly coated."}
  ])
};
