$(() => {
    $('#selectRune').on('change', function(){
        window.location.href = $('#pageLink').attr("href") + this.value;
        //$('#pageLink').attr("href", $('#pageLink').attr("href") + this.value);
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

    $('#createBtn').on('click', function(e){
        e.preventDefault();
        $('form').attr("action", window.location.href.substring(0, window.location.href.length - 7));
        $('form').submit();
    });

    $('#editRune').on('click', function(e){
        e.preventDefault();
        $('form').attr("action", window.location.href.substring(0, window.location.href.length - 5) + "?_method=PUT");
        $('form').submit();
    });

    $('#back').on('click', function(e){
        e.preventDefault();
        window.location.href = window.location.href.substring(0, window.location.href.length - 6);
    });
});