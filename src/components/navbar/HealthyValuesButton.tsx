import { useNavigate } from "react-router";

export default function HealthyValuesButton() {
    const navigate = useNavigate();

    return (
        <button className="btn btn-ghost text-xl" onClick={() => navigate("/")}>
            Values Quiz
        </button>
    );
}
