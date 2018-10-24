
$(function () {
    
    $.ajaxSetup({ cache: false });
 
    // ajax button
    $("#Button1").click(AjaxTestbuttonClick);

    // Handle submit 
    $("#form2").submit(DoSubmit);


});

function AjaxTestbuttonClick(e: JQueryEventObject) {
    //Load HTML
    $("#loadedText").load("text2.txt");

    e.preventDefault();
    return false;

}

function DoSubmit(e: JQueryEventObject) {
    let text = "read it";
    text += $("#textBox").val(); // Read Text 
    $("#textBox").val(text); // Write it Back 
    //  e.preventDefault();
    //  return false;

}