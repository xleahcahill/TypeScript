var myService2 = /** @class */ (function () {
    function myService2() {
        var _this = this;
        this.AjaxSendNameclick = function (e) {
            //Add new data in REST
            $.ajax({
                cache: false,
                type: "POST",
                url: "http://localhost:63514/MessageService.svc/postname",
                data: '{"Id" : "1", "age": "21", "name" : "' + $("#nameTextBox").val() + '" }',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxSendNameSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxSendNameSuccessful = function (json, status, req) {
            window.alert("Name sent.");
        };
        this.Ajaxreadnameclick = function (e) {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:63514/MessageService.svc/readname",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxReadNameSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxReadNameSuccessful = function (json, status, req) {
            //  window.alert("Last message\n status:" + status + "\n The message was: " + json.Message + "\n"); // Message comes from return type in Imessageservive
            document.getElementById("namep").innerHTML = json.Name;
        };
        this.AjaxDelete2Click = function (e) {
            $.ajax({
                cache: false,
                type: "DELETE",
                url: "http://localhost:63514/MessageService.svc/deletename",
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxDelete2Successful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxDelete2Successful = function (json, status, req) {
            window.alert("Deleted\nstatus: " + status + "\nrequestStatus: " + req.status);
            document.getElementById("namep").innerHTML = "Name CLEARED";
        };
        this.AjaxError = function (req, status, error) {
            window.alert("Got error\n status:" + status + "\n error:" + error + "\n");
        };
    }
    myService2.prototype.PageLoad = function () {
        $("#deletenameButton").click(this.AjaxDelete2Click);
        $("#sendnameButton").click(this.AjaxSendNameclick);
        $("#readnameButton").click(this.Ajaxreadnameclick);
    };
    return myService2;
}());
$(function () {
    var page = new myService2;
    page.PageLoad();
    //(new Service()).PageLoad();
});
//# sourceMappingURL=myService22.js.map