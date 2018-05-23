class DaysRepository {
    constructor(daysApi, wordApi, oxfordApi, date, word, description){
        this.daysApi = daysApi;
        this.wordApi = wordApi;
        this.oxfordApi = oxfordApi;
        this.day = date;
        this.word = word;
        this.images = [];
        this.description = description
    }
    initData(){
        var currentDay = new Date()
        var getFullDay = currentDay.getMonth()+1 + '-' + currentDay.getDate() + '-' + currentDay.getFullYear()
        return this.daysApi.fetchDay(getFullDay).then((data1)=>{
            if (!data1[0]){
                console.log('TESTTTTTTTTTTTTTTTTTTTT')
                console.log(data1)
                return this.wordApi.fetch().then((data)=>{
                    console.log(data)
                    var today = new Date;
                    var getFullDay = today.getMonth()+1 + '-' + today.getDate() + '-' + today.getFullYear()
                    this.word = data[0].word
                    this.day = getFullDay
                }).then(()=>{
                    return this.addDay(this.day, this.word)
                })
            } else {
                console.log(data1)
                this.day = data1[0].day;
                this.word = data1[0].word;
                this.images = data1[0].images
            }
        })
    }
    initOxford(){
        return this.oxfordApi.fetch(this.word).then((oxData)=>{
            console.log(oxData.senses[0].definitions[0])
        this.description = oxData.senses[0].definitions[0]
        })
        this.addDay(this.day, this.word, this.description)
    }
    addDay(day, word){
        var dayObj = {day: day, word: word}
        return this.daysApi.postDay(dayObj)
    }

    addImage(e){      
        return this.daysApi.uploadPhoto(e).then( (data) => {
            console.log(data)
            this.images.push(data)
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
    removeImage(id){
        return this.daysApi.deleteImage(id).then((data)=>{
            this.images = data.images
        })
    }
    likeImage(id){
        var imagesArr = this.images
        var findById = function(picsId, Arr){
            for (let i=0; i<imagesArr.length; i++){
                while (imagesArr[i]._id === picsId){
                    return i
                }
            }
        }
        imagesArr[findById(id, imagesArr)].rating++
        console.log(imagesArr[findById(id, imagesArr)].rating)
        return this.daysApi.putLike(id, imagesArr[findById(id, imagesArr)].rating).then(()=>{
            if (imagesArr[findById(id, imagesArr)].rating<-5){
                return this.daysApi.deleteImage(id)
            }
        })
    }
    disslikeImage(id){
        var imagesArr = this.images
        var findById = function(picsId, Arr){
            for (let i=0; i<imagesArr.length; i++){
                while (imagesArr[i]._id === picsId){
                    return i
                }
            }
        }
        imagesArr[findById(id, imagesArr)].rating--
        console.log(imagesArr[findById(id, imagesArr)].rating)
        return this.daysApi.putDisslike(id, imagesArr[findById(id, imagesArr)].rating).then(()=>{
            if (imagesArr[findById(id, imagesArr)].rating<-5){
                return this.daysApi.deleteImage(id)
            }
        })
    }
}

export default DaysRepository;