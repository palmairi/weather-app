import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";

const makeSut = (props) => {
    return render(<Button label="label" click={jest.fn()} {...props} />);
};

describe("<Button />", () => {
    test("Should render label correctly", () => {
        const { getByText } = makeSut({ label: "My Button" });

        expect(getByText(/My Button/)).toBeInTheDocument();
    });

    test("Should call onClick successfully", () => {
        const spy = jest.fn();

        const { getByText } = makeSut({ click: spy });

        fireEvent.click(getByText(/label/));

        expect(spy).toHaveBeenCalled();
    });
});