const findTheOldest = function (array) {
    return array.reduce((oldest, current) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(current.yearOfBirth,
        current.yearOfDeath
      );
      return oldestAge < currentAge ? current : oldest;
    });
  };
  
  const getAge = function (birthYear, deathYear) {
    if (!deathYear) {
      deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
  };

// Do not edit below this line
module.exports = findTheOldest;
