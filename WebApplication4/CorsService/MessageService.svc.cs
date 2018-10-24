using Customer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace CorsService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class MessageService : IMessageService
    {
        private static List<EmailMessage> _messages = new List<EmailMessage>();
        private static List<Customers> _names = new List<Customers>();

        public void SendMessage(string sender, string recipient, string message)
        {
            EmailMessage msg = new EmailMessage(sender, recipient, message);
            _messages.Add(msg);
        }

        public string ReadLastMessage()
        {
            if (_messages.Count == 0)
                return "";

            return _messages[_messages.Count - 1].MessageText;
        }

        [return: MessageParameter(Name = "Message")]
        public string ReadMessage(int msgID)
        {
            try
            {
                EmailMessage msg = _messages[msgID];
                return msg.MessageText;
            }
            catch // (ArgumentOutOfRangeException e)
            {
                return "Bad Id";
            }
        }

        [return: MessageParameter(Name = "Modifications")]
        public EmailMessage ModifyMessage(int msgID, EmailMessage messageChanges)
        {
            try
            {
                EmailMessage msg = _messages[msgID];

                msg.Sender = messageChanges.Sender;
                msg.Recipient = messageChanges.Recipient;
                msg.MessageText = messageChanges.MessageText;

                return msg;
            }
            catch // (ArgumentOutOfRangeException e)
            {
                return new EmailMessage("Broken", "Broken", "Broken");
            }
        }



        [return: MessageParameter(Name = "ChangesComplete")]
        public bool ModifyMessage1(int msgID, string sender, string recipient, string message)
        {
            EmailMessage msg = _messages[msgID];
            msg.Sender = sender;
            msg.Recipient = recipient;
            msg.MessageText = message;
            return true;
        }

        public void DeleteMessage(int id)
        {
            try
            {
                _messages.RemoveAt(id);
            }
            catch // (ArgumentOutOfRangeException e)
            {
            }
        }



        public void SendName(string id, string name, int age)
        {

            Customers nme = new Customers(id, name, age);
            _names.Add(nme);
        }


        [return: MessageParameter(Name = "Name")]
        public string Readname()
        {
            if (_names.Count == 0)
                return "";

            return _names[_names.Count - 1].Name;
        }
    



        public void DeleteName(int id)
        {
            try
            {
                _names.RemoveAt(id);

            }
            catch // (ArgumentOutOfRangeException e)
            {
            }
        }

    }






}


