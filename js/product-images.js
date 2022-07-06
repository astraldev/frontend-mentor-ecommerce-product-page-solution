
if(window){
    let img_el = document.querySelectorAll("#main-image")

    let thumbnail = []
    img_el.forEach(img => img.setAttribute('data-index', 0))

    function change_image(direction){
        direction = parseInt(direction)
        return () => {
            let index = parseInt(img_el[0].getAttribute('data-index'))
            index += direction

            if(index < 0) index = images.length - 1
            if(index > images.length - 1) index = 0

            thumbnail.forEach(thumb => thumb.forEach(el => el.classList.remove("active")))
            thumbnail.forEach(thumb => {
                if(thumb[index])
                    thumb[index].classList.add('active')
            })
            img_el.forEach(img=>{
                img.setAttribute('data-index', index)
                img.src = images[index]
            })
        }
    }
    
    function change_image_by_thumbnail(index){
        return () => {
            thumbnail.forEach(thumb => thumb.forEach(thumb => thumb.classList.remove("active")))
            if(index < 0)
            index = images.length - 1
            if(index > images.length - 1)
            index = 0
            
            thumbnail.forEach(thumb => {
                if(thumb[index]) thumb[index].classList.add('active')
            })
            
            img_el.forEach(img=> {
                img.setAttribute('data-index', index)
                img.src = images[index]
            })
        }
    }
    
    document.querySelectorAll('.gallery-button[data-direction]').forEach(btn => {
        btn.addEventListener('click', change_image(btn.getAttribute('data-direction')))
    })

    let caurosel = document.querySelectorAll(".caurosel")
    
    caurosel.forEach((caurosel, ind) => {
        for(let i = 0; i < 5; i++) thumbnail[ind] = []
        for (let i = 0; i < 4; i++){
            index = parseInt(img_el[0].getAttribute('data-index') || 0)

            let img_container = document.createElement("div")
            img_container.id = "thumbnail"
    
            let img = document.createElement("img")
            img.src = thumbnails[i]

            img_container.appendChild(img)
            img_container.tabIndex="1"

            if(i == index) img_container.classList.add("active")

            thumbnail[ind].push(img_container)

            img_container.onclick = change_image_by_thumbnail(i)
            caurosel.appendChild(img_container)
        }
    })
}