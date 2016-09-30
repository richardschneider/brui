define(['jquery', 'knockout', './router', 'bridge', 'cards', 'bootstrap', 'knockout-projections'], function($, ko, router, bridge, cards) {

  // Link the card images
  bridge.card.imagePath(cards.options.imagesUrl);

  // Components can be packaged as AMD modules, such as the following:
  ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
  ko.components.register('home-page', { require: 'components/home-page/home' });
  ko.components.register('table-page', { require: 'components/table-page/table' });

  // ... or for template-only components, you can just point to a .html file directly:
  ko.components.register('about-page', {
    template: { require: 'text!components/about-page/about.html' }
  });

  ko.components.register('bids', { require: 'components/bids/bids' });
  ko.components.register('bid', { require: 'components/bid/bid' });
  ko.components.register('bidding-box', { require: 'components/bidding-box/bidding-box' });
  ko.components.register('trick-box', { require: 'components/trick-box/trick-box' });
  ko.components.register('dummy-hand', { require: 'components/dummy-hand/dummy-hand' });
  ko.components.register('card-play', { require: 'components/card-play/card-play' });

  // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

  // Start the application
  ko.applyBindings({ route: router.currentRoute });
});
