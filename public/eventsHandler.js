class eventsHandler {
    constructor (daysRepository,renderer){
        this.daysRepository = daysRepository;
        this.renderer = renderer;
        this.$day = $("/");
    }
        registerAddImage(){
            $('.uploadImage').submit( (e) =>{
                e.preventDefault();
                
                this.daysRepository.addImage(this.$day)

            });
                
            
        }
    }

export default eventsHandler;
