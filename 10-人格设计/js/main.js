//////////////////////////
//  变量定义
//////////////////////////
var testValue = 0
var alreadyVideo = 0
/////////////////////////
//  CSS定义
////////////////////////////
var windowHeight = $(window).height()

setInterval(function () {
    if (windowHeight < 650) windowHeight = 650
    $('.backgroundGIF').css('height', windowHeight)
    $('video').css('margin-top', (windowHeight - 600) / 2)
    $('video').css('margin-bottom', (windowHeight - 600) / 2)
    $('.text-box').css('height', windowHeight)
    $('.start').css('bottom', windowHeight * 0.08)
    // $('#black').css('height',windowHeight)
}, 100)
for (var i = 0; i < 9; i++) {
    $('.text-everyone').eq(i).css('transition', '0.3s ease ' + i * 0.1 + 's')
}
for (var i = 0; i < 8; i++) {
    $('.title').find('p').eq(i).css('transition', '0.3s ease ' + i * 0.1 + 's')
}
$(document).ready(function () {
    window.scrollTo(0, 0);
    $('.backgroundGIF').css('opacity', 0)
    setTimeout(function () {
        $('.backgroundImages').css('opacity', 1)
    }, 2000)
    setTimeout(function () {
        $('.backgroundGIF').css('display', 'none')
        for (var i = 0; i < 8; i++) {
            $('.title').find('p').eq(i).css('opacity', 1)
            if (i == 7) {
                setTimeout(function () {
                    $('.start').css('opacity', 1)
                }, 850)
            }
        }
    }, 5000)
})
// console.log($('video').width())


///////////////////////////
//  行为
///////////////////////////
$('.start').click(function () {
    $('.fourGIF').css('opacity', 0)
    $('.fourGIF').eq(1).css('left', '40%')
    $('.fourGIF').eq(2).css('left', '40%')
    $('.fourGIF').eq(3).css('left', '60%')
    $('.fourGIF').eq(0).css('left', '60%')
    $('.title').css('display', 'none')
    // $('.backgroundImages').css('background-image','url("./img/jpg/0120.jpg")')
    $('.text-box').css('overflow', 'auto')
    for (var i = 0; i < 9; i++) {
        $('.text-everyone').eq(i).css('opacity', 1)
    }
    $('.start').css('display', 'none')
    setTimeout(function () {
        $('.fourGIF').css('display', 'none')
    }, 500)
})
$('.upload').click(function () {
    if ($('input:checked').length != 5) {
        alert('Please complete all the multiple choice questions!')
        return
    }
    else {
        for (var i = 0; i < 5; i++) {
            for (var ii = 0; ii < 4; ii++) {
                if ($('.text-everyone').eq(i).find('input')[ii].checked) {
                    testValue += parseInt($('.text-everyone').eq(i).find('input')[ii].value)
                    break
                }
            }
        }
        if (testValue >= 7 && testValue <= 14) {
            testValue = 'Rabbit Men'
            document.getElementsByTagName('video')[0].src = "https://ishortv-1308682615.cos.ap-shanghai.myqcloud.com/3.mp4"
            // $('video').css('margin-left','-300px')
            alreadyVideo = 3
        }
        else if (testValue >= 15 && testValue <= 21) {
            testValue = 'Mantis Men'
            document.getElementsByTagName('video')[0].src = "https://ishortv-1308682615.cos.ap-shanghai.myqcloud.com/1.mp4"
            // $('video').css('margin-left','-533px')
            alreadyVideo = 1
        }
        else if (testValue >= 22 && testValue <= 28) {
            testValue = 'Weaver Birds Men'
            document.getElementsByTagName('video')[0].src = "https://ishortv-1308682615.cos.ap-shanghai.myqcloud.com/2.mp4"
            // $('video').css('margin-left','-533px')
            alreadyVideo = 2
        }

        if (alreadyVideo == 1) {
            for (var iii = 1; iii < 13; iii++) {
                $('#test' + iii).css('display', 'none')
            }
            for (var ii = 5; ii < 9; ii++) {
                $('#test' + ii).css('display', 'block')
            }
        }
        else if (alreadyVideo == 2) {
            for (var iii = 1; iii < 13; iii++) {
                $('#test' + iii).css('display', 'none')
            }
            for (var ii = 9; ii < 13; ii++) {
                $('#test' + ii).css('display', 'block')
            }
        }
        else if (alreadyVideo == 3) {
            for (var iii = 1; iii < 13; iii++) {
                $('#test' + iii).css('display', 'none')
            }
            for (var ii = 1; ii < 5; ii++) {
                $('#test' + ii).css('display', 'block')
            }
        }
        $('.scoreShow-textBox').html('<h2>Your Personality is&nbsp;<h1>' + testValue + '</h1></h2>')
        $('.text-box').css('opacity', 0)
        $('.scoreShow').css('display', 'block')
        $('video').css('display', 'block')
        setTimeout(function () {
            $('.text-box').css('display', 'none')
            $('.scoreShow').css('opacity', 1)
            $('video').css('opacity', 1)
        }, 500)
    }
})
$('.scoreShow-btn h2').click(function () {
    $('.scoreShow').css('opacity', 0)
    setTimeout(function () {
        $('.sroreShow').css('display', 'none')
    }, 300)
    $('video')[0].play()
    document.getElementsByTagName('video')[0].controls = true
    setInterval(function () {
        if ($('video')[0].ended) {
            $('.seemore-btn').css('display', 'block')
            document.getElementsByTagName('video')[0].controls = false
            // $('.otherEndPic').css('display','block')
            $('#black').css('display', 'block')
        }
    }, 500)
})
$('.seemore-btn').click(function () {
    // window.scrollTo(0, 99999);
    // var id=setInterval(function(){
    //     if(document.documentElement.scrollTop!=600)
    //     {
    //         document.documentElement.scrollTop+=120;

    //         //当滑动条距顶部为0时,结束间隔任务
    //         if(document.documentElement.scrollTop==600)
    //         {
    //             clearInterval(id);
    //         }
    //     }
    // },100);
    var imaNum = 1
    var imgText = ''
    $('body').css('overflow', 'auto')
    for (var i = 12; i < 14; i++) {
        if (imaNum == alreadyVideo) imaNum++
        if (imaNum == 1) {
            imgText = 'Mantis Men'
        }
        else if (imaNum == 2) {
            imgText = 'Weaver Birds Men'
        }
        else if (imaNum == 3) {
            imgText = 'Rabbit Men'
        }
        $('.otherEndPic').eq(i).find('div').eq(1).html('<div><h2>' + imgText + '</h2></div>')
        // if(imaNum==3)
        // document.getElementsByClassName('otherText')[i].innerHTML = "<h2>Rabbits are in heat all year round and have false pregnancies.</h2><h2>Emotional feelings even affect the rabbit's body.The rabbit type future man takes love as a kind of spirit sustains and has an emotional attachment personality.</h2><h2>It is commonly known as \"crazy love brain\".</h2><h2>But it also represents a kind of beautiful love spirit in love.The kind and gentle rabbit people have the spirit of fairy tale love and the vision of beautiful love.</h2>"
        // else if(imaNum==2)
        // document.getElementsByClassName('otherText')[i].innerHTML = "<h2>The female mantis will eat the male mantis after mating.Mantis Man represents the uncontrollable and dangerous nature of fast-food love.</h2><h2>Point to physical behavior.</h2><h2>It also discusses the relationship between virtual and real: in the future world, people will not be able to judge the personality of online dating or dating partners.</h2><h2>Mantis Man is also discussing the definition and link between virtuality and reality.</h2>"
        // else if(imaNum==1)
        // document.getElementsByClassName('otherText')[i].innerHTML = "<h2>In a weaver birds flock, females choose a date by comparing suitors with those who have the best nest.</h2><h2>The weaver birds represents purpose and materiality in a loving relationship.</h2><h2>At the fast pace of modern life, weavers who choose fast love often decide on a date by judging the other person's financial and material resources.</h2><h2>But there is also a degree of pragmatism involved.</h2>"
        $('.otherEndPic').eq(i).find('div').eq(0).css('background-image', 'url("./img/' + (imaNum++) + 'img.png")')
    }
    // this.style.top = '100%'
    // $('video').css('opacity',0)
    setTimeout(function () {
        $('.otherEndPic').css('opacity', 1)
        $('.otherEndPic').css('top', '52%')
    }, 100)
    $('.otherEndPic').click(function () {
        window.scrollTo(0, 0);
        $('body').css('overflow', 'hidden')
        // $('#black').css('display','none')
        // $('.otherEndPic').css('display','none')
        $('.seemore-btn').css('display', 'none')
        // $('.otherEndPic').css('top','65%')
        // $('.seemore-btn').css('top','50%')
        var videoNum = this.getElementsByTagName('div')[0].style.backgroundImage.replace('url("./img/', '').replace('img.png")', '')
        document.getElementsByTagName('video')[0].src = "https://ishortv-1308682615.cos.ap-shanghai.myqcloud.com/" + videoNum + ".mp4"
        if (videoNum == 1) {
            for (var iii = 1; iii < 13; iii++) {
                $('#test' + iii).css('display', 'none')
            }
            for (var ii = 5; ii < 9; ii++) {
                $('#test' + ii).css('display', 'block')
            }
        }
        else if (videoNum == 2) {
            for (var iii = 1; iii < 13; iii++) {
                $('#test' + iii).css('display', 'none')
            }
            for (var ii = 9; ii < 13; ii++) {
                $('#test' + ii).css('display', 'block')
            }
        }
        else if (videoNum == 3) {
            for (var iii = 1; iii < 13; iii++) {
                $('#test' + iii).css('display', 'none')
            }
            for (var ii = 1; ii < 5; ii++) {
                $('#test' + ii).css('display', 'block')
            }
        }
        // imaNum=videoNum
        // if(videoNum==3)$('video').css('margin-left','-300px')
        // else $('video').css('margin-left','-533px')
        alreadyVideo = videoNum
        // $('video').css('opacity',1)
        document.getElementsByTagName('video')[0].controls = true
        $('video')[0].play()
        setInterval(function () {
            if ($('video')[0].ended) {
                $('.seemore-btn').css('display', 'block')
            }
        }, 500)
    })
})
$('label').click(function () {
    for (var i = 0; i < 4; i++) {
        this.parentElement.getElementsByTagName('label')[i].style.color = ''
    }
    this.style.color = '#fb3323'
})
$('.start').mouseover(function () {
    this.style.backgroundColor = '#841424'
})
$('.start').mouseout(function () {
    this.style.backgroundColor = '#586a74'
})
$('.upload').mouseover(function () {
    this.style.backgroundColor = '#841424'
})
$('.upload').mouseout(function () {
    this.style.backgroundColor = '#586a74'
})
$('.scoreShow-btn').mouseover(function () {
    this.style.backgroundColor = '#841424'
})
$('.scoreShow-btn').mouseout(function () {
    this.style.backgroundColor = '#586a74'
})
$('.seemore-btn').mouseover(function () {
    this.style.backgroundColor = '#841424'
})
$('.seemore-btn').mouseout(function () {
    this.style.backgroundColor = '#586a74'
})

setInterval(function () {
    var test01 = document.getElementById('test1').getBoundingClientRect().top
    var test02 = document.getElementById('test2').getBoundingClientRect().top
    var test03 = document.getElementById('test3').getBoundingClientRect().top
    var test04 = document.getElementById('test4').getBoundingClientRect().top
    var test05 = document.getElementById('test5').getBoundingClientRect().top
    var test06 = document.getElementById('test6').getBoundingClientRect().top
    var test07 = document.getElementById('test7').getBoundingClientRect().top
    var test08 = document.getElementById('test8').getBoundingClientRect().top
    var test09 = document.getElementById('test9').getBoundingClientRect().top
    var test10 = document.getElementById('test10').getBoundingClientRect().top
    var test11 = document.getElementById('test11').getBoundingClientRect().top
    var test12 = document.getElementById('test12').getBoundingClientRect().top
    if (test01 <= -350 || test01 >= windowHeight) {
        document.getElementById('test1').style.opacity = 0
        document.getElementById('test1').getElementsByTagName('div')[0].style.clipPath = 'circle(0px)';
    }
    else {
        document.getElementById('test1').style.opacity = 1
        document.getElementById('test1').getElementsByTagName('div')[0].style.clipPath = 'circle(600px)';
    }
    if (test02 <= -350 || test02 >= windowHeight) {
        document.getElementById('test2').style.opacity = 0
        document.getElementById('test2').getElementsByTagName('div')[0].style.clipPath = 'circle(0px)';
    }
    else {
        document.getElementById('test2').style.opacity = 1
        document.getElementById('test2').getElementsByTagName('div')[0].style.clipPath = 'circle(600px)';
    }
    if (test03 <= -350 || test03 >= windowHeight) {
        document.getElementById('test3').style.opacity = 0
        document.getElementById('test3').getElementsByTagName('div')[0].style.clipPath = 'circle(0px)';
    }
    else {
        document.getElementById('test3').style.opacity = 1
        document.getElementById('test3').getElementsByTagName('div')[0].style.clipPath = 'circle(600px)';
    }
    if (test04 <= -350 || test04 >= windowHeight) {
        document.getElementById('test4').style.opacity = 0
        document.getElementById('test4').getElementsByTagName('div')[0].style.clipPath = 'circle(0px)';
    }
    else {
        document.getElementById('test4').style.opacity = 1
        document.getElementById('test4').getElementsByTagName('div')[0].style.clipPath = 'circle(600px)';
    }
    if (test05 <= -350 || test05 >= windowHeight) {
        document.getElementById('test5').style.opacity = 0
        document.getElementById('test5').getElementsByTagName('div')[0].style.clipPath = 'circle(0px)';
    }
    else {
        document.getElementById('test5').style.opacity = 1
        document.getElementById('test5').getElementsByTagName('div')[0].style.clipPath = 'circle(600px)';
    }
    if (test06 <= -350 || test06 >= windowHeight) {
        document.getElementById('test6').style.opacity = 0
        document.getElementById('test6').getElementsByTagName('div')[0].style.clipPath = 'circle(0px)';
    }
    else {
        document.getElementById('test6').style.opacity = 1
        document.getElementById('test6').getElementsByTagName('div')[0].style.clipPath = 'circle(600px)';
    }
    if (test07 <= -350 || test07 >= windowHeight) {
        document.getElementById('test7').style.opacity = 0
        document.getElementById('test7').getElementsByTagName('div')[0].style.clipPath = 'circle(0px)';
    }
    else {
        document.getElementById('test7').style.opacity = 1
        document.getElementById('test7').getElementsByTagName('div')[0].style.clipPath = 'circle(600px)';
    }
    if (test08 <= -350 || test08 >= windowHeight) {
        document.getElementById('test8').style.opacity = 0
        document.getElementById('test8').getElementsByTagName('div')[0].style.clipPath = 'circle(0px)';
    }
    else {
        document.getElementById('test8').style.opacity = 1
        document.getElementById('test8').getElementsByTagName('div')[0].style.clipPath = 'circle(600px)';
    }
    if (test09 <= -350 || test09 >= windowHeight) {
        document.getElementById('test9').style.opacity = 0
        document.getElementById('test9').getElementsByTagName('div')[0].style.clipPath = 'circle(0px)';
    }
    else {
        document.getElementById('test9').style.opacity = 1
        document.getElementById('test9').getElementsByTagName('div')[0].style.clipPath = 'circle(600px)';
    }
    if (test10 <= -350 || test10 >= windowHeight) {
        document.getElementById('test10').style.opacity = 0
        document.getElementById('test10').getElementsByTagName('div')[0].style.clipPath = 'circle(0px)';
    }
    else {
        document.getElementById('test10').style.opacity = 1
        document.getElementById('test10').getElementsByTagName('div')[0].style.clipPath = 'circle(600px)';
    }
    if (test11 <= -350 || test11 >= windowHeight) {
        document.getElementById('test11').style.opacity = 0
        document.getElementById('test12').getElementsByTagName('div')[0].style.clipPath = 'circle(0px)';
    }
    else {
        document.getElementById('test11').style.opacity = 1
        document.getElementById('test11').getElementsByTagName('div')[0].style.clipPath = 'circle(600px)';
    }
    if (test12 <= -350 || test12 >= windowHeight) {
        document.getElementById('test12').style.opacity = 0
        document.getElementById('test12').getElementsByTagName('div')[0].style.clipPath = 'circle(0px)';
    }
    else {
        document.getElementById('test12').style.opacity = 1
        document.getElementById('test12').getElementsByTagName('div')[0].style.clipPath = 'circle(600px)';
    }
}, 200)
