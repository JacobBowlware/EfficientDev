import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core"; // Import IconProp type
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

interface CatCardProps {
    card: {
        title: string;
        icon: IconProp;
    };
}

const CatCard = ({ card }: CatCardProps) => {
    const { title, icon } = card;

    return (
        <Link to="/" className="cat-card">
            <h1 className="cat-card-title">{title}</h1>
            <FontAwesomeIcon className="cat-card-icon" icon={icon} />
        </Link>
    );
};

export default CatCard;
