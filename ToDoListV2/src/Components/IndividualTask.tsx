interface TaskProp {
  text: string;
  onCloseTask: () => void;
}

const IndividualTask = ({ text, onCloseTask }: TaskProp) => {
  return (
    <div className="d-flex justify-content-between">
      {text}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onCloseTask}
      ></button>
    </div>
  );
};

export default IndividualTask;
