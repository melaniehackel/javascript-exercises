const findTheOldest = function(array) {
    let oldest_year = Math.max(...array.map(function(person) 
        {if (person.yearOfDeath === undefined){
            person.yearOfDeath = new Date().getFullYear();
        }
        return person.yearOfDeath - person.yearOfBirth}))
    
    return array.find((person) => person.yearOfDeath - person.yearOfBirth === oldest_year);
    

};

// Do not edit below this line
module.exports = findTheOldest;
