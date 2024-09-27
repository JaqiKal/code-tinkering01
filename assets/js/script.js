/**
 *  This script manages the toggle functionality of the mobile navigation menu.
 *
 * Features:
 * - Toggles the visibility of the navigation menu on small screens.
 * - Adds or removes the 'open' class on the navigation menu when the hamburger
 *  icon is clicked.
 *
 * Other:
 * - jshint esversion: 6, please see README.md for further details.
 *
 * Author: JaqiKal
 * Date: Sept 2024
 */

// jshint esversion: 6


// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get the hamburger element
  const hamburger = document.getElementById('hamburger');
  
  // Get the navigation links container
  const navLinks = document.getElementById('nav-links');
  
  // Add a click event listener to the hamburger icon
  hamburger.addEventListener('click', () => {
    // Toggle the 'open' class on the navigation links container
    navLinks.classList.toggle('open');
  });
});