class wordApi{
    constructor(){

    }
    fetch(){
        return $.ajax({
            method: "GET",
            url: "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=0cf084b69b7243e7dc1487e8ead01046e6680a5de8d6bfd70"
        }).catch(function(data){
            console.log(data)
        })
    }
}

export default wordApi
