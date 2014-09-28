function handleDragStart(e) {
  this.style.opacity = '0.4';  // this / e.target is the source node.
}

var box = document.querySelectorAll('#dashboard-box');
[].forEach.call(box, function(box) {
  box.addEventListener('dragstart', handleDragStart, false);
});
