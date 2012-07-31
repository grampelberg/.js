$(function() {

  var day = new Date().getDay();

  var opener = {
    button: function() {
      $("<button>Open in tabs</button>").prependTo("#right_bar").click(opener.in_tabs);
    },
    in_tabs: function() {
      $(".bookmark").each(function(k, e) {
        var rules = {
          "mwf": function() {
            return day == 1 || day == 3 || day == 5
          },
          "m-f": function() {
            return day > 0 && day < 6
          }
        }

        var everyday = true;
        var text = $(e).find(".tag").text();
        $.each(rules, function(k, v) {
          if (text.indexOf(k) == -1) return;
          everyday = false;

          if (!v()) return

          opener.new_tab($(e).find(".bookmark_title").attr("href"));
        })

        if (!everyday) return;

        opener.new_tab($(e).find(".bookmark_title").attr("href"));
      });
    },
    new_tab: function(href) {
      window.open(href);
    }
  }

  if (location.href.match(/t:/)) opener.button();
});
