'use strict';

let mainNode = document.getElementById('node');
let spinner = document.querySelector('.spinner');
let userPosts = document.getElementById('userPosts');
let userEdit = document.getElementById('userEdit');

fetchUserList();

function fetchUserList() {
  spinner.classList.remove('d-none');
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data.forEach(el => renderUser(el)))
    .catch(err => {
      throw new Error(err.message);
    })
    .finally(() => {
      spinner.classList.add('d-none');
    });
}

function renderUser(data) {
  let { id, name, username, email, address, phone, website, company } = data;
  let { street, suite, city, zipcode, geo } = address;
  let { lat, lng } = geo;
  let { name: companyName, catchPhrase, bs } = company;
  let tags = bs.split(' ').join(', ');

  let wrapper = document.createElement('div');
  let nickWrapper = document.createElement('p');
  let nickName = document.createElement('span');
  let editButton = document.createElement('button');
  let deleteButton = document.createElement('button');

  wrapper.id = id;
  wrapper.classList.add('userWrapper');

  nickName.innerText = `${username}`;
  nickName.classList.add('nickname');
  nickName.addEventListener('click', () => {
    showUserPosts(event, id);
  });

  nickWrapper.innerText = 'Nickname: ';
  nickWrapper.append(nickName);

  editButton.type = 'button';
  editButton.innerText = 'Edit';
  editButton.classList.add('editButton', 'btn', 'btn-primary');
  editButton.id = id;
  editButton.addEventListener('click', () => {
    editUser(event, data);
  });

  deleteButton.type = 'button';
  deleteButton.innerText = 'Delete';
  deleteButton.classList.add('deleteButton', 'btn', 'btn-danger');
  deleteButton.id = id;
  deleteButton.addEventListener('click', () => {
    deleteUser(event, id);
  });

  let userHtml = `
  <p>Name: ${name};</p>
  <p>Email: ${email};</p>
  <p>Adress: ${city}; ${street}; ${suite}; zip: ${zipcode};</p>
  <p>Coordinates: ${lat}, ${lng};</p>
  <p>Phone: ${phone};</p>
  <p>Website: <a href=${website}>${website}</a>;</p>
  <p>Company: ${companyName}, ${catchPhrase}; ${tags};</p>
  `;

  wrapper.append(nickWrapper);
  wrapper.insertAdjacentHTML('beforeend', userHtml);
  wrapper.append(editButton, deleteButton);
  mainNode.append(wrapper);
}

function deleteUser(event, id) {
  spinner.classList.remove('d-none');
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE'
  })
    .then(() => event.target.parentNode.classList.add('delete'))
    .then(() => console.log(`User ${id} deleted`))
    .catch(err => {
      throw new Error(err.message);
    })
    .finally(() => spinner.classList.add('d-none'));
}

function editUser(event, data) {
  spinner.classList.remove('d-none');
  mainNode.classList.add('d-none');
  userEdit.classList.remove('d-none');

  let { id, name, username, email, address, phone, website, company } = data;
  let { street, suite, city, zipcode, geo } = address;
  let { lat, lng } = geo;
  let { name: companyName, catchPhrase, bs } = company;

  let submitButton = document.createElement('button');
  let backButton = document.createElement('button');
  submitButton.innerText = 'Submit';
  backButton.innerText = 'Back';
  submitButton.classList.add('btn', 'btn-primary');
  backButton.classList.add('btn', 'btn-warning');

  let userEditHtml = `
  <p>Username: <input class="usernameEdit" type=text value="${username}"></p>
  <p>Name: <input class="nameEdit" type=text value="${name}"></p>
  <p>Email: <input class="emailEdit" type=text value="${email}"></p>
  <div class="subInput">Adress: 
  <p>City: <input class="cityEdit" type=text value="${city}"></p>
  <p>Street: <input class="streetEdit" type=text value="${street}"></p>
  <p>Suite: <input class="suiteEdit" type=text value="${suite}"></p>
  <p>Zip: <input class="zipEdit" type=text value="${zipcode}"></p>
  </div>
  <p>Coordinates: <input class="latEdit" type=text value="${lat}"> : <input class="lngEdit" type=text value="${lng}"></p>
  <p>Phone: <input class="phoneEdit" type=text value="${phone}"></p>
  <p>Website: <input class="websiteEdit" type=text value="${website}"></p>
  <div class="subInput">Company: 
  <p>Name: <input class="companyEdit" type=text value="${companyName}"></p>
  <p>Catch phrase: <input class="catchEdit" type=text value="${catchPhrase}"></p>
  <p>BS: <input class="bsEdit" type=text value="${bs}"></p>
  </div>
  `;

  submitButton.addEventListener('click', () => {
    submitChanges(event, id);
  });
  backButton.addEventListener('click', () => {
    backToList();
  });

  userEdit.insertAdjacentHTML('beforeend', userEditHtml);
  userEdit.append(submitButton, backButton);

  spinner.classList.add('d-none');
}

function submitChanges(event, id) {
  spinner.classList.remove('d-none');

  let dataSubmit = {
    id: id,
    name: $('.nameEdit').val(),
    username: $('.usernameEdit').val(),
    email: $('.emailEdit').val(),
    address: {
      street: $('.streetEdit').val(),
      suite: $('.suiteEdit').val(),
      city: $('.cityEdit').val(),
      zipcode: $('.zipEdit').val(),
      geo: {
        lat: $('.latEdit').val(),
        lng: $('.lngEdit').val()
      }
    },
    phone: $('.phoneEdit').val(),
    website: $('.websiteEdit').val(),
    company: {
      name: $('.companyEdit').val(),
      catchPhrase: $('.catchEdit').val(),
      bs: $('.bsEdit').val()
    }
  };

  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(dataSubmit),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
    .then(() => {
      console.log(`User ${id} updated`);
    })
    .catch(err => {
      throw new Error(err.message);
    })
    .then(() => {
      backToList();
    })
    .finally(() => {
      spinner.classList.add('d-none');
    });
}

function backToList() {
  mainNode.classList.remove('d-none');
  userEdit.innerText = '';
  userEdit.classList.add('d-none');
  userPosts.classList.add('d-none');
}

function showUserPosts(event, id) {
  mainNode.classList.add('d-none');
  userPosts.classList.remove('d-none');

  spinner.classList.remove('d-none');
  let urls = [
    `https://jsonplaceholder.typicode.com/users/${id}/posts`,
    `https://jsonplaceholder.typicode.com/users/${id}/comments`
  ];

  Promise.all(urls.map(url => fetch(url)))
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(data =>
      data[0].forEach(el =>
        postsRender(
          el,
          data[1].filter(element => element.postId === el.id)
        )
      )
    )
    .catch(err => {
      throw new Error(err.message);
    })
    .finally(() => {
      spinner.classList.add('d-none');
    });
}

function postsRender(post, comment) {
  let { title, body } = post;
  let postWrapper = document.createElement('div');
  let commentWrapper = document.createElement('div');

  postWrapper.classList.add('postWrapper');
  commentWrapper.classList.add('commentsWrapper');

  let postsHtml = `
  <p class="postTitle">${title}</p>
  <p>${body}</p>
  `;

  comment.forEach(el =>
    commentWrapper.insertAdjacentHTML('beforeend', commentRender(el))
  );

  postWrapper.insertAdjacentHTML('beforeend', postsHtml);
  postWrapper.append(commentWrapper);
  userPosts.append(postWrapper);
}

function commentRender(comment) {
  let { name, email, body } = comment;
  let result = `
    <div class="commentWrapper">
    <p class="commentName"> - ${name}</p>
    <p class="commentEmail">${email}</p>
    <p class="commentText">${body}</p>
    </div>`;

  return result;
}
