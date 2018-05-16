class DaysRepository {
    constructor(daysApi, wordApi,date, word){
        this.daysApi = daysApi;
        this.wordApi = wordApi;
        this.day = date;
        this.word = word;
        this.images = []
    }
    initData(){
        var currentDay = new Date()
        var getFullDay = currentDay.getMonth()+1 + '-' + currentDay.getDate() + '-' + currentDay.getFullYear()
        return this.daysApi.fetchDay(getFullDay).then((data1)=>{
            if (!data1.word){
                console.log('TESTTTTTTTTTTTTTTTTTTTT')
                console.log(data1)
                this.wordApi.fetch().then((data)=>{
                    console.log(data)
                    var today = new Date;
                    var getFullDay = today.getMonth()+1 + '-' + today.getDate() + '-' + today.getFullYear()
                    this.word = data[0].word
                    this.day = getFullDay
                    this.addDay(this.day, this.word)
                })
            } else {
                console.log(data1)
                this.day = data.day;
                this.word = data.word;
                this.images = data.images
            }
        })
    }
    addDay(day, word){
        var dayObj = {day: day, word: word}
        return this.daysApi.postDay(dayObj)
    }

    addImage(form){
        
        
        this.daysApi.uploadPhoto(form);
        // newPhoto.then( (data) => {
        //     this.images.push(data)
        // })
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

export default DaysRepository;