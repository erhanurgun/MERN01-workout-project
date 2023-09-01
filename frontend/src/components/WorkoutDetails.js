import {useWorkoutsContext} from "../hooks/useWorkoutsContext";
import {useAuthContext} from "../hooks/useAuthContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import tr from "date-fns/locale/tr";

const WorkoutDetails = ({workout}) => {
    const {dispatch} = useWorkoutsContext();
    const {user} = useAuthContext();

    const handleClick = async () => {
        if (!user) {
            return;
        }
        let alert = window.confirm("Silme işlemini onaylıyor musunuz?");
        if (alert) {
            const response = await fetch("/api/v1/workouts/" + workout._id, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });

            const json = await response.json();

            if (response.ok) {
                dispatch({type: "DELETE_WORKOUT", payload: json});
            }
        }
    };

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p>
                <strong>Ağırlık: </strong> &nbsp;
                {workout.load} kg
            </p>
            <p>
                <strong>Tekrar: </strong> &nbsp;
                {workout.reps} tekrar
            </p>
            <p>
                {formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true, locale: tr})} eklendi
            </p>
            <span className="material-symbols-outlined del" onClick={handleClick}>delete</span>
        </div>
    );
};

export default WorkoutDetails;
