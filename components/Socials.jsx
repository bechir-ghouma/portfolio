// import Link from "next/link";

// import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa";

// const socials = [
//     {icon: <FaGithub />, path:''},
//     {icon: <FaLinkedinIn />, path:'https://www.linkedin.com/in/bechir-ghouma-88a618172/'},
//     {icon: <FaYoutube />, path:''},
//     {icon: <FaTwitter />, path:''},
// ]

// const Social = ({containerStyles, iconStyles}) => {
//   return (
//     <div className={containerStyles}>
//         {socials.map((item, index)=> {
//             return (<Link key={index} href={item.path}>
//               <a target="_blank" className={iconStyles}>
//               {item.icon}
//             </a>
//             </Link>)
//         })}
//     </div>
//   )
// }

// export default Social
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaGitlab, FaMedium } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/bechir-ghouma' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/bechir-ghouma-88a618172/' },
    { icon: <FaGitlab />, path: 'https://gitlab.com/bechir-ghouma' },
    { icon: <FaMedium />, path: 'https://medium.com/@bechirghouma' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} legacyBehavior>
            <a target="_blank" className={iconStyles}>
              {item.icon}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
