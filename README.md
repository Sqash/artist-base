# artist-base

This is a webapp to get artists kick-started on presenting their work to the
public!

You can:

- Make a cool looking front page with your name in big letters!
- Set up a blurb about you and also notify people about what you're up to on
  the About page.
- put scripts for donate and/or payment buttons on the About page to get $$$
- Hook up (theoretically) an infinite number of galleries that are
  customizable to whatever you want them to display!

All the content of the site is modular and easy to populate for the
non-technically savvy of should never have to code anything! (JSON doesn't
count. There will be a really handy guide page in the Wiki soon)

The default appearance of the site should be eye pleasing and also
mobile-friendly.

Instructions on how to take this and make your very own copy for your very own
works are going to be in the project Wiki soon!

##IMPORTANT NOTE

This app is not yet at version 1.0.0 which means it is incomplete and (in my
opinion) not ready for consumption. Should be fully ready soon though, so check
back!

##Authorship

This app was written by [Sam Whiteley](https://github.com/sqash)

##License

GPL-2.0

See the file `LICENSE` for full license

## Left off at (notes for me):

Was making wiki pages and unit tests. All CSS issues seem to be cleared up.

## //TODO (notes for me)

1. Finish writing unit tests

2. Make a wiki page for cloning, setup, and push to IO

3. Change gruntfile to push with 'buildcontrol' task to a variable
   interpolateable remote.

4. Make gitattributes change the merge behaviour when pulling from remotes to
   keep current config/image/asset files

5. Version 1.0! :D

## Build & development

Run `grunt` for building and `grunt serve` for preview.

Run `grunt build` to ready the `dist` directory for gh-pages

Run `./push-dist` to push the latest `dist` build to the `gh-pages` branch

## Testing

Running `grunt test` will run the unit tests with karma. They will test with
the JSON files used in the app, not dummy data.
