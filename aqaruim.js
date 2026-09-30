
const FEEDS_TO_EXPLODE = 4;     
const SPRINKLES_FOR_FRENZY = 5;
const pageUrl = (page) => `/${page}`; 

const $ = (sel) => document.querySelector(sel);
const aquarium = $("#aquarium");
const water = $(".water");
const fishes = [...document.querySelectorAll("button.fish")];
const feedBtn = $("#foodButton");
const text = $("#instructionText");
const helpBtn = $("#helpButton");
const helpPanel = $("#helpPanel");
const closeHelp = $("#closeHelp");

