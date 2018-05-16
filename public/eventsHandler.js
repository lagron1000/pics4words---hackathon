class eventsHandler {
    constructor (daysRepository,renderer){
        this.daysRepository = daysRepository;
        this.renderer = renderer;
        this.$day = $(".uploadImage");
    }
        registerAddImage(){
            $('#butsubmit').click( (e) =>{
                this.daysRepository.addImage(e).then( () => {
                    this.renderer.renderDay(this.daysRepository.images)
                })
                    
             })
            

                
            
        }
    }

export default eventsHandler;
