 (function () {
 const btns = document.querySelectorAll('.btnContainer .btn')
    const images = document.querySelectorAll('.images img')
    btns.forEach((btn)=> {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter
            
            images.forEach((item)=> {
                if (filter === 'showAll') {
                    item.style.display = 'block';   
                }
                else {
                    if(item.classList.contains(filter)){
                        item.style.display = 'block';
                    }

                    else {
                        item.style.display = 'none'; 
                    }

                }
            })
        })
    })
     
})(); 
