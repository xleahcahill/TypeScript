class myService {
    PageLoad(): void {
        $("#sendMsgButton").click(this.AjaxSendMsgclick);
        $("#readLastMsgButton").click(this.AjaxReadLastMsgclick);
        $("#readMsgButton").click(this.AjaxReadMsgclick);
        $("#simpleModifyMsgButton").click(this.AjaxModifyMsgClick);
        $("#deleteMsgButton").click(this.AjaxDeleteClick);

    }

    private AjaxSendMsgclick = (e: JQueryEventObject): boolean => {
        //Add new data in REST
        $.ajax({
            cache: false,
            type: "POST",
            url: "http://localhost:63514/MessageService.svc/postmessage",
            data: '{"sender" : "Leah", "recipient": "Jerry", "message" : "' + $("#msgTextBox").val() + '" }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: this.AjaxSendMsgSuccessful,
            error: this.AjaxError
        });
        e.preventDefault();
        return false;
    }

    private AjaxSendMsgSuccessful = (json: any, status: string, req: JQueryXHR): void => // GOT success message
    {
        window.alert("Messaged Sent");

    }
 

    private AjaxReadLastMsgclick = (e: JQueryEventObject): boolean => {

        $.ajax({
            cache: false,
            type: "GET",
            url: "http://localhost:63514/MessageService.svc/readmessage",
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: this.AjaxReadLastMsgSuccessful,
            error: this.AjaxError
        });
        e.preventDefault();
        return false;
    }
    private AjaxReadLastMsgSuccessful = (json: any, status: string, req: JQueryXHR): void => { // READ success message
        //  window.alert("Last message\n status:" + status + "\n The message was: " + json.Message + "\n"); // Message comes from return type in Imessageservive
        document.getElementById("msgprevious").innerHTML = json.Message;
    }

    private AjaxReadMsgclick = (e: JQueryEventObject): boolean => {
        $.ajax({
            cache: false,
            type: "GET",
            url: "http://localhost:63514/MessageService.svc/readmessage?ID=" + $("#msgIdTextBox").val(),
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: this.AjaxReadMsgSuccessful,
            error: this.AjaxError
        });
        e.preventDefault();
        return false;
    }
    private AjaxReadMsgSuccessful = (json: any, status: string, req: JQueryXHR): void => { //READ ALL success message
        //  window.alert("Read message\n status:" + status + "\n The message was: " + json.Message + "\n"); // Message comes from return type in Imessageservive
        document.getElementById("msg").innerHTML = json.Message;
    }


    private AjaxModifyMsgClick = (e: JQueryEventObject): boolean => { 

        $.ajax({
            cache: false,
            type: "PUT",
            url: "http://localhost:63514/MessageService.svc/putmessage?ID=" + $("#msgIdTextBox").val(),
            data: '{"sender" : "Leah", "recipient": "ME", "message" : "' + $("#msgTextBox2").val() + '" }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: this.AjaxModifyMsgSuccessful,
            error: this.AjaxError
        });
        e.preventDefault();
        return false;
    }

    private AjaxModifyMsgSuccessful = (json: any, status: string, req: JQueryXHR): void => { //Modify success message
        let done = json.ChangesComplete; 
       // window.alert("Successful. Changes have been made");
            document.getElementById("msg2").innerHTML = "Successful.Changes have been made";
    }


    private AjaxDeleteClick = (e) => {
        $.ajax({
            cache: false,
            type: "DELETE",
            url: "http://localhost:63514/MessageService.svc/deletemessage",
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: this.AjaxDeleteSuccessful,
            error: this.AjaxError
        });
        e.preventDefault();
        return false;
    };

    private AjaxDeleteSuccessful = (json, status, req) => {
        window.alert("Deleted\nstatus: " + status + "\nrequestStatus: " + req.status);
        document.getElementById("msg").innerHTML = "Message Deleted";


    };


    private AjaxError = (req: JQueryXHR, status: string, error: string): void => {
        window.alert("Got error\n status:" + status + "\n error:" + error + "\n");
    }

}
$(function () {
    let page: myService = new myService
    page.PageLoad();
    //(new Service()).PageLoad();
});