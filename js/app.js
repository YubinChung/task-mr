
const body = document.querySelector('#body');
let cartItems = localStorage.getItem('data');
let count;

function screenSize() {
  let SCREEN_WIDTH = window.innerWidth;
  if(SCREEN_WIDTH < 768){
    $('#body').addClass('mobile').removeClass('pc')
  } else {
    $('#body').addClass('pc').removeClass('mobile')
  }
  setMobileEvt()
}

function setMobileEvt() {
  // set CLICK event to mycart button
  $('#body.mobile #btn-mycart').on("click", ()=>{
    $('#btn-mycart, #mycart').toggleClass('active')
  })
  // set HOVER event to mycart button
  $('#body.pc .header__right-nav').hover( ()=>{
    $('#btn-mycart, #mycart').toggleClass('active')
  }) 
  
}

function setEvt() {
  // set CLICK event to variant items 
  $('.varient__list button').on('click', (e) => {
    $(e).addClass('active');
    $(e).siblings('.active').removeClass('active');
  });

  // set CLICK event to add_to_cart button
  $('#add_to_cart').on('click', ()=>{
    let variant = $('#variant_wrap').length === 1 ? true : false;
    let item_value = $('.varient__list button.active').attr('data-value');

    if( variant && item_value == undefined ){
      alert('Please choose size to proceed'); return false;
    }else{
      // setLocalStorage(item_value);
    }
  })

  // set variant buttons
  $('.varient__list button').on('click', (e)=>{
    $(e.currentTarget).toggleClass('active').siblings('.active').removeClass('active')
  });
   
}

// function setLocalStorage(val){
//   let arr = count !== 0 ? cartItems : [];
//   let data = {
//     'title': $('#item__title').text(),
//     'quantity' : 1,
//     'size' : val
//   }
//   arr.push(data);
//   localStorage.setItem('data', JSON.stringify(arr));
  
//   setCart(arr);
// }

// function setCart(arr = null){
//   getCartItems = localStorage.getItem('data');
//   cartItems = JSON.parse(getCartItems)
//   console.log('cartItems', cartItems)
//   count = cartItems.length !== 0 && arr == null ? cartItems.length : 0;
//   $('#cart_item_count').text(count)
//   if (count !== 0){
//     for (let i = 0 ; i < count; i++ ){
//       $('#mycart').append('<li><a href="javascript:void(0);" class="mycart__item"><img src="images/classic-tee.jpg" alt="" /><h6>Classic Tee</h6><p><span class="quantity">1</span> <span class="price_info"><span class="unit">$</span><span class="price">75.00</span></span></p><p>Size: <span class="size">'+cartItems[i].size+'</span></p></a></li>')
//     }
    
//   } 
// }

// window onLoad init function 
function init() {
  window.onresize = () => screenSize(); // window resize function 
  screenSize(); // get landing window width at first time
  setEvt(); // set event
  // setCart(); // set cart
}