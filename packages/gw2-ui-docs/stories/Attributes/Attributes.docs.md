# Attributes

Renders Guild Wars 2 attributes.

<!-- STORY -->

The determined attributes will be passed to the `children` function.  
Use it like so:

```jsx
<Attributes level={80} items={[37131]}>
  {(attributes) => {
    const {
      base: baseAttributes,
      items: {
        attributes: itemAttributes,
        errors: itemErrors,
        loading: itemLoading,
      },
    } = attributes

    // Render attributes
    return JSON.stringify({
      baseAttributes,
      itemAttributes,
      itemErrors,
      itemLoading,
    })
  }}
</Attributes>
```
