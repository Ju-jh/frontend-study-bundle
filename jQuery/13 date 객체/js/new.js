window.arr = ['일', '월', '화', '수', '목', '금', '토'] 

$(function(){
    var printDate = function(){
    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth() +1
    var date = now.getDate()
    var day = arr[now.getDay()]
    var hour = now.getHours()
    var apm = hour < 12 ? 'PM' : 'AM'
    hour = hour >= 13 ? hour - 12 : hour
    var min = now.getMinutes()
    var sec = now.getSeconds()
    $('.ex1 .result').html(`${year}년도 ${month}월 ${date}일 ${day}요일<br>
    ${apm} ${hour}시 ${min}분 ${sec}초`)
    }
    printDate();
    setInterval(function(){
        printDate();
    },1000)
    
    $('.ex2 button').click(function(){
        var year = parseInt($('.ex2 input:nth-of-type(1)').val())
        var month = parseInt($('.ex2 input:nth-of-type(2)').val()) -1
        var date = parseInt($('.ex2 input:nth-of-type(3)').val())
        var userDate = new Date(year, month, date)
        var a = arr[userDate.getDay()]
        $('.ex2 .result').html(`${a}요일`)
    })
    $(function(){
        $('.ex3 input').change(function(){
            var userDate = $(this).val()
            $('.ex3 .result').html(`${arr[new Date(userDate).getDay()]}요일`)
            
        })
    })

    $(function(){
        $('.ex4 input').change(function(){
            var userDate = $(this).val()
            var date = new Date(userDate)
            var timeStamp = date.getTime()
            var sec = timeStamp / 1000
            $('.ex4 .result').html(`${sec}초가 흘렀어요`)
            
        })
    })


    $(function(){
            var now = new Date()
            // var rest
            var timeStamp = now.getTime()
            // var hours = parseInt(sec/3600)
            // rest = sec % 3600
            // var min = parseInt(rest / 60);
            // var restMim = 
            // $('.ex5 .result').html(sec)
            var 흐른시간초 = timeStamp / 1000
            var 시간으로나눈값 = parseInt(흐른시간초 / 3600)
            var 남은초 =흐른시간초 % 3600
            var 분으로나눈값 =  parseInt(남은초 / 60) 
            var 남은시간 = 남은초 % 60
            $('.ex5 .result').text(
                `${시간으로나눈값}시간 ${분으로나눈값}분 ${남은시간.toFixed(2)}초가 지났습니다.`
            )
    })

    $(function(){
        var intervalid

        var fn = function(){
            var inputDate = $('.ex6 input:nth-of-type(1)').val();
            var time = $('.ex6 input:nth-of-type(2)').val();
            var time1 = new Date()
            var time2 = new Date(`${inputDate}T${time}:00`)
            var stamp1 = time1.getTime()
            var stamp2 = time2.getTime()
            var diffSec = (stamp2 - stamp1) / 1000
            var hour = parseInt(diffSec / 3600)
            var rest1 = diffSec % 3600
            var min = parseInt(rest1 / 60)
            var sec = parseInt(rest1 % 60)
            $('.ex6 .result').text(`${hour}시 ${min}분 ${sec}초 남았습니다.`)
        }

        $('.ex6 button').click(function(){
            clearInterval(intervalid)
            intervalid = setInterval(function(){
                fn()
            },1000)
        })
       
    })

    $(function(){

        var fnClock = function(){
            var now = new Date()
            var apm = hour < 12 ? 'PM' : 'AM'
            var sec = now.getSeconds()
            var min = now.getMinutes()
            var hour = now.getHours()
            $('.sec').css({'transform':`rotate(${sec*6}deg)`})
            $('.min').css({'transform':`rotate(${min*6}deg )`})
            $('.hour').css({'transform':`rotate(${hour*30+min*0.5}deg)`})
            $('.ex7 p').html(`${apm} ${hour}:${min}:${sec.toFixed(0)}`)
        }

        
        
        setInterval(function(){
            fnClock()
        },1000)
    })
    
})