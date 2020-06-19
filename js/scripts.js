//BUSINESS LOGIC//

function Quesadilla(customs, size) {
  this.customs = customs;
  this.size = size;
  this.quesadillaPrice = this.price(customs, size);
}

function Name(first, middle, last) {
  this.first = first;
  this.middle = middle;
  this.last = last;
}

function Order() {
  this.Quesadillas = []; 
  this.Names = [];
}

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

Order.prototype.totalPrice = function() {
  let receiptTotal = 0;
  for (var i = 0; i < this.Quesadillas.length; i++) {
    var receipt = this.Quesadillas[i];
    receiptTotal += this.Quesadillas[i].quesadillaPrice;
  }
  return receiptTotal;
};

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
    customsChoice += 4
  }
  $(this).toggleClass("clicked");
  customsChoice++
  $("#customsChoice").text(customsChoice);
});
$(".name").click(function() {
  $(".namePrint").append(newName.nameForm())
  $(".name").hide();
  $(".customer-name").click(function() {
    let first = $(".first-name").val()
    let middle = $(".middle-name").val()
    let last = $(".last-name").val()
    newName.first = first
    newName.middle = middle
    newName.last = last
    newOrder.Names.push(newName)
  })
})

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