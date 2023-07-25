$(function(){

    $('.app nav button').click(function(){
        //버튼 active 구현
        $('.app nav button').removeClass('active')
        $(this).addClass('active')
        //관련된 form 보여주고 숨기기
        $('.app section').hide();
        var section = $(this).val() //.bmi .percent
        $(section).show()
        $('.app form')[0].reset();
        $('.app form')[1].reset();
        $('.result-percent, .result-bmi').hide();
    })

    $('.percent form').submit(function(e){
        e.preventDefault();
        var num1 = parseInt($('.num1').val())
        var num2 = parseInt($('.num2').val())
        var result = (num2 / num1) * 100
        console.log(result);
        $('.result-percent').show()
        $('.result-percent').text(result)
    })

    $('.percent button[type=reset]').click(function(){
        $('.result-percent').hide();
    })

    ////////////////////////////////////////////////////////////////////////////////////

    $('.bmi form').submit(function(e){
        e.preventDefault();
        var a = $('.bmi form input[type=radio]:checked').val();
        var b = parseInt($('.bmi .num1').val()) / 100;
        var c = parseInt($('.bmi .num2').val());
        
        // var d = c / ((b/100)*(b/100))
        var d = (c / Math.pow(b, 2)).toFixed(2)
        var result
        

        if(a === '남성' && 15 > d){
            result = 'blue'
        }
        else if(a === '남성' && 15 <= d && d < 20){
            result = 'green'
        }
        else if(a === '남성' && 20 <= d && d < 25){
            result = 'gold'
        }
        else if(a === '남성' && 25 <= d && d < 30){
            result = 'purple'
        }
        else if(a === '남성' &&  d >= 30){
            result = 'red'
        }

        if(a === '여성' && d <20){
            result = 'blue'
        }
        else if(a === '여성' && 20 <= d && d < 25){
            result = 'green'
        }
        else if(a === '여성' && 25 <= d && d < 30){
            result = 'gold'
        }
        else if(a === '여성' && 30 <= d && d < 35){
            result = 'purple'
        }
        else if(a === '여성' &&  d >= 35){
            result = 'red'
        }

        $('.result-bmi').show()
        $('.result-bmi p').html(`나의BMI 수치: ${d}`)
        $('.result-bmi p').css({'color':result})
        
    })

})