let num = 1;
const q = {
  1: { title: "문제 1번", type: "EI", A: "E", B: "I" },
  2: { title: "문제 2번", type: "EI", A: "E", B: "I" },
  3: { title: "문제 3번", type: "EI", A: "E", B: "I" },
};

function start() {
  $(".start").hide();
  $(".question").show();
  next();
}

$("#A").click(function () {
  let type = $("#type").val();
  let preValue = $("#" + type).val();

  $("#" + type).val(parseInt(preValue) + 1);
  next();
});

$("#B").click(function () {
  next();
});

function next() {
  $(".progress-bar").attr("style", `width: calc(100 / 12 * ${num}%)`);
  $("#title").html(q[num]["title"]);
  $("#type").val(q[num]["type"]);
  $("#A").html(q[num]["A"]);
  $("#B").html(q[num]["B"]);
  num++;
}
