class eventsHandler {
    constructor (daysRepository,renderer){
        this.daysReplository = daysRepository;
        this.renderer = renderer;
        this.$day = $('.day');
    }
        registerAddImage(){
            $('.uploadImage').submit(function(e){
                e.preventDefault();
                this.daysRepository.uploadImage('.day')
            });
        }
    }

