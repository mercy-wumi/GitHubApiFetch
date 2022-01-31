'use strict'
//https://api.github.com/users/repos

function findRepos(username) {
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(responseJson => displayRepos(responseJson))
}

function displayRepos(responseJson) {
    console.log(responseJson);
    $('#result-container').html('');
    $('#result-container').append(`
            <div id='results'>
            <img src='${responseJson.avatar_url}' alt='git-avatar' />
            <div id='git-info'>
                <p>Name: ${responseJson.name}</p>
                <p>Number of public repos: ${responseJson.public_repos}</p>
                <a href='${responseJson.html_url}'>${responseJson.html_url}</a>
            </div>
            </div>
  `
    )
}

function watchForm() {
    $('#form').submit(event => {
        event.preventDefault();
        const username = event.target.username.value;
        findRepos(username)
        event.target.username.value = ''
    })
}

$(function () {
    console.log("My App is loaded! Submission awaits!")
    watchForm()
})