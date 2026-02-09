import { FC } from "react";
import Paragraph from "../../../atoms/Typography/Paragraph/Paragraph";

export interface IInputCounterProps {
	/** Counter limit */
	limit: number | undefined;
	/** Counter current number */
	current: number;
}

/** Primary UI component for user interaction */
const InputCounter: FC<IInputCounterProps> = ({ current = 0, limit }) => {
	if (!limit) return null;
	return (
		<Paragraph size="md" className="text-gray-500">
			{current ?? 0} / {limit}
		</Paragraph>
	);
};
export default InputCounter;
