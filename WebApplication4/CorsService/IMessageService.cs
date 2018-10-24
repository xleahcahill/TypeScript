using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace CorsService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IService1" in both code and config file together.
    [ServiceContract]
    public interface IMessageService
    {
        //create 
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.Wrapped,
        RequestFormat = WebMessageFormat.Json,
        ResponseFormat = WebMessageFormat.Json,
        UriTemplate = "/postmessage")]

        void SendMessage(string sender, string recipient, string message);


        [OperationContract]
        [WebGet(
        BodyStyle = WebMessageBodyStyle.Wrapped,
        RequestFormat = WebMessageFormat.Json,
        ResponseFormat = WebMessageFormat.Json,
        UriTemplate = "/readmessage")]
        [return: MessageParameter(Name = "Message")] //return Json "message":"...message text..."
        string ReadLastMessage();

        [OperationContract]
        [WebGet(
           BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
            UriTemplate = "/readmessage?id={msgID}")]
        [return: MessageParameter(Name = "Message")]

        string ReadMessage(int msgID);

        [OperationContract]
        [WebInvoke(Method = "PUT",
            BodyStyle = WebMessageBodyStyle.Wrapped,
          RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
             UriTemplate = "/putmessage?id={msgID}")]
        [return: MessageParameter(Name = "Modifications")]
        EmailMessage ModifyMessage(int msgID, EmailMessage messageChanges);


        [OperationContract]
        [WebInvoke(Method = "PUT",
            BodyStyle = WebMessageBodyStyle.Wrapped,
          RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
             UriTemplate = "/simpleputmessage?id={msgID}")]
        [return: MessageParameter(Name = "ChangesComplete")]
        bool ModifyMessage1(int msgID, string sender, string recipient, string message);


        [OperationContract]
        [WebInvoke(
       Method = "DELETE",
     BodyStyle = WebMessageBodyStyle.Wrapped,
       RequestFormat = WebMessageFormat.Json,
       ResponseFormat = WebMessageFormat.Json,
       UriTemplate = "/deletemessage")]

        void DeleteMessage(int id);

        [OperationContract]
        [WebInvoke(Method = "POST",
                 BodyStyle = WebMessageBodyStyle.Wrapped,
                 RequestFormat = WebMessageFormat.Json,
                 ResponseFormat = WebMessageFormat.Json,
                 UriTemplate = "/postname")]

        void SendName(string ID, string name, int age);


        [OperationContract]
        [WebGet(
        BodyStyle = WebMessageBodyStyle.Wrapped,
        RequestFormat = WebMessageFormat.Json,
        ResponseFormat = WebMessageFormat.Json,
        UriTemplate = "/readname")]
        [return: MessageParameter(Name = "Name")] //return Json "Name"
        string Readname();


        [OperationContract]
        [WebInvoke(
       Method = "DELETE",
     BodyStyle = WebMessageBodyStyle.Wrapped,
       RequestFormat = WebMessageFormat.Json,
       ResponseFormat = WebMessageFormat.Json,
       UriTemplate = "/deletename")]

        void DeleteName(int id);














    }
}


    // Use a data contract as illustrated in the sample below to add composite types to service operations.

