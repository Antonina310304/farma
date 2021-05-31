function CounterSms() {
    this.counter = $('.js-counter-sms');
    this.defaultTimerValue = 10;
    this.timer = this.defaultTimerValue;
    this.link = $('.js-init-sms-counter');
    this.errorBlock = $('.js-error-block');

    if(!this.counter.length) return;


    this.init();
}

CounterSms.prototype.initCounter = function () {
    var _this = this;
    function cb() {
        if(_this.timer < 1) {
            clearInterval(counterId);
            _this.counter.addClass('d-none');
            _this.link.removeClass('d-none');
        }
    }

    var counterId = setInterval(function () {
        _this.timer = _this.timer - 1;
        _this.counter.find('span').text(_this.timer);

        cb();
    }, 1000);

}
//очищаю ипуты/ прячу ошибки
CounterSms.prototype.returnDefauilState = function () {
    this.timer = this.defaultTimerValue;
    this.counter.find('span').text(this.defaultTimerValue);
    this.counter.removeClass('d-none');
    this.errorBlock.addClass('d-none');
    $('.js-mask-code').each(function () {
        $(this).val('');
        $(this).parent().removeClass('error');
    })


    this.counter.removeClass('d-none');
}

CounterSms.prototype.init = function () {

    if(!this.counter.hasClass('d-none')) {
        this.initCounter();
    }
    var _this = this;
    this.link.on('click', function () {
        $(this).addClass('d-none');
        _this.returnDefauilState();
        _this.initCounter();
        $('.js-mask-code').eq(0).focus();
    })

}

var counterSms = new CounterSms();


