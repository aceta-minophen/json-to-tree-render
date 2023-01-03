function createTreeView(json, parentNode, depth) {
    // set the default depth to 0
    depth = depth || 0;

    // iterate through the keys in the JSON object
    for (const key in json) {
        // create a new list item for the key
        let li;

        // if the key is equal to "paragraphs" or "url", create a new list item and append it to the parent node
        if (key === 'paragraphs' || key === 'url') {
            li = document.createElement('li');

            // if the key is "url", create an anchor element and set the href to the value of the key
            if (key === 'url') {
                const a = document.createElement('a');
                a.innerHTML = json[key];
                a.href = json[key];
                a.target = '_blank';  // open the link in a new tab
                a.style.color = 'gray';  // change the color of the text to gray
                li.appendChild(a);
            } else {
                li.innerHTML = json[key];
                li.style.color = 'white';
            }

            parentNode.appendChild(li);
            continue;
        } else {
            li = document.createElement('li');
        }

        // create a div element to hold the key and delete icon
        const div = document.createElement('div');
        div.style.display = 'inline-block';

        // create a span element to hold the key
        const span = document.createElement('span');
        span.innerHTML = key;
        span.style.color = 'white';

        // append the span element to the div
        div.appendChild(span);

        // if the key is not equal to "paragraphs", create a delete icon
        if (key !== 'paragraphs' && key !== 'url') {
            const deleteIcon = document.createElement('i');
            deleteIcon.className = 'delete-icon';
            deleteIcon.innerHTML = '  <i class="fa fa-thin fa-trash"></i>';

            // append the delete icon to the div
            div.appendChild(deleteIcon);

            // add an event listener to the delete icon to delete the node
            deleteIcon.addEventListener('click', function () {
                // delete the node from the JSON object
                delete json[key];

                // remove the node from the tree view
                li.parentNode.removeChild(li);
            });
        }

        // append the div element to the list item
        li.appendChild(div);

        // add the indentation based on the depth
        li.style.paddingLeft = depth * 20 + 'px';

        // create a new unordered list for the child nodes
        const ul = document.createElement('ul');

        // if the value of the key is an object, recursively create a tree view for it
        if (typeof json[key] === 'object' && json[key] !== null) {
            createTreeView(json[key], ul, depth + 1);
        }

        // append the unordered list to the list item
        li.appendChild(ul);

        // hide the child nodes by default
        ul.style.display = 'none';

        // if the unordered list has child nodes, create a collapse/expand icon
        if (ul.childNodes.length > 0 && key !== 'paragraphs' && key !== 'url') {
            const icon = document.createElement('i');
            icon.className = 'collapse-icon';
            icon.innerHTML = '<i class="fa fa-thin fa-caret-right"></i> ';


            li.insertBefore(icon, div);

            // add an event listener to the icon to toggle the visibility of the child nodes
            icon.addEventListener('click', function () {
                // toggle the visibility of the child nodes
                if (ul.style.display === 'none') {
                    ul.style.display = 'block';
                    icon.innerHTML = '<i class="fa fa-thin fa-caret-down"></i> ';
                } else {
                    ul.style.display = 'none';
                    icon.innerHTML = '<i class="fa fa-thin fa-caret-right"></i> ';
                }
            });
        }

        // append the list item to the parent node
        parentNode.appendChild(li);
    }
}