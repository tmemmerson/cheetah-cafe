

function Quesadilla(customs, size) {
  this.customs = customs;
  this.size = size
  this.quesadillaPrice = this.price(customs, size)
}

Quesadilla.prototype.price = function() {
  let quesadillaPrice = 15;
  let customsCount = this.customs
  if (this.size === "cub") {
    quesadillaPrice = quesadillaPrice - 7
  } else if (this.size === "bigcat") {
    quesadillaPrice = quesadillaPrice + 5
  } else {
    quesadillaPrice = quesadillaPrice + 1
  }
  let customsPrice = customsCount
  quesadillaPrice = quesadillaPrice + customsPrice;
  return quesadillaPrice;
}

function Order() {
  this.Quesadillas = []
  this.Names = []
}

Order.prototype.totalPrice = function() {
  let receiptTotal = 0
  for (let i = 0; i < this.Quesadillas.length; i++) {
    let single = this.Quesadillas[i]
    receiptTotal += this.Quesadillas[i].quesadillaPrice
  }
  return receiptTotal;
}

function Name(first, middle, last) {
  this.first = first;
  this.middle = middle;
  this.last = last;
}

Name.prototype.printOut = function() {
  let text = '<div class="new-Name">' +
    '<div class="form-group">' +
    '<label for="new-first">first</label>' +
    '<input type="text" class="form-control new-first">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-middle">middle</label>' +
    '<input type="text" class="form-control new-middle">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-last">last</label>' +
    '<input type="text" class="form-control new-last">' +
    '<p class = "Name2 btn btn-warning">Submit Name</p>' +
    '</div>' +
    '</div>';
  return text
}

Order.prototype.printOrder = function() {
  let text = ""
  for (let i = 0; i < this.Quesadillas.length; i++) {
    text += "<li>Quesadilla number: " + (i + 1) + " (notes: " + this.Quesadillas[i].customs + ") size: " + this.Quesadillas[i].size + " $" + this.Quesadillas[i].quesadillaPrice + "</li>"
  }
  text += "<p class = 'totalOrder'>your total order price will be $" + this.totalPrice() + "</p>"
  for (let i = 0; i < this.Names.length; i++) {
    text += "<p> We will call out " + this.Names[0].first + " " + this.Names[0].middle + " " + this.Names[0].last + " when your order's ready</p>"
  };
  return text;
}

$(document).ready(function() {
  let newOrder = new Order()
  let newName = new Name()
  let customsChoice = 0
  $(".btn-warning").click(function() {
    if ($(this).hasClass("clicked") === true) {
      customsChoice -= 2
    }
    $(this).toggleClass("clicked")
    customsChoice++
    $("#customsCount").text(customsChoice)
  });
  $(".Name").click(function() {
    $(".Nameprint").append(newName.printOut())
    $(".Name").hide();
    $(".Name2").click(function() {
      let first = $(".new-first").val()
      let middle = $(".new-middle").val()
      let last = $(".new-last").val()
      newName.first = first
      newName.middle = middle
      newName.last = last
      newOrder.Names.push(newName)
      console.log(newOrder)
    })
  })
  $("form").submit(function(event) {
    let size = $("#sizeList").val()
    let customs = customsChoice
    let newQuesadilla = new Quesadilla(customs, size);
    let finalPrice = newQuesadilla.price(customs, size)
    $("#finalPrice").text(newQuesadilla.price(customs, size))
    newOrder.Quesadillas.push(newQuesadilla);
    event.preventDefault()
  })

  $(".viewOrder").click(function() {
    $(".orderDetails").text("")
    $(".orderDetails").append(newOrder.printOrder())
  })
});