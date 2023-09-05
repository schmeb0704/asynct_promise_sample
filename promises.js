const applyDamage = (damage, currentHP) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (currentHP - damage > 0) {
        const newHp = currentHP - damage;
        resolve(newHp);
      } else if (currentHP - damage <= 0) {
        reject("character has fallen");
      }
    }, 1000);
  });
};

const awaitStyleDamage = (damage, currentHP) => {
  return new Promise((resolve) => {
    const newHP = currentHP - damage;
    setTimeout(() => {
      resolve(`The player suffers ${damage} and now has ${newHP}`);
    }, 1000);
  });
};

module.exports = { applyDamage };
// if you are gonna use this material to teach, delete the body of the setTimeout function

// if damage inflicted would reduce the player's hp to 0 or less, the promise will reject with the string
// "The player suffers ${damage} and has fallen unconscious"

// otherwise, the promise will resolve with the string
// "The player suffers ${damage} points of damage and has ${newHP} health remaining"
