if (window){
    /** Global vars */
    var images = [
        'img/image-product-1.jpg',
        'img/image-product-2.jpg',
        'img/image-product-3.jpg',
        'img/image-product-4.jpg',
    ]
    
    var thumbnails = [
        'img/image-product-1-thumbnail.jpg',
        'img/image-product-2-thumbnail.jpg',
        'img/image-product-3-thumbnail.jpg',
        'img/image-product-4-thumbnail.jpg',
    ]    

    var items_in_cart = [0, []];

    function updateItemInCart(value){
        if(value >= 0){
            items_in_cart[0] = value;
            items_in_cart[1].forEach(fn => {
                if(typeof fn === 'function')
                    fn(items_in_cart[0])
            })
        }
    }

    let watchers = document.querySelectorAll('[data-watch]')
    watchers.forEach(el => {
        let watch_value = el.getAttribute('data-watch');
        let watch_update = el.getAttribute('data-cb')

        if(watch_update && watch_value){
            if(window.hasOwnProperty(watch_value) && window.hasOwnProperty(watch_update)){
                window[watch_value][1] = [...window[watch_value][1], window[watch_update]]
            }
        }
    })

}