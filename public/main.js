import DaysRepository from './daysRepository.js';
import renderer from './renderer.js';
import eventsHandler from './eventsHandler.js'; 
import daysApi from './ajaxApi.js'
import wordApi from './wordApi.js'

let DayApi = new daysApi();
let WordApi = new wordApi()
let dayRepository = new DaysRepository(DayApi, WordApi);
let Renderer = new renderer();
let EventsHandler = new eventsHandler(dayRepository, renderer);


EventsHandler.registerAddImage();
// eventsHandler.registerRemovePost();
// eventsHandler.registerToggleComments();
// eventsHandler.registerAddComment();
// eventsHandler.registerRemoveComment();
// eventsHandler.upPhoto();



var getDay = dayRepository.initData();
getDay.then( () => {
    
    renderer.renderDay(postsRepository.posts)});