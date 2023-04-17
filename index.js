var reson= document.querySelectorAll('.reson1')

reson.forEach((n,j) =>{
    n.addEventListener('click',()=>{
        n.classList.toggle('cliki')
    })
})

// hlyday-------

var totalB = document.querySelector('.total')
var taken = document.querySelector('.teken')
var told = document.querySelector('.told')

taken.addEventListener("input", (event) => {
    var hisab = parseInt(totalB.value) - parseInt(taken.value)
    told.value = hisab;
    console.log(taken.value)
    if(taken.value === ''){
        told.value = parseInt(20);
    }
    if(told.value <= 0){
        told.value = 0
        console.log('change')
    }
});




var inputedd = document.querySelectorAll('.input')
for( i = 0 ; i<inputedd.length ; i ++){

    inputedd[i].addEventListener("focus", function() {
        var parent = this.parentNode
        console.log(parent)
        parent.style.border = '1px solid rgb(21, 103, 255)'
    })
    inputedd[i].addEventListener("valid", function() {
        var parent = this.parentNode
        console.log(parent)
        parent.style.border = '1px solid rgb(21, 103, 255)'
    })
    inputedd[i].addEventListener("focusout", function() {
        var parent = this.parentNode
        console.log(parent)
        parent.style.border = '1px solid '
    })
}








var starDate = document.querySelector('.fromDate')
var endDate = document.querySelector('.toDate')


starDate.addEventListener('input',()=>{
    var formdate = new Date(document.querySelector('.fromDate').value)
    var todate = new Date(document.querySelector('.toDate').value)
    const timeDiff = Math.abs(todate.getTime() - formdate.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    taken.value = daysDiff + 1
    
    var hisab = parseInt(totalB.value) - parseInt(taken.value)
    told.value = parseInt(hisab);
    if(told.value <= 0){
        told.value = 0
        console.log('change')
    }
})
endDate.addEventListener('input',()=>{
    var formdate = new Date(document.querySelector('.fromDate').value)
    var todate = new Date(document.querySelector('.toDate').value)
    const timeDiff = Math.abs(todate.getTime() - formdate.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    // console.log(daysDiff + ` ${daysDiff + 1}`)
    taken.value = daysDiff + 1
    var hisab = parseInt(totalB.value) - parseInt(taken.value)
    told.value = parseInt(hisab);
    if(told.value <= 0){
        told.value = 0
        console.log('change')
    }
})

// var dates = []
// const result = (j) =>{
//     if(dates.length == 2){
//         dates[0] = j
//     }else{

//         dates.push(j)
//     }
//     console.log(dates)

// }



