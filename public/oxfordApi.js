class oxfordApi{
    constructor(){

    }
    fetch(ranWord){
        return $.ajax({
            method: "GET",
            Accept: "application/json",
            headers:{
                "app_id": "ef28e814",
                "app_key": "ddbef48c66c711b9ad84e628504e730d",
            },
            url: "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/" + ranWord,
        }).catch(function(data){
            console.log(data)
        })
    }
}

export default oxfordApi
