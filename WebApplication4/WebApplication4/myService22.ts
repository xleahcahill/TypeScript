class myService2 {
    PageLoad(): void {

        $("#deletenameButton").click(this.AjaxDelete2Click);
        $("#sendnameButton").click(this.AjaxSendNameclick);
        $("#readnameButton").click(this.Ajaxreadnameclick);
    }

  
    
    private AjaxSendNameclick = (e: JQueryEventObject): boolean => {
        //Add new data in REST
        $.ajax({
            cache: false,
            type: "POST",
            url: "http://localhost:63514/MessageService.svc/postname",
            data: '{"Id" : "1", "age": "21", "name" : "' + $("#nameTextBox").val() + '" }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: this.AjaxSendNameSuccessful,
            error: this.AjaxError
        });
        e.preventDefault();
        return false;
    }

    private AjaxSendNameSuccessful = (json: any, status: string, req: JQueryXHR): void => // GOT success
    {
        window.alert("Name sent.");

    }



    private Ajaxreadnameclick = (e: JQueryEventObject): boolean => {

        $.ajax({
            cache: false,
            type: "GET",
            url: "http://localhost:63514/MessageService.svc/readname",
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: this.AjaxReadNameSuccessful,
            error: this.AjaxError
        });
        e.preventDefault();
        return false;
    }
    private AjaxReadNameSuccessful = (json: any, status: string, req: JQueryXHR): void => { // READ success message
        //  window.alert("Last message\n status:" + status + "\n The message was: " + json.Message + "\n"); // Message comes from return type in Imessageservive
        document.getElementById("namep").innerHTML = json.Name;
    }

    private AjaxDelete2Click = (e) => {
        $.ajax({
            cache: false,
            type: "DELETE",
            url: "http://localhost:63514/MessageService.svc/deletename",
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: this.AjaxDelete2Successful,
            error: this.AjaxError
        });
        e.preventDefault();
        return false;
    };

    private AjaxDelete2Successful = (json, status, req) => {
        window.alert("Deleted\nstatus: " + status + "\nrequestStatus: " + req.status);
        document.getElementById("namep").innerHTML = "Name CLEARED";


    };


    private AjaxError = (req: JQueryXHR, status: string, error: string): void => {
        window.alert("Got error\n status:" + status + "\n error:" + error + "\n");
    }

}
$(function () {
    let page: myService2 = new myService2
    page.PageLoad();
    //(new Service()).PageLoad();
});