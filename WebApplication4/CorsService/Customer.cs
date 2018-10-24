using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace Customer
{
    [DataContract(Name = "Name", Namespace = "")]

    public class Customers
    {
        // Attributes
        private string _name = "";
        private int _age = 0;
        private string _id;

        // Constructors

        public Customers()
        {
            // Do Nothing
        }

        public Customers(string ID, string name, int age)
        {
            _id = ID;
            _name = name;
            _age = age;
        }

        // Properties

        [DataMember(Name = "id", Order = 1)]       // Set name returned to JSON
        public string ID
        {
            get { return _id; }
            set { _id = value; }
        }


        [DataMember(Name = "age", Order = 2)]       // Set name returned to JSON
        public int Age
        {
            get { return _age; }
            set { _age = value; }
        }

        [DataMember(Name = "name", Order = 3)]
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

    }
}

