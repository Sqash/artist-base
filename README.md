# artist-base

This is a webapp to get artists kick-started on presenting their work to the
public!

You can:

- populate up to 2 galleries --intended as works for sale and
works not for sale but that you want to show off--
- There's a home page where you can put down a little blurb about you
- There's a hook-able newsfeed of things that you're getting up to or have
gotten up to in your art life
- A bio page for a more in-depth expose of yourself
- A couple hook pages that you can use to allow people to donate to/pay you for
all the awesome things you've done!

All the content of the site is modular and easy to populate for the
non-technically savvy of you so you should never have to code anything!

The default appearance of the site should be eye pleasing and also
mobile-friendly.

Instructions on how to take this and make your very own copy for your very own
works are under the heading //TODO later in this document

##Authorship

This base app was written by [https://github.com/sqash11](Sam Whiteley)

##License

GPL-2.0, so long as you're allowed to sell things from such a code base.

## Left off at (notes for me):

Started on galleries. Working on populating the view and controller with the
right values. Then, we're getting on to inserting the carousel html in the view
then it's on to making all of that populate from a json resource file.

## //TODO (notes for me)

- Carousel galleries
  - Determine whether ng or bootstrap.
  - Make it a component/service.

- Paypal hooks

- Script to unpack /dist into top level dir for github pages project. (grunt
  build CDNifies everything into /dist)

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
