function openChildWindow() {
  var childWindow = window.open('child.html', 'childWindow');
  setTimeout(function() {
    childWindow.close();
  }, 5000);
}

openChildWindow()