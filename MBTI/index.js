function start() {
  $(".start").hide();
  $(".question").show();
}

$("#A").click(function () {
  let type = $("#type").val();
  let preValue = $("#" + type).val();

  $("#" + type).val(parseInt(preValue) + 1);
});
