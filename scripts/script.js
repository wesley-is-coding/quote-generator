function change() {
  var newColor = randomColor()
  console.log(newColor)
  var changeList = document.getElementsByName("changeBack")
  var changeArr = Array.prototype.slice.call(changeList)
  changeArr.map(function(item) {
    item.style.backgroundColor = newColor
  })
  document.getElementsByName('changeCol')[0].style.opacity = 1
  document.getElementsByName('changeCol')[0].style.color = newColor
}

function randomColor() {
  return "hsl(" + Math.random() * 360 + ",65%,50%)"
}
                                                       
function newQuote(arr) {
    var choice = arr[Math.floor(Math.random() * arr.length)]
    var author = choice.author;
    choice = choice.quotes[Math.floor(Math.random() * choice.quotes.length)]
    console.log(choice.book.length)
    document.getElementById('theQuote').innerHTML = choice.quote
    if (choice.book.length > 0) {
      document.getElementById('theAuthor').innerHTML = '- ' + author + ', <i>'
      + choice.book + '</i>'
    document.getElementById('twit').setAttribute('href', 'https://twitter.com/intent/tweet?text=' + choice.quote)
    }
    else {
      document.getElementById('theAuthor').innerHTML = '- ' + author
    }
}

$('#quotebutton').on('click', function() {
  $('p').hide().delay(1000).fadeIn(1500);
  $('h5').hide().delay(1000).fadeIn(1500);
});

$('#twit').on('click', function() {
  $('#twit').attr('href', 'https://twitter.com/intent/tweet?text=' + choice)
})
