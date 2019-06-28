const defaultMarkdown = `
# Heading level 1 \n
## Heading level 2 \n
###### Heading level 6 \n

*This text will be italic*\n 
_This will also be italic_\n 
**This text will be bold**\n 
__This will also be bold__\n 
_You **can** combine them_

## Inline code

I think you should use \` <addr>\` element here instead.

## Block Code

\`\`\`javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
\`\`\`

## BlockQuotes

As Kanye West said:
> We are living the future so
> the present is our past.

## Links

[Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

## Unordered List
* Item 1
* Item 2
  * Item 2a
  * Item 2b

## Ordered List
1. Item 1
1. Item 2
1. Item 3
  1. Item 3a
  1. Item 3b

## Images
![GitHub logo](https://avatars3.githubusercontent.com/u/9919?v=3&s=280)
`;
export default defaultMarkdown;
