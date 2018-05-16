
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
    // uploadPhoto(form){
        
    //     return $(form).ajaxSubmit({
    //         data: {title: "photo"},
    //         contentType: 'application/json',
            
    //         success: function(response){
    //           console.log('image uploaded and form submitted');     
    //         },
    //         error:function(res, err){
    //             console.error(err);
    //         }
    //     });
    //       return false;
    // }
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



    




