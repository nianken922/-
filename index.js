const content=document.getElementById('content')
const date=document.getElementById('date')
const time=document.getElementById('time')
const addedBtn=document.getElementById('addedBtn')
const deleteBtn=document.getElementById('deleteBtn')
const list=document.getElementById('list')

const listContent=[]


function render() {
    let htmlStr=""
    listContent.forEach(function (params) {
        htmlStr=htmlStr+`
        <div class="params" >
        <div>
            <p>內容:${params.content}</p>
            <p>時間:${params.date}${params.time}</p>
        </div>
   </div>
        `
    })
   
    list.innerHTML = htmlStr
}

addedBtn.addEventListener('click',function(){
    
    listContent.push({
        content:content.value,
        date:date.value,
        time:time.value
    })

    render()
})

deleteBtn.addEventListener('click',function () {
    listContent.pop()    
    render()
})