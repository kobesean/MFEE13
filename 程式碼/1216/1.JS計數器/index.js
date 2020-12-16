const total = document.getElementById('total')

total.addEventListener('click', function(event){
    total.innerHTML = +total.innerHTML + 1
})