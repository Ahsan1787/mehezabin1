var Istatus = document.querySelector('h2')

var add = document.querySelector('#add')

var remove = document.querySelector('#remove')


add.addEventListener('click', ()=>{
    Istatus.innerHTML = 'Friend'

    Istatus.style.color = 'green'
})

remove.addEventListener('click',()=>{
    Istatus.innerHTML = 'You are an idiot'
    Istatus.style.color = 'red'
})
