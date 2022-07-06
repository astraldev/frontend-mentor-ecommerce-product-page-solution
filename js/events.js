if(window){
/**
 * Cart Events
 */
let cart_input = document.querySelector('#cart-item-count');
function cartItem(increment){
    return () => {
        let value = parseInt(cart_input.value)
        value += parseInt(increment)
        if(value >= 0 && value < cart_input.max){
            cart_input.value = value
            cart_input.onchange()
        }
    }
}

function toggleNav(){
    document.querySelector(".nav-list").classList.toggle('active')
}

function addToCart(el){
    val = el.value
    window.updateItemInCart(val);
}

function updateCartSpan(value){
    let btn = document.getElementById('cart-btn')
    let span = document.createElement('span')
    let child = []

    let children = btn.children
    for(let ch of children){
        child.push(ch)
    }

    child.forEach(el => {
        if(el.classList.contains('cart-items-amount'))
            span = el
    })

    span.classList.add('cart-items-amount')
    span.innerText = value
    if(value > 0){
     btn.appendChild(span)
    }else{
        span.remove()
    }
}

function toggleClass(target, klass){
    if(target && klass)
        document.querySelector(target).classList.toggle(klass)
}
function removeClass(target, klass){
    if(target && klass)
        document.querySelector(target).classList.remove(klass)
}

function updateCart(value){
    let cart_content_box = document.getElementById('cart-content')

    /** Empty cart box */
    let cart_empty = document.createElement("div")
    cart_empty.innerText = "Your cart is empty."
    cart_empty.classList.add("cart-empty")
    /** Cart Item */

    let cart_item = document.createElement('div')
    cart_item.classList.add("cart-item")

    let cart_img = document.createElement('img')
    cart_img.src = window.images[0]

    let cart_item_desc = document.createElement('div')
    let cart_item_title = document.createElement('div')
    let cart_item_cost = document.createElement('div')
    cart_item_cost.classList.add("cart-item-cost")

    cart_item_desc.classList.add("cart-item-desc")
    cart_item_desc.appendChild(cart_item_title)
    cart_item_desc.appendChild(cart_item_cost)

    let remove_btn = document.createElement('button')
    remove_btn.classList.add('ico')
    remove_btn.classList.add('ico-delete')
    remove_btn.classList.add('remove')

    cart_item.appendChild(cart_img)
    cart_item.appendChild(cart_item_desc)
    cart_item.appendChild(remove_btn)

    /** Checkout button */
    let checkout = document.createElement('button')
    checkout.classList.add('checkout')
    checkout.innerText = 'Checkout'

    /** Clear Cart */
    let children = document.getElementById('cart-content').childNodes
    for(let ch of children) {
        ch.remove()
    }
    children = document.getElementById('cart-content').children
    for(let ch of children) {
        ch.remove()
    }

    if(value == 0){
        /** Append Empty Cart box */
        cart_content_box.appendChild(cart_empty)
    }else{
        let item_name = document.querySelector("#prod-name").innerText;
        let item_cost = parseFloat(document.querySelector('[data-price]').getAttribute('data-price'))

        cart_item_title.innerText = item_name
        
        let span_cost = document.createElement("span")
        span_cost.innerText = `$${item_cost.toFixed(2)} x ${value}`
        let total_cost = document.createElement("span")
        total_cost.innerText = `$${(item_cost*value).toFixed(2)}`

        cart_item_cost.appendChild(span_cost)
        cart_item_cost.appendChild(total_cost)
        cart_content_box.appendChild(cart_item)  
        
        cart_content_box.appendChild(checkout)
        window.updateIcons()
    }
}

}