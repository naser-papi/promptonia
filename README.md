# Promptonia

### I'm so happy to share my completed promptonia project that is powerd from Adrian awsome excellent youtube video.

- here is a link to a complete NEXT.js 13 crach course from JSMastery:
- https://www.youtube.com/watch?v=wm5gMKuwSYk&t=10s
- I found it a well explained start point for NEXT.js 13.

### My sense of curiosity, led me to have some great change in this project regard to Adrian explained one.

Here is some changes that I had struggle with them.

- using typescript instead of JS for developing.
    - inorder to have a better typechecking experiences and find syntax error easily and many other benefits, I prefer
      the typescript instead of JS most of the time.
- using linkedIn Oauth instead of google.
    - you can see this configuration in NextAuth route configuration
      file [here](/app/api/auth/%5B...nextauth%5D/route.ts)
    - I found this article useful for setup oauth in any
      application (https://www.linkedin.com/pulse/how-get-signin-linkedin-work-taric-andrade/)
- using a local mongodb bank instead of remote altas one, with differ config to setup.
- using a special SSR technique for list of feed and search in them, instead of CSR.
- using the Chat-GPT to make a confirmation modal and using it to delete action.
- using react context, lazy loading, and some tricky change to have a clean code.

in next post I will discuss and explain with

### My plan to improve the app

- integrate the app with react-query and check the pron & cons.
- integrate the app with RTK-query and compare it with react-query.
- deploy the app on a a next.js server using docker & docker-compose.

## powered from JS mastery group:

- author: Adrian
- website: https://www.jsmastery.pro/
- youtube channel: https://www.youtube.com/@javascriptmastery/about