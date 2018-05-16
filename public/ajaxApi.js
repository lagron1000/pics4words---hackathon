
class daysApi{
    constructor () {
    }

    fetch(){
        return $.ajax({
            method: "GET",
            url: "/days"
        }).catch(function(data){
            console.log(data)
        })
    }
    uploadPhoto(e){
        e.preventDefault();    
        var formData = new FormData( $('.uploadImage1')[0]);
    
        return $.ajax({
            url: "/add",
            type: 'POST',
            data: formData,
            cache: false,
            contentType: false,
            processData: false
        }).catch((data)=>{
            console.log(data)
        })
    }
    fetchDay(date){
        return $.ajax({
            method: "GET",
            url: "/days/" + date
        }).catch(function(data){
            console.log(data)
        })
    }
    deleteImage(date, id){
        return $.ajax({
            method: "DELETE",
            url: "/days/" + date + "/images/" + id
        }).catch(function(data){
            console.log(data)
        })
    }
    postDay(content){
        return $.ajax({
            method: "POST",
            url: "/days",
            data: content
        }).catch(function(data){
            console.log(data)
        })
    }
    }


export default  daysApi 

// export  {wordApi}



    




