function onSendAjax(params) {
    $.ajax({
        type: params.type,
        url: params.url,
        dataType: params.url,
        data: params.data,
        processData: false,
        contentType: false,
        cache: false,
        success: function (data) {
            params.onSuccess(data);
        },

        error: function (data) {
            //добавить обработку ошибок и убрать setTimeout
            setTimeout(function () {
                params.onSuccess();
            }, 2000)
            // пример массива с ошибкой
            var data = {
                status: 'error',
                template: 'templateHTML',
            }
        }
    });
}


function debounce(func, wait, immediate) {
    var timeout;

    return function executedFunction() {
        var context = this;
        var args = arguments;

        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
};

function getJsonForm(form) {
    return form.serializeArray().reduce(function (output, value) {

        if(value.value !== "") {
            output[value.name] = value.value
        }

        return output
    }, {})
}

$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', -1);
        range.moveStart('character', pos);
        range.select();
    }
};
