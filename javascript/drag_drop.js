// DRAG AND DROP---------------------------------------------------------------

var boxes = document.querySelectorAll('#inner-container .dashboard-box');
[].forEach.call(boxes, function(box) {
  box.addEventListener('dragstart', handleDragStart, false);
});

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
}

var boxes = document.querySelectorAll('#inner-container .dashboard-box');
[].forEach.call(boxes, function(box) {
  box.addEventListener('dragstart', handleDragStart, false);
  box.addEventListener('dragenter', handleDragEnter, false);
  box.addEventListener('dragover', handleDragOver, false);
  box.addEventListener('dragleave', handleDragLeave, false);
});

function handleDrop(e) {
  // this / e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // stops the browser from redirecting.
  }

  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node.

  [].forEach.call(boxes, function (box) {
    box.classList.remove('over');
  });
}

var boxes = document.querySelectorAll('#inner-container .dashboard-box');
[].forEach.call(boxes, function(box) {
  box.addEventListener('dragstart', handleDragStart, false);
  box.addEventListener('dragenter', handleDragEnter, false)
  box.addEventListener('dragover', handleDragOver, false);
  box.addEventListener('dragleave', handleDragLeave, false);
  box.addEventListener('drop', handleDrop, false);
  box.addEventListener('dragend', handleDragEnd, false);
});


var dragSrcEl = null;

function handleDragStart(e) {
  // Target (this) element is the source node.

  // if wanted to change element after dropped, would add it below
  // this example changes opacity after the element is dropped
  // this.style.opacity = '0.4';

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}


function handleDrop(e) {
  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same boxumn we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}
