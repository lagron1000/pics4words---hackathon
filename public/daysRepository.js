class DaysRepository {
    constructor(date, word, daysApi, wordApi){
        this.daysApi = daysApi;
        this.wordApi = wordApi;
        this.day = date;
        this.word = word;
        this.images = []
    }
    initData(){
        return this.daysApi.fetch().then((data)=>{
            if (data.word && data.image){
            this.word = data.word;
            this.images = data.images
            } else {
                this.wordApi.fetch().then((data)=>{
                    this.word = data.word
                })
            }
        })
    }
    findDate(date){
        return this.daysApi.fetchDay(date).then((data)=>{
            if (data.word){
                this.day = data.day;
                this.word = data.word;
                this.images = data.images;
            } else {
                console.log('Error: Day not available');
            }
        })
    }
    removeImage(date, id){
        this.daysApi.deleteImage(date, id).then((data)=>{
            this.images = data.images
        })
    }
}