$(document).ready(function () {
  var weapons = [
    {
      name: "44_pistol",
      damage: 48,
      fire_rate: 6,
      range: 19,
      accuracy: 66,
      weight: 4.2,
      value: 99,
    },
    {
      name: "10mm_pistol",
      damage: 18,
      fire_rate: 46,
      range: 119,
      accuracy: 61,
      weight: 4.2,
      value: 53,
    },
    {
      name: "assault_rifle",
      damage: 30,
      fire_rate: 40,
      range: 119,
      accuracy: 72,
      weight: 13.1,
      value: 144,
    },
  ];

  $(".item-list a").on("click", function (e) {
    $(".item-list a").removeClass("active");
    $(e.currentTarget).addClass("active");
  });

  $(".item-list a").hover(function (e) {
    var current_item = $(e.currentTarget).attr("class");
    console.log(current_item);

    for (item in weapons)
      if (weapons[item].name == current_item) {
        console.log(weapons[item]);

        var container = $(".item-stats");

        container.find(".damage").html(weapons[item].damage);
        container.find(".fire-rate").html(weapons[item].fire_rate);

        container.find(".range").html(weapons[item].range);

        container.find(".accuracy").html(weapons[item].accuracy);

        container.find(".weight").html(weapons[item].weight);

        container.find(".value").html(weapons[item].value);
      }
  });
});
