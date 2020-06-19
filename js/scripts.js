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
function Order() {
  this.Quesadillas = []; //only instance
  this.Names = []; //only instance
}

//prototype price changes relations (+=5/-=2)
Quesadilla.prototype.price = function() {
  let quesadillaPrice = 12;
  let customsCount = this.customs;
  if (this.size === "cub size") {
    quesadillaPrice = quesadillaPrice - 7;
  } else if (this.size === "big cat") {
    quesadillaPrice = quesadillaPrice + 5; {
  } else {
    quesadillaPrice = quesadillaPrice;      
}
  let customsPrice = this.customs;
  quesadillaPrice = quesadillaPrice + customsPrice;
  }
  return quesadillaPrice;
};

//prototype total price ($5.00)
Order.prototype.totalPrice = function() { //for loop
  let receiptTotal = 0;
  for (var i = 0; i < this.Quesadillas.length; i++) {
    var receipt = this.Quesadillas[i];
    receiptTotal += this.Quesadillas[i].quesadillaPrice;
  }
  return receiptTotal;
};

//DOM print quesadilla order details (your quesadilla price + who its for)
Order.prototype.receiptPrintDOM = function() {
  let text = "";
  for (var i = 0; i < this.Quesadillas.length; i++) {
    text += "Quesadilla #" + (i +1) + "notes: " + this.Quesadillas[i].customs + "size: " + this.Quesadillas[i].size + "Receipt total: $" + this.Quesadillas[i].quesadillaPrice + ".00";
  }
  text += "<div class ='receiptTotal'> total here" + this.receiptTotal() + "</div>";
  for (var i = 0; i < this.Names.length; i++) {
    text += "<p> we will announce this order for: " + this.Names[0].first + " " + this.Names[0].middle + " " + this.Names[0].last +".</p>";
  }
  return text;
};

//DOM print user name input details (your first middle last)
Name.prototype.nameForm = function() {
  let text = '<div class="customer-name">' + '<div class="form-group">' + '<label for="first-name">First</label>' + '<input type="text" class="form-control first-name">' + '</div>' + 
  '<div class="form-group">' + '<label for="middle-name">Middle</label>' + '<input type="text" class="form-control middle-name">' + '</div>' +
  '<div class="form-group">' + '<label for="last-name">Last</label>' + '<input type="text" class="form-control last-name">' + '</div></div>';
  return text;
};

//USER LOGIC//


$(document).ready(function() {
let newOrder = new Order();
let newName = new Name();
let customsChoice = 0;
$(".btn-warning").click(function( {
  if ($(this).hasClass("clicked") === true) {
    customsSelected += 4
  }

$("form").submit(function(event) {
  let customs = customsChoice
  let newQuesadilla = new Quesadilla(customs, size);
  let displayPrice = newQuesadilla.price(customs, size)
  let size = $("#sizeList").val()
  $("#displayPrice").text(newQuesadilla.price(customs, size))
  newOrder.Quesadillas.push(newQuesadilla);
  event.preventDefault()
  $(".receiptPrintout").text("")
  $(".receiptPrintout").append("<li>Avery's famous " + newQuesadilla.size + " quesadilla with the notes: " + newQuesadilla.customs + ".</li>")
})
$(".viewOrder").click(function() {
  $(".orderDetails").text("")
  $(".orderDetails").append(newOrder.printOrder())
})
});