import { TitleName} from "./styles";
import { NameProfile } from "./types";

export default function renderNameTitle(name: NameProfile) {
    return (
        <TitleName>
            {name.firstName} {name.lastName}
        </TitleName>
    );
}

export * from './types';
export * from './styles';
