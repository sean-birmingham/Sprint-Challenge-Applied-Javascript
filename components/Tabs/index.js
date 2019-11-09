// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabsEntry = document.querySelector('.topics');

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(request => {
        console.log(request)
        request.data.topics.forEach(topic => {
            tabsEntry.appendChild(Tab(topic))
        });
    })
    .catch(error => {
        console.log('the data was not returned')
    });

function Tab(topics) {
    const tab = document.createElement('div');

    tab.textContent = topics

    tab.classList.add('tab')

    return tab
}