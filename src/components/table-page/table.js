define(["knockout", "bridge", "cards", "cards-ko", "jquery", "text!./table.html"], function(ko, bridge, cards, cardsKO, $, tableTemplate) {

    function TableViewModel(route) {
        var self = this;

        var hands = new bridge.Deck()
            .shuffle()
            .deal(bridge.seat.south);
        self.dealer = ko.observable(bridge.seat.south);
        self.cards = ko.observableArray(hands.south.cards);
        self.auction = ko.observableArray([bridge.bid['1C'], bridge.bid['-']])

        self.play = function (data, event) {
            var card = bridge.card[cards.cid($(event.target))];
            self.cards.remove(card);
        }
    }

    return { viewModel: TableViewModel, template: tableTemplate };
});
