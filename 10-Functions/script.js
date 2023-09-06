'use strict';

///////////////////////////////////////
// Default Parameters
/*
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199

  const booking = {
    flightNum,
    numPassengers,
    price
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined,1000);
 */

////////////////////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference

const flight = 'LH234';
const andrii = {
  name: 'Andrii Mysaka',
  passport: 2222455482
};

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2222455482) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, andrii);
// console.log(flight);
// console.log(andrii);

// Is the same as doing...
// const flightNum = flight;
// const passenger = andrii;

const newPassport = function(person){
  person.passport = Math.trunc(Math.random() * 1000000);
}

newPassport(andrii);
checkIn(flight, andrii);