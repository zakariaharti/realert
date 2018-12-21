# Realert
[![npm](https://img.shields.io/npm/v/realert.svg?style=for-the-badge)](https://www.npmjs.com/package/realert)
 [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/zakariaharti/realert/blob/master/LICENSE.md)
[![Storybook](https://img.shields.io/badge/docs-storybook-pink.svg?style=for-the-badge)](https://zakariaharti.github.io/realert/)
[![style: styled-components](https://img.shields.io/badge/style-styled--components-%23d1a05c.svg?style=for-the-badge)](https://github.com/styled-components/styled-components)

Sweet simple JavaScript alert alternative for React built with styled-components

![alt text](https://github.com/zakariaharti/realert/raw/master/src/images/realert.gif)

## Table of contents

* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
* [API documentation](#api-documentation)
* [Contributing guide](#contributing-guide)
* [License](#license)

## Demo

Check out the [demo](https://zakariaharti.github.io/realert/)

## Installation

**using npm**

```
npm install realert --save
```

**using yarn**

```
yarn add realert
```

## Usage

Follow this simple steps to integrate realert to your application.

### Integrate `Alert` React component

``` js
import React from 'react';
import Alert from 'realert';

class MyComponent extends React.Component{
  state = {
   isOpen: false,
   alertData: {
     title: "this is title",
     content: "this is content",
     level: "this is level",
     icon: "",
     allowHTML: false,
   }
  };

  myRef = React.createRef();

  close = () => this.myRef.current.close();

  open = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render(){
    return(
      <div>
        <button onClick={this.open()}>click me!</button>
        <div>
          <Alert
            ref={this.myRef}
            isOpen={this.state.isOpen}
            {...this.state.alertData}
          />
        </div>
     </div>
  );
}
}
```

## API Documentation

* [Objects](https://github.com/zakariaharti/realert#objects)
    * [Alert](https://github.com/zakariaharti/realert#notification)
    * [Alert button](https://github.com/zakariaharti/realert#realert-button)
* [Customize styling](https://github.com/zakariaharti/realert#customize-styling)

### Objects

#### Notification

| Property     | Type             | Default | Description |
| ------------ | ---------------- | ------- | ----------- |
| isOpen           | Boolean |  false       | this prop is the only required . use it to open or close the Alert component |
| title        | String           |         | Title of the Alert. it can be text or custom HTML if allowHTML is true |
| content      | String           |         | content of the Alert, it can be text or custom HTML if allowHTML is true |
| icon       | null | null | display an icon available options : info, success, warning, error.|
| buttons      | Array            |         | Array of [buttons](https://github.com/zakariaharti/realert#realert-buttons) objects. |
| alignButtons      | string            |         | align buttons . options : center, left, right.
| onAdd        | Function         |         | Function executed at component lifecycle : `componentDidMount` |
| onRemove     | Function         |         | Function executed at component lifecycle : `componentWillUnmount` |
| allowHTML    | Boolean          | false   | Allow HTML in title and message of the notification |
| overlayStyles      | string            |         | add custom styles to the overlay html div.
| containerStyles      | string            |         | add custom styles to the overlay html div.
| contentStyles      | string            |         | add custom styles to the content of the alert.
| titleStyles     | string            |         | add custom styles to the title of the alert.
| buttonStyles      | string            |         | add custom styles to the button of the alert.
| footerStyles      | string            |         | add custom styles to the footer html div.

#### Notification button

| Property     | Type     | Default | Description |
| ------------ | :------: | :-----: | ----------- |
| label         | String   |         | Title of the button |
| type      | String |         | type of the button . 'comfirm', 'cancel', 'danger'  |
| action      | Function |         | Function executed when user click on it |

### Customize styling

example

``` js
import React from 'react';
import Alert from 'realert';

class MyComponent extends React.Component{
  state = {
   isOpen: false,
   alertData: {
     icon: "success",
     title: "this is title",
     content: "this is content",
     level: "this is level",
     icon: "",
     allowHTML: false,
     overlayStyles: `
       background: green
     `,
     containerStyles: `
       background-color: red;
       display: flex;
     `,
     titleStyles: `
       color: green;
     `,
     contentStyles: `
       color: yellow;
     `,
     buttonStyles: `
       color: red;
       background: white;
       padding: 10px 25px;

       &:hover{
         background: green;
       }
     `
   }
  };

  myRef = React.createRef();

  close = () => this.myRef.current.close();

  open = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render(){
    return(
      <div>
        <button onClick={this.open()}>click me!</button>
        <div>
          <Alert
            ref={this.myRef}
            isOpen={this.state.isOpen}
            {...this.state.alertData}
          />
        </div>
     </div>
  );
}
}
```
## Contributing guide

All kinds of contributions (enhancements, new features, stories, documentation & bugs reporting) are welcome.

### Setting up your environment

```
# clone repository
https://github.com/zakariaharti/realert.git

cd realert

# install dependencies

** yarn **
yarn install

** npm **
npm install

# Launch demo at http://localhost:6006
npm start
```

Here is the list of the available npm scripts :

| `npm run <script>`   | Description |
| -------------------- | ----------- |
| storybook                | Launch demo at http://localhost:6006 |
| test                 | Run tests with jest |
| test:coverage        | Run tests with jest and generate coverage report (HTML and LCOV) |
| build                | run build for production env  |
| build-storybook      | build stories and generate a static files ready for deployment |

Example :

```
npm run compile
```

### Pull requests  ##

All pull requests must be done on the **master** branch.

Before a pull request :

 - Don't forget to update README or documentation if it's necessary
 - Check code status with `npm run webpack`
 - Run tests with `npm run test`
 - If you made styles changes or any changes related to user interfaces, launch demo with `npm start` to check the result in the browser. Check it on all possible browsers that you have. (Precise the list in the PR)

## License

realert is under [MIT License](https://github.com/zakariaharti/realert/blob/master/LICENSE.md)
