// Using jQuery 
$(function () {
    // may new to turn off browser page cache
    $.ajaxSetup({ cache: false });
    // jquery provies AJAX support
    // functions provided are:
    // load = loads HTML into an element
    // get = performs HTTP GET
    // post = peforms HTTP post 
    // getJSON = loads JSON
    // get script = loads and executes JS 
    // ajax button
    $("#lButton").click(AjaxTestbuttonClick);
    // Handle submit 
    $("#form1").submit(DoSubmit);
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
//# sourceMappingURL=form1.js.map