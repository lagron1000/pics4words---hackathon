class renderer{
    constructor(){
        this.$today = $(".today");
        this.$dayTemplate = $('#day-template').html();
    }
    renderDay(images){
        this.$today.empty();
        let template = Handlebars.compile(this.$dayTemplate)
        for (let i=0; i<images.length; i++){
            let newHTML = template(images[i]);
            this.$today.append(newHTML)
        }
    }
}

export default renderer;