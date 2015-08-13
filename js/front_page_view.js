var frontPageView = Backbone.View.extend({
  events: {
    'click .toggle-language' : 'toggle_language'
  },

  initialize: function(options) {
    _.bindAll(this,
      'render');
    this.delegateEvents();
  },

  toggle_language: function(event){
    var target = $(event.target);
    if(target.text() === "EN"){
      target.text("ÍSL")
      $('.isl').hide();
      $('.en').show();
    }
    else{
      target.text("EN")
      $('.en').hide();
      $('.isl').show();
    }
  }
});

var front_page_view = new frontPageView({
  el: $('body')
});