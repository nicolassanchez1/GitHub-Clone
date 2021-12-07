import { SetStateAction } from 'react'
export type InputEvent = React.ChangeEvent<HTMLInputElement>
export type InputClick = React.MouseEvent<HTMLElement, MouseEvent>

export interface ISearchProps {
  placeholder: string;
  className: string;
  search?: boolean;
  name: string;
  value: string;
  id?: string;
  handleChange: (e: InputEvent) => void;
  handleClick: (e: InputClick) => void;
}

export const changeInputSize = ({ target }: any, id: string) => {
  const avoidClasses = ['input-icon', 'header-input']
  const currentClasses = target.className.split(' ')
  if (
    !currentClasses.some((item: string) =>
      avoidClasses.some((subItem) => item === subItem)
    )
  ) {
    const input: any = document.querySelector(`#${id}`)
    input.style.width = '275px'
  }
}
