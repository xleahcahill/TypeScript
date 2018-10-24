using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace CorsService
{
        [DataContract(Name = "Message", Namespace = "")]

        public class EmailMessage 
        {
            // Attributes
            string _sender = "";
            string _recipient = "";
            string _message = "";

            // Constructors

            public EmailMessage()
            {
                // Do Nothing
            }

            public EmailMessage(string sender, string recipient, string message)
            {
                _sender = sender;
                _recipient = recipient;
                _message = message;
            }

            // Properties

            [DataMember(Name = "sender", Order = 1)]       // Set name returned to JSON
            public string Sender
            {
                get { return _sender; }
                set { _sender = value; }
            }

            [DataMember(Name = "recipient", Order = 2)]
            public string Recipient
            {
                get { return _recipient; }
                set { _recipient = value; }
            }

            [DataMember(Name = "text", Order = 3)]
            public string MessageText
            {
                get { return _message; }
                set { _message = value; }
            }
        }
    }


