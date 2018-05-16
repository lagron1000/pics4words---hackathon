class renderer{
    constructor(){
        this.$today = $(".currentDay");
        this.$dayTemplate = $('#day-template').html();
        this.$wordTemplate = $("#word-template").html();
        this.$headTemplate = $('#header-template').html();
        this.wordOftheDay = $('.WOTD')
        this.headerWord = $(".headerDayWord_")
    }
    renderDay(images, days){
        console.log(days.word)
        this.$today.empty();
        this.wordOftheDay.empty();
        this.headerWord.empty();
        let template = Handlebars.compile(this.$dayTemplate)
        for (let i=0; i<images.length; i++){
            let newHTML = template(images[i]);
            this.$today.append(newHTML)
        }
        let wordsTemplate = Handlebars.compile(this.$wordTemplate)
        let headTemplate = Handlebars.compile(this.$headTemplate)
        for (let i = 0; i<1; i++){
            let newWordHTML = wordsTemplate(days)
            let newHeadHTML = headTemplate(days)
            this.wordOftheDay.append(newWordHTML);
            this.headerWord.append(newHeadHTML);
        };

    }
}

export default renderer;