$('select').on('change', function(){
    $('#pageLink').attr("href", $('#pageLink').attr("href") + this.value);
});