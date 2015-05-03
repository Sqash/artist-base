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

Fixed bugs in the Gruntfile. Working on making/finding a nice script to push
the dist directory right to gh-pages

## //TODO (notes for me)

1. Make a wiki page for all the resource files

2. Add animation to the gallery carousels and collapsed navbar slidedown. It
   would make it look much nicer by default.

3. Write actual unit tests for all controllers (using $httpBackend I think)

4. Version 1.0! :D

## Build & development

Run `grunt` for building and `grunt serve` for preview.

Run `grunt build` to ready the `dist` directory for gh-pages

Run `./push-dist` to push the latest `dist` build to the `gh-pages` branch

## Testing

Running `grunt test` will run the unit tests with karma.
