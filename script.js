// Function to fetch and process JSON data
function fetchProjects() {
    // Fetch the JSON file
    fetch('data.json')
        .then(response => response.json()) // Parse JSON response
        .then(data => {
            // Select the main element
            const projectsElement = document.querySelector('#projects');

            // Iterate over each project in the JSON data
            data.projects.forEach((project) => {
                // Create HTML elements for each project
                const article = document.createElement('article');
                const header = document.createElement('header');
                const h2 = document.createElement('h2');
                const p = document.createElement('p');
                const div = document.createElement('div');

                // Set content for the HTML elements
                h2.textContent = project.title;
                p.textContent = project.description;

                // Add buttons to the div
                for (let i = 1; i <= 3; i++) {
                    const button = document.createElement('button');
                    button.textContent = i;
                    div.appendChild(button);
                }

                // Append elements to the article
                header.appendChild(h2);
                article.appendChild(header);
                article.appendChild(p);
                article.appendChild(div);

                // Append article to the main element
                projectsElement.appendChild(article);
            });

            // Select the announcements element
            const announcementsElement = document.querySelector('#announcements');

            // Iterate over each project in the JSON data
            data.announcements.forEach((announcement, index) => {
                // Create HTML elements for each project
                const article = document.createElement('article');
                const header = document.createElement('header');
                const h3 = document.createElement('h3');
                const p = document.createElement('p');

                // Set content for the HTML elements
                h3.textContent = announcement.title;
                p.textContent = announcement.description;

                // Append elements to the article
                header.appendChild(h3);
                article.appendChild(header);
                article.appendChild(p);

                // Append article to the main element
                announcementsElement.appendChild(article);
            });

            // Process trending users
            const trendingElement = document.getElementById('trending');
            data.trending.forEach((user) => {
                const div = document.createElement('div');
                div.classList.add('trending-user');

                const img = document.createElement('img');
                img.src = user.avatar;
                img.alt = user.username + "'s avatar";
                div.appendChild(img);

                const username = document.createElement('p');
                username.textContent = '@' + user.username;
                div.appendChild(username);

                const bio = document.createElement('p');
                bio.textContent = user.bio;
                div.appendChild(bio);

                trendingElement.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Call fetchProjects function when the page is loaded
window.addEventListener('load', fetchProjects);
