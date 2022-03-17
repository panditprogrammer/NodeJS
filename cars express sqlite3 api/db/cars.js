const knex = require("./knex");

// create and insert in db 
function createCar(car){
    return knex("cars").insert(car);
}

function getAllCars(){
    return knex("cars").select("*");
}

function getOneCar(id){
    return knex("cars").select("*").where("id",id);
}

function deleteCar(id){
    return knex("cars").where("id",id).del();
}

function updateCar(id,car){
    return knex('cars').where("id",id).update(car);
}

function searchCar(query){
    return knex('cars').select("*").where('make', "like", `%${query.search}%`).orWhere("model", "like",`%${query.search}%`);
}

module.exports = {
    createCar,
    getAllCars,
    getOneCar,
    deleteCar,
    updateCar,
    searchCar
}