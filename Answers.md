# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

- React is a library (not a framework) for building/render UI. Used to developer either mobile apps or single-page
- It tries to solve major problems with managing data without bogging down the DOM. Hence Facebook creating ReactJS
- In short, it is a great way to manipulate the DOM by using it's virtual DOM that doesn't jeapordize the actual DOM

1. What does it mean to think in react?

- To get into the mindset of building a site/app with feasibility

1. Describe state.

- Like props, but exclusive and controlled by the component

1. Describe props.

- They are immutable; read only. Defined, updated, and changed in the conatiner component and passed to child component as data.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

- Side effects are an affect that happens outside of the scope of the component that can either require a cleanup or not.
- Using useState and useEffect hooks
