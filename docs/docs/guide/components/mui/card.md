# Card

Please visit [MUI Card Docs](https://mui.com/material-ui/react-card/) for a proper explanation of the `Card` component.

## How to use Text Button inside Card Actions

If you are using a text button inside the `CardActions` component, you need to add the `.card-actions-dense` class along with the `CardActions` component; otherwise, it will break the alignment.

- Without the `.card-actions-dense` class

  ![Card image 1](/images/misc/card-actions-with-no-class.png)

- With the `.card-actions-dense` class

  ![Card image 2](/images/misc/card-actions-with-class.png)

Here is the example of how to use the class mentioned above:

```tsx
<Card>
  <CardContent>...</CardContent>
  // highlight-next-line
  <CardActions className='card-actions-dense'>
    <Button variant='text'>Button</Button>
  </CardActions>
</Card>
```
