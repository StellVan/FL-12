const $list = $('.list');
const $input = $('#add-input');
const $add = $('#add-submit');
const $search = $('#search-input');

const todos = [
  {
    text: 'Buy milk',
    done: false
  },
  {
    text: 'Play with dog',
    done: true
  }
];

$(document).ready(() => {
  if (!getLocalStorage()) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  refreshTodos();
});

function getLocalStorage() {
  return JSON.parse(localStorage.getItem('todos'));
}

function refreshTodos() {
  let listArray = getLocalStorage();

  if (listArray && listArray.length > 0) {
    $list.children().remove();

    listArray.forEach(el => {
      $list.prepend(addListItem(el.text, el.done));
    });

    addButtonsEvent();
  }
}

$add.click(function(event) {
  event.preventDefault();
  let value = $input.val();

  if (value.length > 0) {
    let listArray = getLocalStorage();
    listArray.push({ text: value, done: false });
    localStorage.setItem('todos', JSON.stringify(listArray));
    $input.val('');

    refreshTodos();
  } else {
    alert('Cannot add empty ToDo!');
  }
});

function addListItem(text, done) {
  let classDone;
  if (done === true) {
    classDone = 'done';
  } else if (done === false) {
    classDone = '';
  }
  return `
  <li class="item">
    <span class="item-text ${classDone}">${text}</span>
    <div class='buttonWrapper'>
      <button class="item-remove">Remove</button>
      <button class="item-done">Done</button>
    </div>
  </li>
  `;
}

function addButtonsEvent() {
  let $remove = $('.item-remove');
  let $done = $('.item-done');

  $remove.click(function() {
    let id = $remove.index(this);
    let listArray = getLocalStorage();

    listArray.splice(-id - 1, 1);
    localStorage.setItem('todos', JSON.stringify(listArray));

    $remove
      .eq(id)
      .parent('.buttonWrapper')
      .parent('.item')
      .remove();

    refreshTodos();
  });

  $done.click(function() {
    let id = $done.index(this);
    let listArray = getLocalStorage();

    listArray[listArray.length - id - 1].done = true;
    localStorage.setItem('todos', JSON.stringify(listArray));

    $done
      .eq(id)
      .parent('.buttonWrapper')
      .siblings('.item-text')
      .addClass('done');

    refreshTodos();
  });
}

$search.on('input', function() {
  let value = $search.val();

  $(`.item:not(:contains(${value}))`).addClass('hidden');
  $(`.item:contains(${value})`).removeClass('hidden');
});
