
$('body').on('click', '.js-remove-registr', function () {

})

$('body').on('click', '.js-mark', function (evt) {
    var _this = $(this);
    evt.preventDefault();
    _this.attr('disabled', true);

    var parent = $(this).closest('.persons-list__tr');
    var id = parent.attr('id');
    console.log(id)

    onSendAjax({
        type: 'POST',
        url: 'action.php',
        dataType: 'json',
        data: {
            id: id,
            action: 'REMOVE_MARK'
        },

        onSuccess: function (data) {
            var data = {
                state: 'OK'
            }

            if(data.state == 'OK') {
                _this.attr('disabled', false);
                parent.removeClass('mark');
            } else {
                alert('Ошибка, попробуйте позже');
            }
        },

        onError: function () {
            alert('Ошибка связи с сервером');
        },
    })
})
