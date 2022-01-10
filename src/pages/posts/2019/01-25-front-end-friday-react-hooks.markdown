---
layout: post
title:  "Front-end Friday: React Hooks"
date:   2019-01-25 18:30:00
tags: ['dev', 'react', 'front-end friday']
---

You may have already heard of React Hooks by now. If you're like me, you probably are looking forward to learning more about when/how to use them and trying it out for yourself. You might look at the docs or find some tutorial to follow along until it makes sense. However, it really isn't the same as actually putting it to use yourself, right? 

I've read several tweets about React Hooks and even bookmarked the video where <a href="https://www.youtube.com/watch?v=dpw9EHDh2bMhttps://youtu.be/dpw9EHDh2bM?t=685" target="_blank" rel="noopener">Dan Abramov introduces hooks at React Conf</a>. Based on the tweets I've read, I figured I should be able to utilize hooks in reusable components. I decided to write about my first attempt in using Hooks while watching Dans' video in a kind of stream of consciousness format.

### What are hooks? 
As of React v16.8.0-alpha.0 (React 16.8 official), there are these new things called Hooks that allow for using state and other features without having to write a `Class`. They allow you to reuse state logic with each hook handling a different aspect of it. 

The first one mentioned was `useState` which is used for declaring a state variable - think `this.state` and `this.setState()`. Then, there's `useEffect` - remember some of the logic you'd put in `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`? That's pretty much what's going on there - telling your component to do something after render.

Those are two of the basic hooks and I think a good starting point for getting introduced to this idea. 

### Using state before hooks
I saw someone post that hooks would be useful with accordions and tabs. Unfortunately, the tutorial they linked then went on to build something else so that's how I decided that those are the components I'd build here.

Those types of components could share some logic, right? 

They both can use arrays of objects for their content - a title, id, and content. For functionality, one would click on the title, set it as active, and the CSS would style up that item.

Perhaps an accordion component without using hooks would look something like this:

```jsx
import React, { Fragment, Component } from "react";
import { caretDown, caretUp } from "./constants";
import LoadingComponent from "./loadingSpinner";
import "./styles.css";

export class AccordionWithStateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      activeItem: props.activeItem,
    };
  }

  setActiveItem(id) {
    const selectedId = id === this.state.activeItem ? 0 : id;
    this.setState({ activeItem: selectedId });
  }

  render() {
    if (this.state.items.length < 1) return <LoadingComponent />;

    return (
      <dl className="accordion__container">
        {this.state.items.map(accordionItem => (
          <Fragment key={accordionItem.id}>
            <dt
              className="accordion__header"
              onClick={() => this.setActiveItem(accordionItem.id)}
            >
              {accordionItem.title}
              {this.state.activeItem === accordionItem.id ? caretUp : caretDown}
            </dt>
            <dd
              className={`accordion__content  ${
                this.state.activeItem === accordionItem.id
                  ? "accordion--open"
                  : "accordion--closed"
              }`}
            >
              <p>{accordionItem.content}</p>
            </dd>
          </Fragment>
        ))}
      </dl>
    );
  }
}

export default AccordionWithStateComponent;
```

Then, in some container you'd be passing the props like this:

```jsx
<AccordionWithStateComponent items={someArrayOfObjects} activeItem={1} />
```

The items are being passed as props and there's a function in the component to update the active item in the state. If it's already open, it sets the id as zero which for this examples' sake doesn't exist and leads to it closing the existing active accordion item.

That last bit, I wouldn't want to put into a tab component, though. A tab panel should always be active but that doesn't really matter with an accordion so we will adjust our logic for that.

### Creating a reusable util w/hooks

Since I know how I want both components to work and have identified their shared logic, I can begin to create a function that uses hooks. 

The `useState` hook returns a pair of values: the initial state and the function that updates it - similar to the state example above `this.state = { activeItem: props.activeItem }` and `this.setState({ activeItem: id })`. You use array destructuring to get the values from `useState`.

```jsx
const [activeItem, setActiveItem] = useState(selectedItem);
```

I created `useToggleUtil` which takes two arguments: `type` and `selectedItem`. The latter is the default selected item from the data which is what needs to get passed into the `useState` hook.

```jsx
import { useState, useEffect } from "react";

export const useToggleUtil = (type, selectedItem) => {
  const [activeItem, setActiveItem] = useState(selectedItem);
  const [items, setItems] = useState([]);

  return [items, activeItem, setActiveItem];
};
```

I declared `items` as well which will initially be an empty array but we will set later using `useEffect`.

There's some slight logic modifications I want to add based on what `type` of component is trying to use the function, though. So, instead of passing `setActiveItem`, I'll write another function that and return it instead. 

```jsx
import { useState, useEffect } from "react";

export const useToggleUtil = (type, selectedItem) => {
  const [activeItem, setActiveItem] = useState(selectedItem);
  const [items, setItems] = useState([]);

  const changeActiveItem = id => {
    const isTabs = type === "tabs";
    const isAlreadyActive = activeItem === id;
    const idSelected = isAlreadyActive && !isTabs ? 0 : id;
    setActiveItem(idSelected);
  };

  return [items, activeItem, changeActiveItem];
```

Next, I want to use `useEffect` to populate the `items` array. Once the data is fetched, I pass the array of items to the `setItems` function. The second argument is for dependencies which in this case is only `type`.

```jsx
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://my-json-server.typicode.com/sceendy/fake-json/${type}Items`
      );
      const data = await res.json();
      setItems(data);
    };
    fetchData();
  }, [type]);
```

This hook will also go in the util function I created, `useToggleUtil` before the return statement.

### Using the util

Now that I have completed that function, I can create some components to try it out. Both components should pass their `type` first and then I want them both to start with the first item set as active so I'll pass a `1`.

**SimpleAccordionComponent.jsx**

```jsx
import React, { Fragment } from "react";
import { useToggleUtil } from "./useUtil";
import { caretDown, caretUp } from "./constants";
import LoadingComponent from "./loadingSpinner";
import "./styles.css";

export const SimpleAccordionComponent = () => {
  const [items, activeItem, setActiveItem] = useToggleUtil("accordion", 1);

  if (items.length < 1) return <LoadingComponent />;

  return (
    <dl className="accordion__container">
      {items.map(accordionItem => (
        <Fragment key={accordionItem.id}>
          <dt
            className="accordion__header"
            onClick={() => setActiveItem(accordionItem.id)}
          >
            {accordionItem.title}
            {activeItem === accordionItem.id ? caretUp : caretDown}
          </dt>
          <dd
            className={`accordion__content  ${
              activeItem === accordionItem.id
                ? "accordion--open"
                : "accordion--closed"
            }`}
          >
            <p>{accordionItem.content}</p>
          </dd>
        </Fragment>
      ))}
    </dl>
  );
};

export default SimpleAccordionComponent;
```

**SimpleTabsComponent.jsx**

```jsx
import React from "react";
import LoadingComponent from "./loadingSpinner";
import { useToggleUtil } from "./useUtil";
import "./styles.css";

export const SimpleTabsComponent = () => {
  const [tabs, activeTab, setActiveTab] = useToggleUtil("tabs", 1);

  if (tabs.length < 1) return <LoadingComponent />;

  const createTabs = () =>
    tabs.map(tab => (
      <button
        key={`${tab.id}-tab`}
        role="tab"
        aria-selected={tab.id === activeTab}
        id={`${tab.id}-panel`}
        aria-controls={`${tab.id}-content-panel`}
        onClick={() => setActiveTab(tab.id, "tabs")}
        className={tab.id === activeTab ? "tab tab--selected" : "tab"}
      >
        {tab.title}
      </button>
    ));

  const createTabPanels = () =>
    tabs.map(tab => (
      <div
        key={`${tab.id}-panel`}
        id={`${tab.id}-content-panel`}
        role="tabpanel"
        aria-labelledby={`${tab.id}-tab`}
        className={`tab__panel ${tab.id === activeTab ? "show" : "hide"}`}
      >
        <p style={{ margin: 0 }}>{tab.content}</p>
      </div>
    ));

  return (
    <article>
      <div role="tablist" aria-orientation="horizontal">
        {createTabs()}
      </div>
      {createTabPanels()}
    </article>
  );
};

export default SimpleTabsComponent;
```

As you can see, this allows for simple reusability across components. 

You can see the working result here and mess around with it as you please:

### Result:
<iframe src="https://codesandbox.io/embed/yv1z0z1zmx?autoresize=1&hidenavigation=1&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>