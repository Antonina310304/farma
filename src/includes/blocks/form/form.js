function onSubmitForm(params) {
    $('body').on('submit', params.class, function (evt) {
        evt.preventDefault();
        var form = $(this);
        var inputs = form.find('[data-required]');
        var isFormValid = true;
        var errorBlock = $('.js-error-block');


        if(inputs.length) {
            inputs.each(function () {
                var val = $(this).val().trim();
                if(val == '') {
                    $(this).parent().parent().addClass('error');
                    isFormValid = isFormValid && false;
                } else {
                    $(this).parent().parent().removeClass('error');
                }
            })
        }

        if(!isFormValid) {
            errorBlock.removeClass('d-none');
        } else {
            errorBlock.addClass('d-none');
            $(this).attr('disabled', true);
            preloader.show();

            var paramsAjax = {
                type: 'POST',
                url: 'action.php',
                dataType: 'json',
                data: form.serializeArray(),
                onSuccess: function (data) {
                    preloader.hide();
                    params.onSuccess();
                },
                onError: function () {
                    params.onError();
                },
            }

            onSendAjax(paramsAjax);
        }
    })
}

onSubmitForm({
    class: '.js-aut',
    onError: function () {
        return false;
    },

    onSuccess: function (data) {
        var type = $('.js-aut').attr('data-form');
        var typeError = $('.js-aut').attr('data-form-type');

        function refreshSmsBlock() {
            //запускаю счетчик и навешиваю маску на блок с паролем смс
            $('.js-mask-code').eq(0).focus();
            var counterSms = new CounterSms();
            codeMask();
        }

        //это безобразие при интеграции удалить
        var data = {};
        if(type == 'login' && typeError == 'error'){
            data.template = templateLogin.clone();
            data.status = 'LOGIN_ERROR';
        } else if(type == 'login' && typeError == 'success') {
            data.status = 'LOGIN_SUCCESS';
            data.template = templateSms.clone();
        } else if(type == 'sms' && typeError == 'error') {
            data.status = 'SMS_ERROR';
            data.template = templateErrorSms.clone();
        }
        //

        $('.page__authorization-in').replaceWith(data.template);
        switch (data.status) {
            case 'LOGIN_ERROR' :
                break;
            case 'LOGIN_ERROR' :
                break;
            case 'SMS_ERROR' :
                refreshSmsBlock();
                break;
            case 'LOGIN_SUCCESS':
                refreshSmsBlock()
                break;
        }
    }
})


