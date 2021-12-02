import {SetStateAction} from 'react';
export type InputEvent = React.ChangeEvent<HTMLInputElement>
export type InputClick = React.MouseEvent<HTMLElement, MouseEvent>

export interface ISearchProps{
    placeholder: string;
    className: string;
    search: string;
    name: string;
    value: string;
    handleChange: (e:InputEvent) => void;
    handleClick: (e:InputClick) => void;
}
// export interface ISearchHandleChange{
//     e: any
// }