$(function () {
    $.ajaxSetup({ cache: false });
    // ajax button
    $("#Button1").click(AjaxTestbuttonClick);
    // Handle submit 
    $("#form2").submit(DoSubmit);
});
function AjaxTestbuttonClick(e) {
    //Load HTML
    $("#loadedText").load("text2.txt");
    e.preventDefault();
    return false;
}
function DoSubmit(e) {
    var text = "read it";
    text += $("#textBox").val(); // Read Text 
    $("#textBox").val(text); // Write it Back 
    //  e.preventDefault();
    //  return false;
}
//# sourceMappingURL=form2.js.map