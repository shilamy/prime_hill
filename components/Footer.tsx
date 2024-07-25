import Image from "next/image";
import Link from "next/link";

import{footerLinks} from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-secondary mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col
      flex-wrap justify-between gap-5 sm:px-16
      px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.png" alt="luc logo"
          width={60}
          height={18}
          className="object-contain"/>
          <p className="text-base text-dimWhite">
            LUC PRIME HILL LIMITED 2024 <br/>
            All Rights Reserved &copy;
          </p>
        </div>
      </div>

      <div className="footer__links">
        {footerLinks.map((section) =>(
          <div key={section.title}
          className="footer__link">
            <h3 className="font-bold">{section.title}</h3>
            {section.links.map((item) =>(
               <Link
               key={item.title}
               href={item.url}
               className = "text-white"
               >
                {item.title}
                </Link>

            ))}
          </div>
        ))}
      </div>
      

      <div className="flex justify-between
      items-center flex-wrap mt-10 border-t border-primary-blue sm:px-16 px-6 py-10">
        <p>@2024 LUC PRIME HILL LIMITED. All Right Reserved </p>


        <div className="footer__copyright-link">
        <Link href="/"
        className="text-secondary-500">
          Privacy Policy
        </Link>
        <Link href="/"
        className="text-secondary-500">
          Terms of Use
        </Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer;