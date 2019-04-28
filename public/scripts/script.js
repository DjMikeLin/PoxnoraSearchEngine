$(() => {
    $('select').on('change', function(){
        $('#pageLink').attr("href", $('#pageLink').attr("href") + this.value);
    });

    $('#editBtn').on('click', function(e){
        e.preventDefault();
        window.location.href = window.location.href + '/edit';
    });

    $('#deleteBtn').on('click', function(e){
        e.preventDefault();
        $('form').attr("action", window.location.href + "?_method=DELETE");
        $('form').submit();
    });

    $('#editRune').on('click', function(e){
        e.preventDefault();
        $('form').attr("action", window.location.href.substring(0, window.location.href.length - 5) + "?_method=PUT");
        $('form').submit();
    });
});