# json-to-tree-render

A JavaScript library for rendering a tree view of a JSON object.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the `json-to-tree-render` package, run the following command:

```
npm install json-to-tree-render
```


## Usage

To use the `json-to-tree-render` package, you can include the CDN `https://unpkg.com/json-to-tree-render@1.0.2/src/index.js` file in your HTML file and call the `createTreeView` function with the JSON object and root element as arguments.

For rendering icons, we also use the stylesheets added to the headers.

```js
<!-- index.html -->

<!DOCTYPE html>
<html>

<head>
    <title>My Tree View</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://use.fontawesome.com/5d5a7b196b.js"></script>
</head>

<body style="background-color:black;">

    <!-- include the bundle file in a script tag -->
    <script src="https://unpkg.com/json-to-tree-render@1.0.2/src/index.js"></script>

    <!-- create a root element for the tree view -->
    <div id="root" style="color: white;"></div>

    <script>
        const json = {
            "1": {
                "1.1": {
                    "1.1.1": "Hello world"
                }
            },
            "2": "hello",
            "3": "world"
        };

        // get the root element
        const root = document.getElementById('root');

        // create the tree view
        createTreeView(json, root);

    </script>

</body>

</html>
```

## API Reference
`createTreeView(json: Object, container: HTMLElement)` Renders a tree view of the JSON object in the specified container element.

**Arguments**
- `json` (Object): The JSON object to render as a tree view.
- `container` (HTMLElement): The root element in which to render the tree view.

**Returns**
- void

## Contributing
To contribute to the json-to-tree-render package, please follow these guidelines:
 - Fork the repository.
 - Create a new branch for your changes.
 - Make your changes and commit them to your branch.
 - Push your branch to your forked repository.
 - Create a pull request from your forked repository to the json-to-tree-render repository.
 
## License

This project is licensed under the GNU General Public License v3.0.

The GNU General Public License (GPL) is a free, copyleft license used primarily for software. The GPL requires that any modifications or additions to the software must also be made available under the GPL.

For more information, see the GNU General Public License at [https://www.gnu.org/licenses/gpl-3.0.html](https://www.gnu.org/licenses/gpl-3.0.html).
