// Get the HTML elements representing the pins on the map
const izmirPin = document.querySelector('#izmir');
const istanbulPin = document.querySelector('#istanbul');

// Get the HTML element where we will display the list items
const listContainer = document.querySelector('#list-container');

// Define the data for the pins and their corresponding list items
const pinData = [
  {
    id: 'izmir',
    label: 'İzmir',
    items: ['Karşıyaka Bilim Müzesi', 'Arkas Sanat Merkezi', 'Sancar Maruflu Bilim Merkezi', 'Ege Üniversitesi Tabiat Tarihi Müzesi']
  },
  {
    id: 'istanbul',
    label: 'İstanbul',
    items: ['Üsküdar Bilim Merkezi',
     'İstanbul Bilim ve Sanat Merkezi', 
     'İTÜ Bilim Merkezi', 
     "Mimar Sinan Güzel Sanatlar Üniversitesi Tophane-İ Amire Kültür Ve Sanat Merkezi",
    "Beyoğlu Bilim ve Sanat Merkezi",
  "Kadıköy Bilim ve Sanat Merkezi",
  ""]
  }
];

// Function to display the list items for a pin when it's hovered over
function displayListItems(pinId) {
  // Find the pin data that corresponds to the hovered pin ID
  const pin = pinData.find(item => item.id === pinId);
  
  // Clear the previous list items from the container
  listContainer.innerHTML = '';
  
  // Create a new list element with the pin label as its title
  const list = document.createElement('ul');
  const title = document.createElement('h3');
  title.textContent = pin.label;
  list.appendChild(title);
  
  // Add each item in the pin's items array as a list item
  pin.items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  });
  
  // Append the list element to the container
  listContainer.appendChild(list);
}

function locations(){

  listContainer.innerHTML = '';
  const list = document.createElement('ul');
  const title = document.createElement('h3');
  title.textContent = "Bilim Merkezi Noktaları"
  list.appendChild(title)

  pinData.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item.label;
    list.appendChild(listItem);
  });  

  listContainer.appendChild(list);

}

locations()

// Add event listeners for mouseover and mouseout events on the pins
izmirPin.addEventListener('mouseover', () => displayListItems('izmir'));
izmirPin.addEventListener('mouseout', () => locations());

istanbulPin.addEventListener('mouseover', () => displayListItems('istanbul'));
istanbulPin.addEventListener('mouseout', () => locations());
