class eventsHandler {
    constructor (daysRepository,renderer){
        this.daysRepository = daysRepository;
        this.renderer = renderer;
        this.$day = $(".uploadImage");
        this.$likeBtn =  $(".currentDay");
    }
        registerAddImage(){
            $('#butsubmit').click( (e) =>{
                if ($('#userName').val() === ""){
                    alert('Please enter text!')
                } else {
                    this.daysRepository.addImage(e).then( () => {
                        this.renderer.renderDay(this.daysRepository.images, this.daysRepository)
                    })
                }
             })
        }
        registerLikeImage(){
            this.$likeBtn.on('click', '.like', (event)=>{
                let myId = $(event.currentTarget).closest('.post').data('id');
                this.daysRepository.likeImage(myId).then( () => {
                    this.daysRepository.initData().then(()=>{
                        this.renderer.renderDay(this.daysRepository.images, this.daysRepository)
                    })
                })
            })
        }
        registerDIsslikeImage(){
            this.$likeBtn.on('click', '.disslike', (event)=>{
                let myId = $(event.currentTarget).closest('.post').data('id');
                this.daysRepository.disslikeImage(myId).then( () => {
                    this.daysRepository.initData().then(()=>{
                        this.renderer.renderDay(this.daysRepository.images, this.daysRepository)
                    })
                })
            })
        }
    }

export default eventsHandler;
