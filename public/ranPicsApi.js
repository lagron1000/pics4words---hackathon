class imgApi{
    constructor(){

    }
    fetch(myWord){
        return $.ajax({
            method: "GET",
            url: "https://api.unsplash.com/search/photos?query="+myWord+"&client_id=0d4f78e1d316bb9fd27d79af243997d56c3d5c6e77fe37388d6f1c7e2fd4d7d2"
        }).catch(function(data){
            console.log(data)
        })
    }
}

export default imgApi
