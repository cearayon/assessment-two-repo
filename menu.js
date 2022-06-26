///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

const pizza = {
    name:"baddabing pizzzzaaaa",
    price: 4.20 ,
    category: "late night deals",
    popularity:9000 ,
    rating:"10/10 would eat again" ,
    tags: ["late night", "adult who cant cook", "broke college kid", "definitely full of gluten", "more calories than you needed", "on doordash under the influence", "don't feed to child"]

}




//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

// console.log(pizza.popularity)
/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

// console.log(pizza.tags[1])
// console.log(pizza['tags'])
/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE

let {price} = pizza
// console.log(price)
/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

let {category} = pizza
// console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

let foodArr = [{
    name:"pepperoni",
    price: 4.20 ,
    category: "1 topping",
    popularity:10 ,
    rating:"nice" ,
    tags: ['one topping', 'meat', 'gluten', 'non-vegetarian']

}, {
    name:"meatlover",
    price: 5.20 ,
    category: "specialty",
    popularity:10 ,
    rating:"10/10 would eat again" ,
    tags: ['5+ topping', 'non-vegetarian', 'meat', 'gluten']

}, {
    name:"veggie",
    price: 5.20 ,
    category: "specialty",
    popularity:6.5 ,
    rating:'mid' ,
    tags: ['vegetarian', 'no meat', 'gluten']

}, {
    name:"cheese",
    price: 4.10 ,
    category: "one topping",
    popularity:8 ,
    rating:"basic" ,
    tags: ["just cheese", "gluten", "lactose", "take lactaid lol", "no meat"]

}, {
    name:"gluten free veggie pizza",
    price: 5.20 ,
    category: "specialty",
    popularity:5 ,
    rating:"mid" ,
    tags: ["gluten free", "gluten friendly", "vegetarian", "no meat"]

}]


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

const filteredFood = foodArr.filter ((x)=> x.price === 4.10)
console.log(filteredFood)
// const filteredFood = foodArr.filter(/* CALLBACK HERE */)



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
// const filterByProperty = foodArr.filter(function (property, number, type){
//     let filteredPizza = []
    
//     if (foodArr.rating != 'mid' && 'basic'){
//         filteredPizza.push(foodArr.rating)
//     }
//     if (foodArr.price < 5){
//         filteredPizza.push(foodArr.price)
//     }
//     if (foodArr.type != foodArr.price & foodArr.rating){
//         return price
//     }


// })


function filterByProperty (property, number, type){
    let filteredPizza = []
    if (property != 'mid' && 'basic'){
        filteredPizza.push(property)
    } if (number < 5){
        filteredPizza.push(number)

    } if (type < number)
        return type
        console.log(filteredPizza)
}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE

console.log(filterByProperty('yum', 4.5, 5))