var myService = /** @class */ (function () {
    function myService() {
        var _this = this;
        this.AjaxSendMsgclick = function (e) {
            //Add new data in REST
            $.ajax({
                cache: false,
                type: "POST",
                url: "http://localhost:63514/MessageService.svc/postmessage",
                data: '{"sender" : "Leah", "recipient": "Jerry", "message" : "' + $("#msgTextBox").val() + '" }',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxSendMsgSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxSendMsgSuccessful = function (json, status, req) {
            window.alert("Messaged Sent");
        };
        this.AjaxReadLastMsgclick = function (e) {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:63514/MessageService.svc/readmessage",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxReadLastMsgSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxReadLastMsgSuccessful = function (json, status, req) {
            //  window.alert("Last message\n status:" + status + "\n The message was: " + json.Message + "\n"); // Message comes from return type in Imessageservive
            document.getElementById("msgprevious").innerHTML = json.Message;
        };
        this.AjaxReadMsgclick = function (e) {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:63514/MessageService.svc/readmessage?ID=" + $("#msgIdTextBox").val(),
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxReadMsgSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxReadMsgSuccessful = function (json, status, req) {
            //  window.alert("Read message\n status:" + status + "\n The message was: " + json.Message + "\n"); // Message comes from return type in Imessageservive
            document.getElementById("msg").innerHTML = json.Message;
        };
        this.AjaxModifyMsgClick = function (e) {
            $.ajax({
                cache: false,
                type: "PUT",
                url: "http://localhost:63514/MessageService.svc/putmessage?ID=" + $("#msgIdTextBox").val(),
                data: '{"sender" : "Leah", "recipient": "ME", "message" : "' + $("#msgTextBox2").val() + '" }',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxModifyMsgSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxModifyMsgSuccessful = function (json, status, req) {
            var done = json.ChangesComplete;
            // window.alert("Successful. Changes have been made");
            document.getElementById("msg2").innerHTML = "Successful.Changes have been made";
        };
        this.AjaxDeleteClick = function (e) {
            $.ajax({
                cache: false,
                type: "DELETE",
                url: "http://localhost:63514/MessageService.svc/deletemessage",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxDeleteSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxDeleteSuccessful = function (json, status, req) {
            window.alert("Deleted\nstatus: " + status + "\nrequestStatus: " + req.status);
            document.getElementById("msg").innerHTML = "Message Deleted";
        };
        this.AjaxError = function (req, status, error) {
            window.alert("Got error\n status:" + status + "\n error:" + error + "\n");
        };
    }
    myService.prototype.PageLoad = function () {
        $("#sendMsgButton").click(this.AjaxSendMsgclick);
        $("#readLastMsgButton").click(this.AjaxReadLastMsgclick);
        $("#readMsgButton").click(this.AjaxReadMsgclick);
        $("#simpleModifyMsgButton").click(this.AjaxModifyMsgClick);
        $("#deleteMsgButton").click(this.AjaxDeleteClick);
    };
    return myService;
}());
$(function () {
    var page = new myService;
    page.PageLoad();
    //(new Service()).PageLoad();
});
//# sourceMappingURL=myService.js.map