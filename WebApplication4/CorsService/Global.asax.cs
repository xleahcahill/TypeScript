using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace CorsService
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {

        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        { 
            // Can check the "Origin" header in the HTTP Request to determine
            // if request is allowed.
            // Access-Control-Allow-Origin = Accept request for resources.
            // Echo back the origin details from the request or * for a
            // public resource
            HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");

            if (HttpContext.Current.Request.HttpMethod == "OPTIONS")
            {
                //These headers are handling the "pre-flight" OPTIONS call sent by the browser
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "Authorization, Origin, Content-Type, Accept, X-Requested-With");

                // Set Max-Age to 0 to allow us to see preflight check, should be something like 1728000 to cache the check response
                HttpContext.Current.Response.AddHeader("Access-Control-Max-Age", "0");

                HttpContext.Current.Response.End();
            }

            //if (credentialsSupported == true)
            //{
            //    HttpContext.Current.Response.AddHeader("Access-Control-Allow-Credentials", "true");
            //}

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}