class oxfordApi{
    constructor(){

    }
    fetch(ranWord){
        return $.ajax({
            method: "GET",
            url: "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/" + ranWord,
            Accept: "application/json",
            app_id: "ef28e814",
            app_key: "ddbef48c66c711b9ad84e628504e730d"
        }).catch(function(data){
            console.log(data)
        })
    }
}

export default wordApi
