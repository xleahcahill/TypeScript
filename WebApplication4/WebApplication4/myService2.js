var myService2 = /** @class */ (function () {
    function myService2() {
        var _this = this;
        this.AjaxSendnameClick = function (e) {
            //Add new data in REST
            $.ajax({
                cache: false,
                type: "POST",
                url: "http://localhost:62852/Service1.svc/postname",
                data: '{"id" : "1", "name": "' + $("#nameTextBox").val() + '" age: ", "21" : }',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxSendSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxSendSuccessful = function (json, status, req) {
            window.alert("Name Sent");
        };
        this.AjaxReadnameclick = function (e) {
            $.ajax({
                cache: false,
                type: "GET",
                url: "http://localhost:62852/Service1.svc/postname?id=" + $("#nameIdTextBox").val(),
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxReadSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxReadSuccessful = function (json, status, req) {
            //  window.alert("Read message\n status:" + status + "\n The message was: " + json.Message + "\n"); // Message comes from return type in Imessageservive
            document.getElementById("urname").innerHTML = json.Message;
        };
        this.AjaxDeleteClick2 = function (e) {
            $.ajax({
                cache: false,
                type: "DELETE",
                url: "http://localhost:62852/Service1.svc/postname?id=" + $("#nameIdTextBox").val(),
                data: '{}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: _this.AjaxDeletenameSuccessful,
                error: _this.AjaxError
            });
            e.preventDefault();
            return false;
        };
        this.AjaxDeletenameSuccessful = function (json, status, req) {
            window.alert("Deleted\nstatus: " + status + "\nrequestStatus: " + req.status);
            document.getElementById("name").innerHTML = "Deleted";
        };
        this.AjaxError = function (req, status, error) {
            window.alert("Got error\n status:" + status + "\n error:" + error + "\n");
        };
    }
    myService2.prototype.PageLoad = function () {
        $("#sendnameButton").click(this.AjaxSendnameClick);
        $("#readnameButton").click(this.AjaxReadnameclick);
        $("#deletenameButton").click(this.AjaxDeleteClick2);
    };
    return myService2;
}());
$(function () {
    var page = new myService2;
    page.PageLoad();
    //(new Service()).PageLoad();
});
//# sourceMappingURL=myService2.js.map