$('select').on('change', function(){
    $('#pageLink').attr("href", "/" + this.value);
});