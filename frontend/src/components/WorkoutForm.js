import "dotenv/config";
import {useState} from "react";
import {useWorkoutsContext} from "../hooks/useWorkoutsContext";
import {useAuthContext} from "../hooks/useAuthContext";

const WorkoutForm = () => {
    const {dispatch} = useWorkoutsContext();
    const {user} = useAuthContext();

    const [title, setTitle] = useState("");
    const [load, setLoad] = useState("");
    const [reps, setReps] = useState("");
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError("You must be logged in");
            return;
        }

        const workout = {title, load, reps};

        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/workouts`, {
            method: "POST",
            mode: process.env.REACT_APP_CORS_MODE,
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }
        if (response.ok) {
            setTitle("");
            setLoad("");
            setReps("");
            setError(null);
            setEmptyFields([]);
            console.log("yeni egzersiz eklendi", json);
            dispatch({type: "CREATE_WORKOUT", payload: json});
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Yeni Egzersiz Ekle</h3>

            <label>Başlık:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="lütfen başlık giriniz!"
                className={emptyFields.includes("title") ? "error" : ""}
            />

            <label>Ağırlık (kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                placeholder="lütfen ağırlık giriniz!"
                className={emptyFields.includes("load") ? "error" : ""}
            />

            <label>Tekrar:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                placeholder="lütfen tekrar sayısı giriniz!"
                className={emptyFields.includes("reps") ? "error" : ""}
            />

            <button>Egzersiz Ekle</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default WorkoutForm;
