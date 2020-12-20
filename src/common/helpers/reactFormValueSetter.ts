export const reactFormValueSetter = (
    setStateFunction: React.Dispatch<React.SetStateAction<string>>,
) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setStateFunction(e.target.value);
