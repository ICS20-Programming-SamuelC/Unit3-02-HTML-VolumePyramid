// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the area of a trapazoid.
 */
function calculate () {
  // input
  const base1 = parseInt(document.getElementById('base1').value)
  const base2 = parseInt(document.getElementById('base2').value)
  const height = parseInt(document.getElementById('height').value)

  // process
  const volume = base1 * base2 * height / 6

  // output
  document.getElementById('volume').innerHTML = 'The volume of a right triangular pyramid is ' + volume.toFixed(3) + ' cm cubed. '
}