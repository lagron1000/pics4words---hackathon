import DaysRepository from './daysRepository.js';
import renderer from './renderer.js';
import eventsHandler from './eventsHandler.js'; 
import daysApi from './ajaxApi.js'
import wordApi from './wordApi.js'

let DayApi = new daysApi();
let WordApi = new wordApi()
let dayRepository = new DaysRepository(DayApi, WordApi);
let Renderer = new renderer();
let EventsHandler = new eventsHandler(dayRepository, Renderer);


EventsHandler.registerAddImage();
// eventsHandler.registerRemovePost();
// eventsHandler.registerToggleComments();
// eventsHandler.registerAddComment();
// eventsHandler.registerRemoveComment();
// eventsHandler.upPhoto();



dayRepository.initData().then( () => {
    Renderer.renderDay(dayRepository.images, dayRepository)});