//BUSINESS LOGIC//

//quesadilla price elements (spicy/meat/vegetarian)
function Quesadilla(customs, size) {
  this.customs = customs;
  this.size = size;
  this.quesadillaPrice = this.price(customs, size);
}

//name input elements (first middle last)
function Name(first, middle, last) {
  this.first = first;
  this.middle = middle;
  this.last = last;
}

//empty arrays for push customer choices to (quesadillas/names)

//prototype price changes relations (+=5/-=2)

//prototype total price ($5.00)

//DOM print quesadilla order details (your quesadilla price)

//DOM print user name input details (your first middle last)

//USER LOGIC//

