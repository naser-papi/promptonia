# Promptonia

### I'm so happy to share my completed promptonia project with you guys.

### this app is inspired from JSMastery(Adrian) awsome excellent youtube video.

- here is a link to a complete NEXT.js 13 crach course from JSMastery:
- https://www.youtube.com/watch?v=wm5gMKuwSYk&t=10s
- I found it a well explained start point for NEXT.js 13.

### My sense of curiosity, led me to have some great change in this project regard to Adrian explained one.

Here is some changes that I had struggle with them.

- using typescript instead of JS for developing.
    - inorder to have a better typechecking experiences and find syntax error easily and many other benefits, I prefer
      the typescript instead of JS most of the time.
- using linkedIn Oauth instead of google one.
    - you can see this configuration in NextAuth route configuration
      file [here](/app/api/auth/%5B...nextauth%5D/route.ts)
    - I found this article useful for setup linkedIN oauth in any
      application (https://www.linkedin.com/pulse/how-get-signin-linkedin-work-taric-andrade/)
- using a local mongodb bank instead of remote altas one, with different config to setup.
  - as you can see the main difference is the connection string
    which has changed to localhost instead of remote mongodb server.
  - Obviously, you need to setup and config mongodb server on your local machine
    in order running this app with a local mongodb.
  - I found this link a useful resource to setup mongodb on your local machine:
    - https://www.prisma.io/dataguide/mongodb/setting-up-a-local-mongodb-database
  - by the way, if you don't want to use a localhost mongodb, just change the DATA_BASE_URI key in the .env file
- using a special SSR technique for list of feed and search in them, instead of CSR.
  - you can see that my [Feed component](/components/Feed.tsx) is not a client side component, instead it has a fetch
    api with no-store configuration.
  - Also it's configured to receive the search url query parameter from owner page, and then pass it to the aoi.
  - I'm using a client side High Order Component to manipulate the list and search action in client side.
    - I Have used a react context to manage the feed list's state.
    - This state can be extended very easy by adding new keys to the context provider.
    - The nature of react-context will allow to use this state in all children compoenent without worry about props
      drilling anti pattern.
- using the Chat-GPT to make a confirmation modal and using it to delete action.
  - for the post delete confirmation I needed an modal dialog to show an message and get a confirm before delete
    process.
  - I write in Chat-GPT message box this sentence: Give me a simple react component for confirmation.
  - After some change request chats I got my ideal component from the chat-gpt, here is
    the [result](/components/ConfirmModal.tsx).
- using react context, lazy loading, and some tricky change to have a clean code.

### My plans to have more struggle and challenge with this app:

- implement all needed E2E tests with Cypress.
- integrate the app with react-query and check the pron & cons.
- integrate the app with RTK-query and compare it with react-query.
- deploy the app on a a next.js server using docker & docker-compose.
