using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SinglePageFront.Helpers
{
    public static class Languages
    {
        public static string Esp(int lang, int position)
        {
            string[,] arrLag = new string[2, 20];

            #region Spanish

            arrLag[0, 0] = "profesional en márketing y comunicación corporativa";

            //Educacion
            arrLag[0, 1] = "Educación";

            //Proyectos
            arrLag[0, 2] = "Proyectos";

            //Experiencia
            arrLag[0, 3] = "Experiencia";

            //Contacto
            arrLag[0, 4] = "Contacto";

            //Acerca de
            arrLag[0, 5] = "Sobre mi";

            #endregion

            #region English

            arrLag[1, 0] = "professional marketing and corporate communication";

            //Education
            arrLag[1, 1] = "Education";

            //Projects
            arrLag[1, 2] = "Projects";

            //Experience
            arrLag[1, 3] = "Experience";

            //Contact
            arrLag[1, 4] = "Contact";

            //About
            arrLag[1, 5] = "About me";

            #endregion

            return arrLag[lang, position];
        }
    }
}