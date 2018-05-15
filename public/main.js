import DaysRepository from './daysrepository.js';
import Renderer from './renderer.js';
import EventsHandler from './eventsHandler.js'; 

let dayRepository = new DaysRepository();
let renderer = new Renderer();
let eventsHandler = new EventsHandler(dayRepository, renderer);


eventsHandler.registerAddPost();
eventsHandler.registerRemovePost();
eventsHandler.registerToggleComments();
eventsHandler.registerAddComment();
eventsHandler.registerRemoveComment();
eventsHandler.upPhoto();



var getDay = dayRepository.initData();
getDay.then( () => {
    
    renderer.renderDay(postsRepository.posts)});