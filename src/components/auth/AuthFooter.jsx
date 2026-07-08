import { Link } from "react-router-dom";

export default function AuthFooter({
  text,
  linkText,
  linkTo,
}) {
  return (
    <p className="text-center text-gray-400 mt-8">

      {text}

      <Link
        to={linkTo}
        className="text-yellow-500 ml-2 hover:underline"
      >
        {linkText}
      </Link>

    </p>
  );
}