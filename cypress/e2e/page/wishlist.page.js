class Favourites {

  //add single product
  get pageTitle() { return ('.chakra-heading.css-1jhlc8u') }
  get productTitle() { return ('div[id="product-0"] p[class="chakra-text css-1n64n71"]') }
  get wishlistIcon() { return ('div[id="product-0"] div[class="css-1m8iww1"]') }
  get favouriteBtn() { return ('button[id="drawer-favorite"] p[class="chakra-text css-0"]') }

  // get addTocartBtn() { return ('button[type="button"][data-item-id="quality-hat-model"]') }
  get addedMsg() { return ('#toast-5-title') }
  get removedMsg() { return ('#toast-8-title') }



  //add multiple products
  get pageTitle() { return ('.chakra-heading.css-1jhlc8u') }
  get product2Title() { return ('div[id="product-2"] p[class="chakra-text css-1n64n71"]') }
  get wishlist2Icon() { return ('div[id="product-2"] div[class="css-1m8iww1"]') }

  // get addTocart2Btn() { return ('.chakra-button.snipcart-add-item.css-betff9[data-item-id="quality-mousepad"]') }
  get addedMsg() { return ('#toast-5-title') }
  get removedMsg() { return ('#toast-8-title') }

  //Remove from Favourites
  get removedBtn() { return ('#toast-8-title') }

  // View favourites
  get favTitle() { return ('.chakra-heading.css-11cq7yk') }
  get emptyCart() { return ('.chakra-text.css-jneyc') }

}
export default new Favourites()