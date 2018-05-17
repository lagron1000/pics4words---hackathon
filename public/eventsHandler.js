class eventsHandler {
    constructor (daysRepository,renderer){
        this.daysRepository = daysRepository;
        this.renderer = renderer;
        this.$day = $(".uploadImage");
    }
        registerAddImage(){
            $('#butsubmit').click( (e) =>{
                this.daysRepository.addImage(e).then( () => {
                    this.renderer.renderDay(this.daysRepository.images, this.daysRepository)
                })
                    
             })
        }
        registerLikeImage(){
            $(".like").click(()=>{
                var $image = $(event.currentTarget).closest('.post')
                this.daysRepository.likeImage($image.data(id))
            })
        }
        registerDIsslikeImage(){
            $(".disslike").click(()=>{
                var $image = $(event.currentTarget).closest('.post')
                this.daysRepository.disslikeImage($image.data(id))
            })
        }
    }

export default eventsHandler;
