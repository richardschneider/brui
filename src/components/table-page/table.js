define(["knockout", "bridge", "cards", "cards-ko", "jquery", "text!./table.html"], function(ko, bridge, cards, cardsKO, $, tableTemplate) {

    function TableViewModel(route) {
        var self = this;

        var board = new bridge.Board();
        board.setNumber(666);
        board.dealer = bridge.seat.south;
        board.hands = new bridge.Deck()
            .shuffle()
            .deal(bridge.seat.south);
        var game = new bridge.Game();
        game.auction.dealer = board.dealer;

        // Seating
        self.seat = ko.observable(bridge.seat.south);

        // Dealing
        self.board = ko.observable(board);
        self.dealer = ko.observable(board.dealer);
        self.cards = ko.observableArray(board.hands[self.seat()].cards);
        self.nsVulnerable = ko.pureComputed(function() {
            return self.board().isVulnerable(bridge.seat.north);
        });
        self.ewVulnerable = ko.pureComputed(function() {
            return self.board().isVulnerable(bridge.seat.east);
        });

        // Bidding
        self.auction = ko.observable(game.auction);
        self.bids = ko.observableArray(game.auction.bids);
        self.bidding = ko.pureComputed(function() {
            self.bids(); // tell KO we are dependent on the bids.
            return !self.auction().isClosed();
        });
        self.bids.subscribe(function() {
            if (self.auction().isClosed()) {
                self.contract(self.auction().contract());
            }
        });

        // Playing
        self.contract = ko.observable(game.contract);
        self.playing = ko.pureComputed(function() {
           return !self.bidding();
        });
        self.play = function (data, event) {
            var card = bridge.card[cards.cid($(event.target))];
            self.cards.remove(card);
        };
    }

    return { viewModel: TableViewModel, template: tableTemplate };
});
