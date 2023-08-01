import "../styles/inputPerson.css";

export const InputPerson = ({ personNumber, setPersonNumber, onAddTask }) => {
  return (
    <form className="InputPerson">
      <div className="InputPerson-containerInput">
        <label htmlFor="InputPerson-containerInput-label">Personas</label>
        <input
          className="InputPerson-containerInput-input"
          type="number"
          name="personNumber"
          value={personNumber}
          onChange={(e) => setPersonNumber(e.currentTarget.value)}
          min={1}
        />
      </div>
      <button
        className="personNumber-button"
        onClick={(e) => onAddTask(e, personNumber)}
      >
        Añadir tarea
      </button>
    </form>
  );
};
